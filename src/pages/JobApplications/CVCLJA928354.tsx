import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Applications</title>
        <meta name="description" content="Password Generated Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
	<p>You have reached the Job Application Portal. This has been started on the 29th March to monitor new application statuses.</p>
	<p>I will be providing the CV used, my Cover Letter used and the status of the Job Application</p>
        <p>In addition I will gauge the suitability for the role with my skillset, location, green and potentially any red flags</p>
        </div>

        <div className={styles.grid}>
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
