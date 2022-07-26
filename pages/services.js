import Meta from '../components/Meta'
import styles from '../styles/Service.module.css'
import {server} from '../config'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Link from 'next/link'
import ServiceList from '../components/ServiceList'

const services = ({services}) => {
  return (
    <>
    <Meta title='Services | Tunde Ben Global Limited' />
    
    <section className={styles.hero} >
      <div className='overlay'>
          <h1 className={styles.heroText}>Services</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>Services</div>
          </div>
        </div>
      </section>
     {/* <ServiceList services={services} />  */}
      {/* <Faq /> */}
      <FooterCta />
      <Footer />
    </>
  )
}

// export const getStaticProps = async () => {
//   const res_service =  await fetch
//   (`${server}/api/services`)
//   const services = await res_service.json()
  
//   return {
//     props:{
//       services
//     }
//   }
// }
export default services