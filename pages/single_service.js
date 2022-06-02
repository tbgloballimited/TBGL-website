import Meta from '../components/Meta'
import styles from '../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const singleService = () => {
  return (
      <>
      <Meta title='Single Services - Tunde Ben Global Limited' />
      
        <section className={styles.hero_single} >
          <h1 className={styles.heroText}>DESIGN</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}>Home</div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>DESIGN</div>
          </div>
        </section>
        <section className={styles.single_main}>

          <div className={styles.single_list}>
            <h2>Other Services</h2>
            <div className={styles.single_item}>
              <h5>DESIGN</h5>
            </div>
            <div className={styles.single_item}>
              <h5>DEVELOPMENT</h5>
            </div>
            <div className={styles.single_item}>
              <h5>EPC</h5>
            </div>
            <div className={styles.single_item}>
              <h5>O&M</h5>
            </div>
          </div>
          <div className={styles.single_description}>
            <h4>OUR PROCESS</h4>
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis elementum, nunc velit 
              purus. Orci eros diam sagittis vel vel ac ultrices aliquam. Elementum tempor amet, sed pharetra 
              quisque. Pulvinar dis non pellentesque rhoncus amet aliquam.
            </p>
            <Image src='/img/petrocam.png' alt='design' height='465' width='744' />
          </div>
        </section>
        <Faq />
        <FooterCta />
        <Footer />
      </>
  )
}

export default singleService