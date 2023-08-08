import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/AdjustedLivingPrice.module.css';
import { handleTestClick, handleLocalWindowShift } from '@/scripts/testclick.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

type TravelTime = {
    route: number;
    travelTime: string;
};

export default function Home() {
    const [originLatitude, setOriginLatitude] = useState('');
    const [originLongitude, setOriginLongitude] = useState('');
    const [destinationLatitude, setDestinationLatitude] = useState('');
    const [destinationLongitude, setDestinationLongitude] = useState('');
    const [modeOfTransport, setModeOfTransport] = useState('driving');

    const [areAddressesConfirmed, setAreAddressesConfirmed] = useState(false);
    const [inSummaryMode, setInSummaryMode] = useState(false);

    const [travelTimes, setTravelTimes] = useState<TravelTime[]>([]);

    const [hourlyPayString, setHourlyPayString] = useState<string>('22.70');
    const [hourlyPay, setHourlyPay] = useState(22.70);

    const [weeklyRent, setWeeklyRent] = useState(450);
    const [departureFromHome, setDepartureFromHome] = useState("08:30");
    const [workStart, setWorkStart] = useState("09:00");
    const [hoursPerDay, setHoursPerDay] = useState(8);
    const [daysPerWeek, setDaysPerWeek] = useState(5);
    const [lateDifference, setLateDifference] = useState(1);

    var [hoursPerWeek, setHoursPerWeek] = useState(0);
    var [payPerWeek, setPayPerWeek] = useState(0);
    var [rentPercentage, setRentPercentage] = useState(0);

    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [workAddress, setWorkAddress] = useState('');
    const [workCoordinates, setWorkCoordinates] = useState({ lat: null, lng: null });

    useEffect(() => {
        setHoursPerWeek((hoursPerDay || 0) * (daysPerWeek || 0));
    }, [hoursPerDay, daysPerWeek]);

    useEffect(() => {
        setHourlyPay(parseFloat(hourlyPayString) || 0);
    }, [hourlyPayString]);

    useEffect(() => {
        setPayPerWeek((hourlyPay || 0) * (hoursPerWeek || 0));
    }, [hourlyPay, hoursPerWeek]);

    useEffect(() => {
        setRentPercentage((weeklyRent || 0) / (payPerWeek || 0) * 100);
    }, [weeklyRent, payPerWeek]);

    useEffect(() => {
        setRentPercentage((weeklyRent || 0) / (payPerWeek || 0) * 100);
    }, [weeklyRent, payPerWeek]);

    useEffect(() => {
        // Convert workStart and departureFromHome to minutes
        const workStartParts = workStart.split(':');
        const departureFromHomeParts = departureFromHome.split(':');
        const workStartMinutes = parseInt(workStartParts[0]) * 60 + parseInt(workStartParts[1]);
        const departureFromHomeMinutes = parseInt(departureFromHomeParts[0]) * 60 + parseInt(departureFromHomeParts[1]);

        // Calculate the difference in minutes
        const difference = workStartMinutes - departureFromHomeMinutes;

        setLateDifference(difference);
    }, [workStart, departureFromHome]);

    const totalHoursMinutes = travelTimes.reduce((total, time) => {
        const timeParts = time.travelTime.split(' ');

        let hours = 0;
        let minutes = 0;

        if (timeParts.length === 4) {
            // Format: "Y hours Z mins"
            hours = parseInt(timeParts[0], 10);
            minutes = parseInt(timeParts[2], 10);
        } else if (timeParts.length === 2) {
            // Format: "X mins"
            minutes = parseInt(timeParts[0], 10);
        }

        return [total[0] + hours, total[1] + minutes];
    }, [0, 0]);

    const calculateTravelTime = (travelTimeString: string) => {
        if (!travelTimeString) {
            return 0;
        }

        let travelTimeHours = 0;
        let travelTimeMinutes = 0;

        if (travelTimeString.includes("hour")) {
            // Format: "1 hour 50 mins" or "1 hour"
            let timeParts = travelTimeString.split(" hour");
            travelTimeHours = parseInt(timeParts[0], 10);
            if (timeParts[1] && timeParts[1].includes("min")) {
                travelTimeMinutes = parseInt(timeParts[1].split(" min")[0], 10);
            }
        } else if (travelTimeString.includes("min")) {
            // Format: "50 mins" or "1 min"
            travelTimeMinutes = parseInt(travelTimeString.split(" min")[0], 10);
        }

        return (travelTimeHours * 60 + travelTimeMinutes) * -1;
    }

    // Convert the total hours and minutes to total minutes
    let totalMinutes = totalHoursMinutes[0] * 60 + totalHoursMinutes[1];

    // Multiply the total minutes by the number of days per week
    totalMinutes *= daysPerWeek;

    // Calculate the new total hours and minutes for the week
    const totalHours = Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    const handleConfirmAddresses = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        try {
            const homeResponse = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
                }
            });

            const homeLocation = homeResponse.data.results[0].geometry.location;
            setCoordinates(homeLocation);
            setOriginLatitude(homeLocation.lat);
            setOriginLongitude(homeLocation.lng);

            const workResponse = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: workAddress,
                    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
                }
            });

            const workLocation = workResponse.data.results[0].geometry.location;
            setWorkCoordinates(workLocation);
            setDestinationLatitude(workLocation.lat);
            setDestinationLongitude(workLocation.lng);

        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.get(`/api/traveltimes`, {
                params: {
                    origin: `${originLatitude},${originLongitude}`,
                    destination: `${destinationLatitude},${destinationLongitude}`,
                    departTime: `${departureFromHome}`,
                    secondDepartTime: `${hoursPerDay}`,
                    transportUsed: `${modeOfTransport}`
                },
            });

            setTravelTimes(response.data);
            setAreAddressesConfirmed(true);
        } catch (error) {
            console.error('Error fetching travel times:', error);
        }
    };

    const resetFields = (event: React.MouseEvent<HTMLInputElement>) => {
        try {
            setOriginLatitude('');
            setOriginLongitude('');
            setDestinationLatitude('');
            setDestinationLongitude('');
            setModeOfTransport('driving');
            setAreAddressesConfirmed(false);
            setHourlyPayString('22.70');
            setHourlyPay(22.70);
            setWeeklyRent(450);
            setDepartureFromHome("08:30");
            setWorkStart("09:00");
            setHoursPerDay(8);
            setDaysPerWeek(5);
            setLateDifference(1);
            setHoursPerWeek(0);
            setPayPerWeek(0);
            setRentPercentage(0);

        } catch (error) {
            console.error('Error resetting fields:', error);
        }
    };
  return (
      <>
          <Head>
              <title>Local Projects</title>
              <meta name="description" content="Other Projects" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
              <div className={styles.videoWrapper}>
                  <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
                      <source src={require('./videos/BubbPlanet.mp4')} type="video/mp4" />
                  </video>
              </div>
              <div className={styles.grid}>
                  <button 
                      onClick={handleLocalWindowShift}
                      className={styles.card}
                  >
                      <h2 className={inter.className}>
                          Return <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Return to the current projects page.
                      </p>
                  </button>
              </div>
              <div className={styles.grid}>
                  <form onSubmit={handleConfirmAddresses}>
                      <div className={styles.formSection}>
                          <div className={styles.formRow}>
                              <div className={styles.formField}>
                                  <label htmlFor="address" className={inter.className}>Home Address: </label>
                                  <input
                                      type="text"
                                      id="address"
                                      className={styles.input}
                                      name="address"
                                      value={address}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => setAddress(e.target.value)}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="workAddress" className={inter.className}>Work Address: </label>
                                  <input
                                      type="text"
                                      id="workAddress"
                                      className={styles.input}
                                      name="workAddress"
                                      value={workAddress}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => setWorkAddress(e.target.value)}
                                  />
                              </div>
                              <br />
                              <div className={styles.formField}>
                                  <label htmlFor="hourlyPayString" className={inter.className}>Hourly Pay: </label>
                                  <input
                                      type="text"
                                      id="hourlyPayString"
                                      className={styles.inputSmall}
                                      name="hourlyPayString"
                                      value={hourlyPayString}
                                      onChange={(e) => {
                                          const re = /^[0-9]*\.?[0-9]*$/;
                                          if (e.target.value === '' || re.test(e.target.value)) {
                                              setHourlyPayString(e.target.value);
                                          }
                                      }}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="weeklyRent" className={inter.className}>Weekly Rent: </label>
                                  <input
                                      type="text"
                                      id="weeklyRent"
                                      className={styles.inputSmall}
                                      name="weeklyRent"
                                      value={weeklyRent}
                                      onChange={(e) => {
                                          const re = /^[0-9\b]+$/;
                                          // if value is not blank, then test the regex
                                          if (e.target.value === '' || re.test(e.target.value)) {
                                              setWeeklyRent(e.target.value === '' ? 0 : Number(e.target.value));
                                          }
                                      }}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="departureFromHome" className={inter.className}>Departure From Home: </label>
                                  <input
                                      type="time"
                                      id="departureFromHome"
                                      className={styles.inputSmall}
                                      name="departureFromHome"
                                      value={departureFromHome}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => setDepartureFromHome(e.target.value)}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="workStart" className={inter.className}>Work Start Time: </label>
                                  <input
                                      type="time"
                                      id="workStart"
                                      className={styles.inputSmall}
                                      name="workStart"
                                      value={workStart}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => setWorkStart(e.target.value)}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="modeOfTransport" className={inter.className}>Mode of Transport: </label>
                                  <select
                                      id="modeOfTransport"
                                      name="modeOfTransport"
                                      value={modeOfTransport}
                                      onChange={(e) => {
                                          setModeOfTransport(e.target.value);
                                      }}
                                      className={styles.inputSmall}
                                      disabled={areAddressesConfirmed}
                                  >
                                      <option value="driving">Driving</option>
                                      <option value="transit">Transit</option>
                                      <option value="walking">Walking</option>
                                  </select>
                              </div>
                              <br />
                              <div className={styles.formField}>
                                  <label htmlFor="hoursPerDay" className={inter.className}>Hours worked per day: </label>
                                  <input
                                      type="text"
                                      id="hoursPerDay"
                                      className={styles.inputSmall}
                                      name="hoursPerDay"
                                      value={hoursPerDay}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => {
                                          const re = /^[0-9\b]+$/;
                                          // if value is not blank, then test the regex
                                          if (e.target.value === '' || re.test(e.target.value)) {
                                              setHoursPerDay(e.target.value === '' ? 0 : Number(e.target.value));
                                          }
                                      }}
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label htmlFor="daysPerWeek" className={inter.className}>Days worked per week: </label>
                                  <input
                                      type="text"
                                      id="daysPerWeek"
                                      className={styles.inputSmall}
                                      name="daysPerWeek"
                                      value={daysPerWeek}
                                      disabled={areAddressesConfirmed}
                                      onChange={(e) => {
                                          const re = /^[0-9\b]+$/;
                                          // if value is not blank, then test the regex
                                          if (e.target.value === '' || re.test(e.target.value)) {
                                              setDaysPerWeek(e.target.value === '' ? 0 : Number(e.target.value));
                                          }
                                      }}
                                  />
                              </div>
                          </div>
                          {!areAddressesConfirmed && (
                          <button type="submit" className={styles.button} style={{marginTop: '20px', marginBottom: '20px'}}>Calculate Data</button>
                          )}
                      </div>
                  </form>
                  <form onSubmit={handleSubmit}>
                      {!areAddressesConfirmed && (
                      <div className={styles.formSection}>
                          <div className={styles.formRow}>
                              <div className={styles.formField}>
                                  <label className={inter.className} htmlFor="olatitude">Home Latitude/Longitude: </label>
                                  <input
                                      type="text"
                                      id="olatitude"
                                      name="olatitude"
                                      className={styles.inputSmall}
                                      value={originLatitude}
                                      readOnly
                                  />
                                  <input
                                      type="text"
                                      id="olongitude"
                                      name="olongitude"
                                      className={styles.inputSmall}
                                      value={originLongitude}
                                      readOnly
                                  />
                              </div>
                              <div className={styles.formField}>
                                  <label className={inter.className} htmlFor="dlatitude">Work Latitude/Longitude: </label>
                                  <input
                                      type="text"
                                      id="dlatitude"
                                      name="dlatitude"
                                      className={styles.inputSmall}
                                      value={destinationLatitude}
                                      readOnly
                                  />
                                  <input
                                      type="text"
                                      id="dlongitude"
                                      name="dlongitude"
                                      className={styles.inputSmall}
                                      value={destinationLongitude}
                                      readOnly
                                  />
                              </div>
                          </div>
                          <input type="submit" className={styles.button} style={{ marginTop: '20px' }} value="Calculate Route" />
                      </div>
                      )}
                  </form>
                  {areAddressesConfirmed && (
                  <div className={styles.grid}>
                      <br/>
                          {travelTimes.map((time, index) => (
                          <div key={`${time.route}-${index}`}>
                              <div className={styles.grid}>
                                      <p className={inter.className}>
                                      {index === 0 ? 'Departure to Work Time' : index === 1 ? 'Return to Home Time' : `Route ${time.route}`} {time.travelTime}
                                  </p>
                                  
                                  {index === 0 && (lateDifference + calculateTravelTime(time.travelTime)) <= 0 && <p className={inter.className}>You would need to leave for work earlier as you would be late by {Math.abs(lateDifference + calculateTravelTime(time.travelTime))} minutes.</p>}
                              </div>
                          </div>
                      ))}
                          <p className={inter.className}>Total travel time per week: {totalHours} hours {totalMinutes} minutes</p>
                          <br/>
                          <p className={inter.className}>Your weekly pay (Gross): {payPerWeek.toFixed(2)}</p>

                          <p className={inter.className}>Commute opportunity cost: {((totalHours + totalMinutes / 60) * hourlyPay).toFixed(2) } </p>
                          <p className={inter.className}>Your rent is {rentPercentage.toFixed(2)}% of your weekly gross pay.</p>
                          <div>
                              {rentPercentage > 60 && <p className={inter.className}>This place is completely unaffordable on your current income.</p>}
                              {rentPercentage <= 60 && rentPercentage > 50 && <p className={inter.className}>This would be financially limiting given taxes. Consider upping your hours, or consider somewhere more affordable.</p>}
                              {rentPercentage <= 50 && rentPercentage > 40 && <p className={inter.className}>Consider budgeting carefully at this location, or living at a cheaper location.</p>}
                              {rentPercentage <= 40 && rentPercentage > 30 && <p className={inter.className}>This is generally quite expensive, but easily manageable.</p>}
                              {rentPercentage <= 30 && rentPercentage > 20 && <p className={inter.className}>This is considered affordable, consider saving as much as you can.</p>}
                              {rentPercentage <= 20 && <p className={inter.className}>You can consider living somewhere nicer to live if you are not already saving for a mortgage.</p>}
                          </div>  
                          <input type="submit" className={styles.button} style={{ marginTop: '20px' }} onClick={resetFields} value="Enter another route" />
                      </div>
                  )}
              </div>
          </main>
    </>
  )
}
