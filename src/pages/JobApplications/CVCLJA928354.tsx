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
            <div className={styles.basicBorder}>
                <p className={inter.className}>You have reached the Job Application Portal. This has been started on the 4th of April to monitor new application statuses.</p><br/>
                <p className={inter.className}>I will be providing the CV used, my Cover Letter used and the status of the Job Application</p><br/>
                <p className={inter.className}>In addition I will gauge the suitability for the role with my skillset, and possibly location, green and potentially any red flags</p>
            </div>
        </div>

        <div className={styles.grid}>
	      <a
            href="https://www.dropbox.com/s/qg93gx4bjkwjk2d/AbsoluteITApplication.zip?dl=0"
            className={styles.card}
          >
            <h2 className={inter.className}>
               Absolute IT 2/04 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Application Support Engineer
            </p>
          </a>
        </div>

        <div className={styles.grid}>
	      <a
            href="https://www.dropbox.com/s/04ogm89pvdqdvrm/SparkApplication.zip?dl=0"
            className={styles.card}
          >
            <h2 className={inter.className}>
               Spark 31/03 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Automation Engineer - Software Developer
            </p>
          </a>
              </div>

        <div className={styles.grid}>
	  <a
            href="../index"
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
