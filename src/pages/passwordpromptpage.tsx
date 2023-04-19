import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [password, setPassword] = useState('');
  const [isJobApplication, setIsJobApplication] = useState(false);
  const [isReblading, setIsReblading] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === 'Q75CK9CBXKVZLDH3')
    {
      setIsJobApplication(true);
      router.push('/JobApplications/CVCLJA928354');
    }
    else
    {
      setIsJobApplication(false);
    }
  };

  return (
    <>
      <Head>
        <title>Password Prompt Page</title>
        <meta name="description" content="Password Prompt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
	  <form onSubmit={handleSubmit}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {isJobApplication && <p>Success!</p>}
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
