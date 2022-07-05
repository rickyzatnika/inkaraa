import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
import { motion, Variants } from 'framer-motion'



const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 8, 0],
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
      type: "spring",
      bounce: 0.3,
      duration: 2
    }
  }

}

const textAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
      type: "spring",
      bounce: 0.3,
      duration: 2
    }
  }

}



const About = () => {




  return (
    <>
      <Head>
        <title>About - Inkara Indonesia</title>
        <meta name='description' content='Our extensive experience in the field equips us with the skills to expertly tailor our performance to your company`s requirements. Mission : To champion and develop the event profession for the benefit of business, education, community and society. Vision : To be the Champion for Event Professionals across the diverse and dynamic event sector and to provide opportunities for learning and development.' />
        <meta name='keywords' content='about in.id, tentang Inkara Indonesia,about inkara, event organizer (EO), EO bandung, inkara.id, tourism, event planner, event management, event fest, event festival, product event ' />
        <meta property='og:title' content='Tentang kami, inkara indonesia' />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <motion.section className="about"
         initial={"offscreen"}
         whileInView={"onscreen"}
         viewport={{ once: false, amount: 0.5 }}
         transition={{ staggerChildren: 0.1 }}>
        <div className="aboutsPages-container">
          <Image priority={true} width={1300} height={800} src='/about.png' alt="inkara indonesia" />
          <div className="taglineAbout">
            <h3>About Us</h3>
          </div>
        </div>
        <div className="aboutPage-content">
          <Row as={Col} md="12" sm='12' >
            <Col md="6" sm="12" className="p-4">
              <div className="animate">
                <motion.p  variants={textAnimate}>Since the establishment of our company, we have been bringing together like-minded active young people with a passion for cultural exploration and redefining the true meaning of travel and event experiences.</motion.p>
                <motion.p  variants={textAnimate}>Our extensive experience in the field equips us with the skills to expertly tailor our performance to your company’s requirements.</motion.p>
                <motion.p variants={textAnimate}>We at in.id pride ourselves on the very highest level of responsiveness to your requests situations can change at a moment’s notice and we always stand ready to accommodate.</motion.p>
              </div>

            </Col>
            <Col md="6" sm="12" className="p-4 ms-auto">
              <motion.div className="animate"
                variants={imageAnimate}
              >
                <h3 className='text-start'>Our Mission</h3>
              </motion.div>
              <Row>
                <Col mb='3'>
                  <motion.div className="animate"
                    variants={imageAnimate}
                  >
                    <p className='Our-parag'>To champion and develop the event profession for the benefit of business, education, community and society.</p>
                  </motion.div>
                </Col>
              </Row>
              <motion.div className="animate"
                variants={imageAnimate}
              >
                <h3 className='text-end'>Our Vision</h3>
              </motion.div>
              <Row>
                <motion.div className="animate"
                  variants={imageAnimate}
                >
                  <Col mb="3">
                    <p className='Our-parag end'>To be the Champion for Event Professionals across the diverse and dynamic event sector and to provide opportunities for learning and development.</p>
                  </Col>
                </motion.div>
              </Row>
            </Col>
          </Row>
          <div className="OurValue">
            <h3 className="valueTitle text-center mb-5">
              Our Values
            </h3>
            <div className="value-container">
              <Row>
                <Col md="4">
                  <ul>
                    <li className='mb-3'><span>Professionalism</span> – Operating at the highest standard, encompassing strong ethical,
                      moral and honest behaviours and accountability</li>
                    <li><span>Integrity</span> Ensuring appropriate and ethical decisions are made at all times that reflect
                      the best qualities of the profession.</li>
                  </ul>
                </Col>
                <Col md="4">
                  <ul>
                    <li className='mb-3'>
                      <span>Sustainability</span> – Developing and delivering our work and events in a sustainable way
                      and inspiring others to do the same.
                    </li>
                    <li><span>Honesty</span> – Openness, fairness and transparency in everything we do.</li>
                  </ul></Col>
                <Col md="4">
                  <ul>
                    <li><span>Collaboration</span> – Working together as a global community of event professionals,
                      developing new practices, generating opportunities, and overcoming challenges.</li>



                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default About


