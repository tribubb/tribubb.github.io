import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = (url: string) => {
            console.log('Route change started:', url)
        }

        const handleRouteChangeComplete = (url: string) => {
            console.log('Route change completed:', url)
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
        }
    }, [])

    return <Component {...pageProps} />
}