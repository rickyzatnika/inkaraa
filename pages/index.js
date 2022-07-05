import Home from '../src/components/home/Home'
import Head from 'next/head'


const HomePage = () => {



  return (
    <>
      <Head>
        <title>Inkara Indonesia - Event Organizer & Tourism</title>
        <meta name='description' content='Inkara Indonesia adalah perusahaan jasa Event Organizer (EO) dan pariwisata terpercaya dan berpengalaman di Bandung. '/>
        <meta name='keywords' content='in.id, Inkara Indonesia, event organizer (EO), EO bandung, inkara.id, tourism, event planner, event management, event fest, event festival, product event '/>
        <meta property='og:title' content='Event Organizer dan Tourism'/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="container-home">
        <Home />
      </div>
    </>
  )
}


export default HomePage