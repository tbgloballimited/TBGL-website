import Meta from '../../../components/Meta'
import styles from '../../../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../../../components/FooterCta'
import Footer from '../../../components/Footer'
import Faq from '../../../components/Faq'
import { server } from '../../../config'
import Link from 'next/link'

const service = ({service}) => {
const images = service.images
  return (
      <>
      {/* <Meta title='Single Services - Tunde Ben Global Limited' /> */}
      
        <section className={styles.hero_single} >
          <h1 className={styles.heroText}>{service.title}</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>{service.title}</div>
          </div>
        </section>
        <section className={styles.single_main}>

          <div className={styles.single_list}>
            <h2>Other Services</h2>
            <div className={styles.single_item}>
              <Link href='/services/1'><h5>DEVELOPMENT</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/2'><h5>DESIGN</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/3'><h5>EPC</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/4'><h5>O&M</h5></Link>
            </div>
          </div>
          <div className={styles.single_description}>
            <h4>OUR PROCESS</h4>
            <h2>{service.title}</h2>
            <p>{service.body}
            </p>
            <div className={styles.image_grid}>
                {/* {images.map((img) => {
                <Image src={img} alt='design' height='425' width='346' />
                })} */}
            </div>
        </div>
        </section>
        {/* <section className={styles.single_process_container}>
          <div className={styles.contact_cta}>
              <h2>Our Contact</h2>
              <p>We complete every step carefully. Lorem 
                ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <hr />
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.contact_cta_image} />
                <h5>(+234)-706-796-5229<br /><br />
                (+234)-808-353-4530</h5>
              </div>
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.contact_cta_image} />
                <h5>hello@tbgl.com.ng</h5>
              </div>
              <div className={styles.contact_cta_details}>
                <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.contact_cta_image} />
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
        </section> */}
        {/* <Faq /> */}
        <FooterCta />
        <Footer />
      </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch (`${server}/api/services/${context.params.id}`)
    const service = await res.json()
    
    return {
      props: {
        service,
      },
    }
  }
  
//   export const getStaticPaths = async() => {
//     const res = await fetch(`${server}/api/services`)
//     const services= await res.json()
//     const ids = services.map((service) => service.id)
//     const paths = ids.map((id) => ({param: {id: id.toString()}}))
  
//     return {
//       paths,
//       fallbalck: false,
//     }
//   }

export default service