import Meta from '../components/Meta'
import styles from '../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const singleService = () => {
  return (
      <>
      {/* <Meta title='Single Services - Tunde Ben Global Limited' /> */}
      
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
        <section className={styles.single_process_container}>
          <div className={styles.contact_cta}>
              <h2>Our Contact</h2>
              <p>We complete every step carefully. Lorem 
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <hr />
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>(+234)-706-796-5229<br /><br />
                (+234)-808-353-4530</h5>
              </div>
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>hello@tbgl.com.ng</h5>
              </div>
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>Block A Plot 8a, Laderin <br />
                Estate, Abeokuta, Ogun State, Nigeria.
                <br /><br />
                Generation Homes Estate, <br />
                Kuje, Abuja.
                </h5>
              </div>
          </div>
          <div className={styles.process_list}>
            <h2>How We Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit. Dignissim ornare quis vestibulum neque. 
                  Tristique massa accumsan tempus in massa non, proin. 
                  Elementum rhoncus massa mauris adipiscing sem 
                  vestibulum quam mattis. Nec enim nec tellus elit ac 
                  sed integer. Elementum aliquet sed donec sit mauris 
                  pulvinar lacus bibendum.</p>
              <div className={styles.process_list_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                <h5>Consultation</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit. Dignissim ornare quis vestibulum neque. 
                  Tristique massa accumsan tempus in massa non, proin. 
                  Elementum rhoncus massa mauris adipiscing sem 
                  vestibulum quam mattis. Nec enim nec tellus elit ac 
                  sed integer. Elementum aliquet sed donec sit mauris 
                  pulvinar lacus bibendum.</p>
              </div>
              <div className={styles.process_list_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                <h5>Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit. Dignissim ornare quis vestibulum neque. 
                  Tristique massa accumsan tempus in massa non, proin. 
                  Elementum rhoncus massa mauris adipiscing sem 
                  vestibulum quam mattis. Nec enim nec tellus elit ac 
                  sed integer. Elementum aliquet sed donec sit mauris 
                  pulvinar lacus bibendum.</p>
              </div>
              <div className={styles.process_list_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49.1' width='49.2' />
                <h5>Installation</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit. Dignissim ornare quis vestibulum neque. 
                  Tristique massa accumsan tempus in massa non, proin. 
                  Elementum rhoncus massa mauris adipiscing sem 
                  vestibulum quam mattis. Nec enim nec tellus elit ac 
                  sed integer. Elementum aliquet sed donec sit mauris 
                  pulvinar lacus bibendum.</p>
              </div>
          </div>
        </section>
        <Faq />
        <FooterCta />
        <Footer />
      </>
  )
}

export default singleService