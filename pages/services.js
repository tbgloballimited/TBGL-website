import Meta from '../components/Meta'
import styles from '../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const services = () => {
  return (
    <>
    <Meta title='Services | Tunde Ben Global Limited' />
    
    <section className={styles.hero} >
          <h1 className={styles.heroText}>Services</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}>Home</div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>Services</div>
          </div>
      </section>
      <section className={styles.service_container}>
          <h4>OUR SERVICES</h4>
          <h1>We Are Building A Sustainable Future</h1>
          <div className={styles.service_grid}>
              <div className={styles.single_service_box}>
                  <div className={styles.service_icon}>
                    <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                  </div>
                  <h3>Design</h3>
                  <p>With various software such as Helioscope, PV Syst, PV Sol to the approval of the projects 
                      by investors and Clients.</p>
                  <h5>Learn More</h5>
              </div>
              <div className={styles.single_service_box}>
                  <div className={styles.service_icon}>
                    <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                  </div>
                  <h3>Develop</h3>
                  <p>Development of Solar Project to meet investors requirements.</p>
                  <h5>Learn More</h5>
              </div>
              <div className={styles.single_service_box}>
                  <div className={styles.service_icon}>
                    <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                  </div>
                  <h3>EPC</h3>
                  <p>Engineering Procurement and Construction of Solar Projects (EPC).</p>
                  <h5>Learn More</h5>
              </div>
              <div className={styles.single_service_box}>
                  <div className={styles.service_icon}>
                    <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                  </div>
                  <h3>O&M</h3>
                  <p>Operating & Maintenance of Solar Projects ( O&M).</p>
                  <h5>Learn More</h5>
              </div>
          </div>
      </section>
      <Faq />
      <FooterCta />
      <Footer />
    </>
  )
}

export default services