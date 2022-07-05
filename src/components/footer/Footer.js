import classes from './Footer.module.css';
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser'





const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzkb91v', 'template_qjp34tl', form.current, 'gfWYIL2GC3vJ6UBpy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const Route = useRouter();


  useEffect(() => {
    let addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: '', // include this for selected languages
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL
    },
      'google_translate');

  }

  return (
    <>

      <footer className={classes.Footer__container}>
        <div className={classes.Footer__flex}>
          <div className={classes.Footer__logo}>
            <Image onClick={() => Route.push('/')} width={100} height={65} src='/inkara.png' alt='logo inkara indonesia' />
            <p><strong>Inkara Indonesia</strong> or in.id is a service company for Event Organizer & Tourism in Bandung . Our extensive experience in the field equips us with the skills to expertly tailor our performance to your company`s requirements.</p>
            <p>office@inkara.id</p>

            <div id="google_translate"></div>

          </div>
          <div className={classes.Footer__menu}>
            <h4>Menu</h4>
            <ul>

              <li><Link href='/about'>About Us</Link></li>
              <li><Link href='/event'>Our Event</Link></li>
              <li><Link href='/tourism'>Tourism</Link></li>
              <li><Link href='/gallery'>Our Gallery</Link></li>
              <li><Link href='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className={classes.Footer__support}>
            <h4>Support</h4>
            <ul>

              <li><Link href='/terms'>Terms & Condition</Link></li>
              <li><Link href='/privacy'>Privacy Policy</Link></li>
              <li><Link href='/disclaimer'>Disclaimer</Link></li>

            </ul>
          </div>
          <div className={classes.Footer__newsletter}>
            <h4>Newsletter</h4>
            <p>Get latest News & Update Our Event.</p>
            <form ref={form} onSubmit={sendEmail} className={classes.newsForm}>
              <input required={true} type="email" name="user_email" id="email" placeholder='Masukkan Email' />
              <button className={classes.buttons} type="submit">Subscribe Us</button>
            </form>
          </div>
        </div>
      </footer>

      <Link href="https://inkara.id">
        <small className={classes.copyright}>copyright © 2017 - <a > inkara.id</a> </small>
      </Link>


    </>
  )
}

export default Footer