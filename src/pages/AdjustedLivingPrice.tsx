import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import handleTestClick from '@/scripts/testclick.js';

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
          </main>
    </>
  )
}
