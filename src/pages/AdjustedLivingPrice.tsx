import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import handleTestClick from '@/scripts/testclick.js';
import { useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [originLatitude, setOriginLatitude] = useState('');
  const [originLongitude, setOriginLongitude] = useState('');
  const [travelTimes, setTravelTimes] = useState([]);

  const handleSubmit = async (event) => {
        event.preventDefault();

      try {
          const response = await axios.get(`/api/traveltimes`, {
              params: {
                  origin: `${originLatitude},${originLongitude}`,
              },
          });

          setTravelTimes(response.data);
      } catch (error) {
          console.error('Error fetching travel times:', error);
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
                      onClick={handleTestClick}
                      className={styles.card}
                  >
                      <h2 className={inter.className}>
                          Google API Test <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Google API Test.
                      </p>
                  </button>

                  <a
                      href="index"
                      className={styles.card}
                  >
                      <h2 className={inter.className}>
                          Return <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Return to main page
                      </p>
                  </a>
              </div>
              <div>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="olatitude">Origin Latitude:</label>
                      <br />
                      <input
                          type="text"
                          id="olatitude"
                          name="olatitude"
                          value={originLatitude}
                          onChange={(e) => setOriginLatitude(e.target.value)}
                      />
                      <br />
                      <label htmlFor="olongitude">Origin Longitude:</label>
                      <br />
                      <input
                          type="text"
                          id="olongitude"
                          name="olongitude"
                          value={originLongitude}
                          onChange={(e) => setOriginLongitude(e.target.value)}
                      />
                      <br />
                      <br />
                      <input type="submit" value="Submit" />
                  </form>

                  <div>
                      {travelTimes.map((time) => (
                          <div key={time.route}>
                              <p>Route {time.route}</p>
                              <p>Travel Time: {time.travelTime}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </main>
    </>
  )
}
