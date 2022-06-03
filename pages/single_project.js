import Meta from '../components/Meta'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Testimonial from '../components/Testimonial'

const single_project = () => {
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
      <section className={styles.single_project_container}>
          <div className={styles.project_summary}>
              <div className={styles.summary_point}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>CLIENT:<br />
                <span>Alex Arnold</span></h5>
              </div>
              <div className={styles.summary_point}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>COMPLETION:<br />
                <span>Mida 2021</span></h5>
              </div>
              <div className={styles.summary_point}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>PROJECT TYPE: <br />
                <span>All in one solar system</span>
                </h5>
              </div>
              <div className={styles.summary_point}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
                <h5>PROJECT MANAGER: <br />
                <span>Jessica Jane</span>
                </h5>
              </div>
          </div>
          <div className={styles.project_list}>
            <h3>Project Scope:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit. Dignissim ornare quis vestibulum neque. 
                  Tristique massa accumsan tempus in massa non, proin. 
                  Elementum rhoncus massa mauris adipiscing sem 
                  vestibulum quam mattis. Nec enim nec tellus elit ac 
                  sed integer. Elementum aliquet sed donec sit mauris 
                  pulvinar lacus bibendum.</p>
                  
            <h3>The problem:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Dignissim ornare quis vestibulum neque. 
                Tristique massa accumsan tempus in massa non, proin. 
                Elementum rhoncus massa mauris adipiscing sem 
                vestibulum quam mattis. Nec enim nec tellus elit ac 
                sed integer. Elementum aliquet sed donec sit mauris 
                pulvinar lacus bibendum.</p>

            <h3>The solution</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Dignissim ornare quis vestibulum neque. 
                Tristique massa accumsan tempus in massa non, proin. 
                Elementum rhoncus massa mauris adipiscing sem 
                vestibulum quam mattis. Nec enim nec tellus elit ac 
                sed integer. Elementum aliquet sed donec sit mauris 
                pulvinar lacus bibendum.</p>

            <h3>The result:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Dignissim ornare quis vestibulum neque. 
                Tristique massa accumsan tempus in massa non, proin. 
                Elementum rhoncus massa mauris adipiscing sem 
                vestibulum quam mattis. Nec enim nec tellus elit ac 
                sed integer. Elementum aliquet sed donec sit mauris 
                pulvinar lacus bibendum.</p>

            <div className={styles.project_image_grid}>
                <Image src='/img/petrocam.png' alt='design' height='270' width='320' />
                <Image src='/img/petrocam.png' alt='design' height='270' width='320' />
            </div>
          </div>
        </section>
        <Testimonial />
        <FooterCta />
        <Footer />
      </>
  )
}

export default single_project