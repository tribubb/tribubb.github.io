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
        <meta name="description" content="Tridsprojects Official Website" />
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
          /*<Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />*/
        </div>

        <div className={styles.grid}>
          <a
            href="unityprojects.html"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Current Projects<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              View projects currently under development.
            </p>
          </a>

	  <a
            href="otherprojects.html"
            className={styles.card}
          >
            <h2 className={inter.className}>
               Other Projects<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              View other projects.
            </p>
          </a>

          <a
            href="passwordpromptpage.html"
            className={styles.card}
          >
            <h2 className={inter.className}>
               Enter a password<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              View a password protected page
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
