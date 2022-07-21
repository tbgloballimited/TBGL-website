import Meta from '../components/Meta'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <>
        <Meta title='Contact | Tunde Ben Global Limited' />
        <section className={styles.hero} >
            <h1 className={styles.heroText}>Contact Us</h1>
            <div className={styles.breadcrumb}>
                <div className={styles.heroDescription}>Home</div>
                <div className={styles.angleIcon}>&#12297; </div>
                <div className={styles.heroDescription}>Contact</div>
            </div>
        </section>
        <section className={styles.contact_form}>
            <form>
                <h5>GET IN TOUCH</h5>
                <h3>Ready To Get Started</h3>
                <div className={styles.form_group}>
                    <input type='text' placeholder='EMAIL:' name='email' />
                    <input type='text' placeholder='PHONE:' name='phone' />
                    <textarea cols='5' rows='20' name='message'>MESSAGE</textarea>
                    <button className={styles.cta_form}>SEND MESSAGE</button>
                </div>
            </form>
        </section>
        <Footer />
    </>
  )
}

export default contact
