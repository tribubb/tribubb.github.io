import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
                  <a
                      href="/AdjustedLivingPrice"
                      className={styles.card}
                      target="_blank"
                  >
                      <h2 className={inter.className}>
                          Adjusted Living Cost <span>-&gt;</span>
                      </h2>
                      <p className={inter.className}>
                          Developing July 2023, API with Express.js to calculate the real cost in living in any given location.
                      </p>
                  </a>

                  <a
                      href="/index"
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
