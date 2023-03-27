import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tridsprojects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.spin}>
          <a
            href="BubbRTS/bubbRTSLanding"
          >
            <code className={styles.code}>BubbRTS v.0241 available here</code>
          </a>
        </div>

        <div className={styles.center}>
        </div>

        <div className={styles.grid}>
          <a
            href="BubbRTS/bubbRTSLanding"
            className={styles.card}
          >
            <h2 className={inter.className}>
              BubbRTS <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             In development since November 2022. Newest version v0.241 released <code>27/03/2023 06:00am</code>
            </p>
          </a>

	  <a
            href="https://www.dropbox.com/s/hgeu8qfbbaf8bcb/TimeRunnerBuild.rar?dl=0"
            className={styles.card}
            target="_blank"
          >
            <h2 className={inter.className}>
              TimeRunner <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             Originally developed for Android Mid 2022, this project has since been abandoned.
            </p>
          </a>

	  <a
            href="https://www.dropbox.com/s/h0rc8wkfwtbbvn4/TridClicker.rar?dl=0"
            className={styles.card}
            target="_blank"
          >
            <h2 className={inter.className}>
              TridClicker <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
             Originally developed for Android Mid/Late 2022, this project has since been abandoned.
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
