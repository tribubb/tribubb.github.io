import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Tridsprojects</title>
                <meta name="description" content="Welcome to Triden's official project site" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.videoWrapper}>
                    <video autoPlay muted loop playsInline className={styles.backgroundVideo}>
                        <source src={require('./videos/BubbPlanet.mp4')} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.spin}>
                    <a href="BubbRTS/bubbRTSLanding">
                        <code className={styles.code}>BubbRTS v.025 available here</code>
                    </a>
                </div>
                <div className={styles.grid}>
                    <Link href="/unityprojects" passHref className={styles.card}>
                        <a>
                            <h2 className={inter.className}>
                                Unity Projects<span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>View projects currently under development.</p>
                        </a>
                    </Link>
                    <a href="otherprojects" className={styles.card}>
                        <h2 className={inter.className}>
                            Other Projects<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>View other projects.</p>
                    </a>
                </div>
            </main>
        </>
    );
}