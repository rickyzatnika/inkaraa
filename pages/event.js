import React from 'react'
import Image from 'next/image'
import Forms from '../src/components/form/Form'
import Head from 'next/head'




const Event = () => {


    return (
      <> 
      <Head>
        <title>Our Event - Inkara Indonesia</title>
        <meta name='description' content='Senja Fest merupakan festival musik yang menjadi wadah kreativitas sebagai jembatan antara musisi dan penggemar, untuk bersama- sama menikmati sajian musik dengan pengalaman serta kemasan yang dapat dinikmati secara langsung yang memberikan suasana yang berbeda dari konser biasanya.'/>
        <meta name='keywords' content='senjafest-bromo, ticket senjafest, senjafest in.id, event organizer (EO), event senjafest, inkara.id, senjafest, senjafest inkara, event planner, konser musik, event fest, event festival, festival 2022, chapter bromo '/>
        <meta property='og:title' content='Event Kami, Senjafest 2022'/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
        <section 
          
        >
          <div className="event-container"
           
          >
            <div className="event-hero" >
              <Image 
              priority={true}
              width={1300} height={800} src='/eventpage.jpg' alt="senjafest" />
            </div>
            <div className="SenjaDesc" 
        
            >
              <q>
                Senja Fest merupakan festival musik yang menjadi wadah kreativitas sebagai jembatan antara musisi dan penggemar, untuk bersama- sama menikmati sajian musik dengan pengalaman serta kemasan yang dapat dinikmati secara langsung yang memberikan suasana yang berbeda dari konser biasanya, dengan memadukan unsur alam serta culture yang akan menjadikan pengalaman menarik baik untuk musisi yang akan perform juga untuk penggemar hadir di festival musik senja .
              </q>
            </div>
            <div className="tagline">
              <h2>Rasakan Rindu, Nikmati Senja</h2>
              <strong>Bersama</strong>
              <Image priority={true} width={1200} height={800} src='/all talent-01.jpg' alt="talent senjafest bromo" />
            </div>
  
  
            <Forms />
          </div>
          <div className="whatsapChat">
            <p>CS Support</p>
            <a href="https://wa.wizard.id/d3ffaf" target="_blank" rel="noopener noreferrer"><Image width={30} height={30} src='/whatsapp.png' alt="whatsapp logo" /></a>
          </div>
        
        <div className="tiketCom">
          <a href="https://www.loket.com/event/senja-fest-2022-chapter-bromo-bdw1" target="_blank" rel="noopener noreferrer">Klik disini untuk pembelian tiket di :</a>
          <a href="https://www.loket.com/event/senja-fest-2022-chapter-bromo-bdw1" target="_blank" rel="noreferrer"><Image width={60} height={90} src='/Loket.png' alt="tiket.com logo" /></a>
        </div>
      </section>
      </>
    )
  }
  
  export default Event