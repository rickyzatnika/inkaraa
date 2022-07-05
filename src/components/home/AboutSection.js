import classes from './AboutSection.module.css';
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { motion, Variants } from 'framer-motion'



const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        rotate: [0, 10, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }

}

const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }

}


const AboutSection = () => {

    const router = useRouter()


    return (
       
            <section>
                <div className={classes.about}>
                    <motion.div className={classes.about_container}
                         initial={"offscreen"}
                         whileInView={"onscreen"}
                         viewport={{ once: false, amount: 0.5 }}
                         transition={{ staggerChildren: 0.5 }}
                    >
                        <motion.div className={classes.about_title}
                            variants={textAnimate}
                        >

                            <h1>About Our Company</h1>
                        </motion.div>
                        <motion.div className={classes.about_content}

                        >
                            <motion.div className={classes.about_image}
                                variants={imageAnimate}>
                                <Image
                                    priority={true}
                                    width={420} height={300}
                                    src='/about.png' alt="logo inkara" />
                            </motion.div>
                            <motion.div className={classes.col_2}
                                variants={textAnimate}
                            >
                                <p>Since the establishment of our company, we have been bringing together like-minded active young people with a passion for cultural exploration and redefining the true meaning of travel and event experiences.</p>
                                <p>Our extensive experience in the field equips us with the skills to expertly tailor our performance to your company’s requirements.</p>
                                <p>We at in.id pride ourselves on the very highest level of responsiveness to your requests situations can change at a moment’s notice and we always stand ready to accommodate.</p>
                                <div className={classes.link_contents}>
                                    <Link href="/about">More About Us </Link>
                                    <Link href="/about"><MdOutlineKeyboardArrowRight size={20} className={classes.arrow_icons} /></Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className={classes.container_info}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ staggerChildren: 0.5 }}
                    >
                        <motion.div className={classes.serviceTitle}
                            variants={textAnimate}
                        >
                            <h2 className='text-center mb-5'>Our <span>Services</span></h2>
                        </motion.div>
                        <Row className={`mb-5 p-5 ${classes.content}`}>
                            <Col lg={6} md={6} sm={12} className={`p-3 text-center ${classes.content_1}`}

                            >
                                <motion.div className={classes.animate}
                                    variants={textAnimate}>
                                    <h3 className='mb-3'>Event Organizer</h3>
                                    <p >
                                        EO stands for Event Organizer which in Indonesian means event organizer. Literally, EO is a party or professional service provider that regulates the continuity of an event..</p>
                                    <center><button onClick={() => router.push('/organizer')} className={classes.button}>Read More</button></center>
                                </motion.div>

                            </Col>
                            <Col className={classes.Image} lg={6} md={6} sm={12}>
                                <motion.div className={classes.BoxImage}
                                    variants={imageAnimate}
                                >
                                    <Image width={620} height={400} src='/eventPlan.jpg' alt="logo inkara" />
                                </motion.div>
                            </Col>
                        </Row>
                        <Row className={`p-5 ${classes.content_2}`}>
                            <Col className={classes.Image_2} lg={6} md={6} sm={12}>
                                <motion.div className={classes.BoxImage_2}
                                    variants={imageAnimate}
                                >
                                    <Image width={620} height={400} src='/eventMan.jpeg' alt="logo inkara" />
                                </motion.div>
                            </Col>
                            <Col className={` p-3 text-center ${classes.content_1}`} lg={6} md={6} sm={12}
                                variants={textAnimate}
                            >
                                <motion.div className={classes.animate}
                                    variants={textAnimate}>
                                    <h3 className='mb-3'>Tourism</h3>
                                    <p>We also specialize in the field of Tour & Travel Tours in the city of Bandung. Serving gatherings, outings, and other tour packages...</p>
                                    <center><button onClick={() => router.push('/tourism')} className={classes.button}>Read More</button></center>
                                </motion.div>

                            </Col>

                        </Row>
                    </motion.div>
                </div>
            </section>


    )
}

export default AboutSection