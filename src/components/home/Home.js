import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Home.module.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import Link from 'next/link'
import AboutSection from './AboutSection';
import { motion } from 'framer-motion';



const HomePage = () => {

 

  return (

    <>
      <section className={classes.Homepage}>
        <Carousel fade pause='false' className={classes.Carousel} controls={true} indicators={false}>
          <Carousel.Item interval={3000} className={classes.Item}>
            <Image
              className={classes.bg1}
              width={1300} height={800}
              priority={true}
              src='/home.png'
              alt="inkara indonesia"
            />
            <motion.div initial="hidden" animate="visible" className={classes.heroContent}
              variants={{
                hidden: { opacity: 0, x: '-100vw' },
                visible: {
                  opacity: 1, x: 0, transition: {
                    duration: 0.6, bounce: 0.3,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    type: 'spring',
                  },
                }
              }}
            >
              <h1>EVENT & TOURISM </h1>
              <h2>MANAGEMENT</h2>
              <p><span className={classes.span1}>Highest Level</span> of <span className={classes.span1}>Responsiveness</span> to your requests</p>
              <Link href='/contact'><button type='button' className={classes.button}>Work With Us</button></Link>
            </motion.div>

          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image
              className={classes.bg2}


              width={1300} height={800}
              src='/SLIDER-01.jpg'
              alt="Second background"
            />
            <div className={classes.senjaTicket}>
              <h2>Buruan Beli Tiketnya</h2>
              <Link href='/event'><button type='button' className={classes.button}>Pesan Ticket</button></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <Image
              className={classes.bg2}


              width={1300} height={800}
              src='/audisi.png'
              alt="Second background"
            />
            <div className={classes.senjaTicket}>

              <Link href='/audisi'><button type='button' className={classes.button}>Pendaftaran</button></Link>
            </div>
          </Carousel.Item>
        </Carousel>

      </section>
      <AboutSection />
    </>


  )
}

export default HomePage