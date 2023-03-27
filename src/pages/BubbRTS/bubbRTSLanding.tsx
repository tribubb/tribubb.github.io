import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/BubbRTS.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BubbRTS: Tridsprojects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.spin}>
          <a
            href="https://www.dropbox.com/s/fz1hctsrph7davp/BubbRTS.v0241.rar?dl=0"
	    target="_blank"
          >
            <code className={styles.code}>BubbRTS v.0241 available here</code>
          </a>
        </div>

        <div className={styles.center}>
	  <p className={inter.className}>
            BubbRTS is a Real Time Strategy game being developed for PC.
	  </p>
	  <p className={inter.className}>
            In BubbRTS, you build a base, accumulate resources and survive waves of opponents, developing technology and your society to combat invasion.
	  </p>
	  <p className={inter.className}>
            New updates are being posted every second Thursday night with a list of additions, check Friday for the new version.
	  </p>
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.dropbox.com/s/fz1hctsrph7davp/BubbRTS.v0241.rar?dl=0"
            className={styles.card}
            target="_blank"
          >
            <h2 className={inter.className}>
              Download <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             Download the newest version v0.241. Released <code>27/03/2023 06:00am</code>
            </p>
          </a>

	  <a
            href="../unityprojects"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Return to Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Return to the current projects page.
            </p>
          </a>

	  <a
            href="../index"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Return to Main Page <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Return to the main page.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
