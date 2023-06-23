import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <Head>
              <title>Other Projects</title>
              <meta name="description" content="Other Projects" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
              <div className={styles.videoWrapper}>
                  <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
                      <source src={require('./videos/TimeRunnerBackground.mp4')} type="video/mp4" />
                  </video>
              </div>
              <div className={styles.grid}>
                  <a
                      href="https://chrome.google.com/webstore/detail/clay-tablet-extended-clip/fbhocoeaipopfeeflnemkbehpmkeicla?hl=en&authuser=0"
                      className={styles.card}
                      target="_blank"
                  >
                      <h2 className={inter.className}>
                          Clay Tablet Extended Clipboard <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Developed in April 2023. Website productivity extender made in HTML/CSS/JS Manifest Version 3
                      </p>
                  </a>

                  <a
                      href="https://bubbclicker.azurewebsites.net/"
                      className={styles.card}
                  >
                      <h2 className={inter.className}>
                          BubbClicker <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Developed in June 2023. Clicker game made with ASP.NET Core and MySQL hosted in Azure.
                      </p>
                  </a>

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
          </main>
    </>
  )
}
