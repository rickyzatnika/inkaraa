import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/eventPage.css'
import '../styles/contactPage.css'
import '../styles/aboutPage.css'
import '../styles/galleryPage.css'
import '../styles/audisiPage.css'
import Layout from '../src/components/layout/Layout'
import Head from 'next/head'
import Script from 'next/script'





function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1,viewport-fit=cover" />
      </Head>
      {/* <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="my-script">
       {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
 
         gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
       `}
      </Script> */}


      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp;
