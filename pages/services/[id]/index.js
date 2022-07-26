import Meta from '../../../components/Meta'
import styles from '../../../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../../../components/FooterCta'
import Footer from '../../../components/Footer'
import Faq from '../../../components/Faq'
import { server } from '../../../config'
import Link from 'next/link'


const service = ({service}) => {
const images = service.gallery
const single_image = () => {images.map((img, i) => (
  <div key={i}>
    <Image src={img.img} width={277} height={199} />
  </div>
))}
console.log(single_image())
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
                {images.map((img, i) => (
                  <div key={i}>
                    <Image src={img.img} width={277} height={199} />
                  </div>
                ))}
            </div>
          </div>
        </section>
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