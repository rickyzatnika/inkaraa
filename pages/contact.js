import Image from 'next/image';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { BiPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import Head from 'next/head';
import { useState, useRef } from 'react';
import Modal from '../src/components/modal/Modal';
import emailjs from '@emailjs/browser'


const Contact = () => {





  const [validated, setValidated] = useState(false);
  const handleInput = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzkb91v', 'template_p6o8h7l', form.current, 'gfWYIL2GC3vJ6UBpy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };



  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>Contact Us - Inkara Indonesia</title>
        <meta name='description' content='Contact Our Team and Discuss About What You Need.' />
        <meta name='keywords' content=' contact inkara, contact in.id, contact inkara, in.id,alamat in.id, event organizer (EO), EO bandung, inkara.id, tourism, event planner, event management, event fest, event festival, product event ' />
        <meta property='og:title' content='Contact us inkara.id' />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="contacts">


        <div className="contact-container">
          <div className="contact-title"

          >
            <h2>
              Contact Our Team and Discuss About What You Need.
            </h2>
          </div>
          <div className="contact-image"

          >
            <Image width={650} height={500} src='/contact.png' alt='contact inkara' />
          </div>
        </div>
        <div className="getInTouch">
            <h3>Get In Touch With Us</h3>
          </div>
        <div className="container-content">
          
          <div className="contact-form">
            <Form noValidate validated={validated} ref={form} onInput={handleInput} onSubmit={sendEmail} className='Form-Contact'>
              <FloatingLabel
                controlId="floatingInput"
                label="Name">
                <Form.Control required name='user_name' type="name" placeholder="name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Email Address">
                <Form.Control required name="user_email" type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Phone Number">
                <Form.Control required name='user_phone' type="number" placeholder="Number" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  required
                  name='message'
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <center><button type="submit" className='bton' onClick={() => {
                setOpenModal(true)
              }} >Submit form</button> {openModal && <Modal closeModal={setOpenModal} />}</center>
            </Form>
          </div>
         
            <div className="right-flex">
              <div className="right-title phone">
                <h5>Quick Contact</h5>
                <div className="phone-icon">
                  <BiPhoneCall size={30} className="icon" />
                  <div className="phone-icon-content">
                    <strong>Phone :</strong>
                    <p>+62 811-1111-0328</p>
                  </div>
                </div>
                <div className="phone-icon">
                  <HiMail size={30} className="icon" />
                  <div className="phone-icon-content">
                    <strong>Email :</strong>
                    <p>office@inkara.id</p>
                  </div>
                </div>

              </div>
              <div className="right-title">
                <h5>Address</h5>
                <address>Komp. Adipura Cluster Palem,

                  Jl Palem I No.5 Bandung,

                  West java - Indonesia</address>
              </div>
            </div>
         
        </div>



      </section >
    </>
  )
}

export default Contact
