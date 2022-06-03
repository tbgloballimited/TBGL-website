import Meta from '../components/Meta'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import WhyChooseUs from '../components/WhyChooseUs'
import Clients from '../components/Clients'

const projects = () => {
  return (
    <>
        <section className={styles.hero} >
            <h1 className={styles.heroText}>Our projects</h1>
            <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}>Home</div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>Projects</div>
            </div>
        </section>
        <section className={styles.project_container}>
          <h4 style={{color:'#00923f'}}>OUR PROJECTS</h4>
          <h2>Our Recent Works</h2>
          <p>While pursuing our business objectives, we aim to be a 
            responsible partner in society, acting with integrity 
            towards our employees, clients, businesses, partners, 
            as we as the wider community in which we operate.
            </p>
            <ul>
              <li>
                <h4>2Mega Watts</h4>
                <h4> View detail &#12297; </h4>
              </li>
              <li>
                <h4>90kWatts Hybrid Solar Power System</h4>
                <h4> View detail &#12297; </h4>
              </li>
              <li>
                <h4>50kwatts Hybrid Solar Power System</h4>
                <h4> View detail &#12297; </h4>
              </li>
              <li>
                <h4>2Mega Watts</h4>
                <h4> View detail &#12297; </h4>
              </li>
              <li>
                <h4>90kWatts Hybrid Solar Power System</h4>
                <h4> View detail &#12297; </h4>
              </li>
              <li>
                <h4>50kwatts Hybrid Solar Power System</h4>
                <h4> View detail &#12297; </h4>
              </li>
            </ul>
        </section>

        <WhyChooseUs />
        <Clients />
        <FooterCta />
        <Footer />
    </>
  )
}

export default projects