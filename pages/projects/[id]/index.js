import Meta from '../../../components/Meta'
import styles from '../../../styles/Project.module.css'
import Image from 'next/image'
import FooterCta from '../../../components/FooterCta'
import Footer from '../../../components/Footer'
import Faq from '../../../components/Faq'
import Testimonial from '../../../components/Testimonial'
import Link from 'next/link'
import { server } from '../../../config'
import { testimonials } from '../../../data'

const projects = ({project}) => {
  return (
      <>
      
    <section className={styles.single_hero} style={{backgroundImage: `url(${project.images})`}}>
        <div className='overlay'></div>
        <h1 className={styles.heroText}>{project.title}</h1>
        <div className={styles.breadcrumb}>
          <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
          <div className={styles.angleIcon}>&#12297; </div>
          <div className={styles.descriptionTitle}>{project.title}</div>
        </div>
    </section>
      <section className={styles.single_project_container}>
          <div className={styles.project_summary}>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>CLIENT:<br />
              <span>{project.project_details.facility_power}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>COMPLETION:<br />
              <span>{project.project_details.completion}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>MODULE TECHNOLOGY: <br />
              <span>{project.project_details.module_technology}</span>
              </h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>INVERTER: <br />
              <span>{project.project_details.inverter}</span>
              </h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>CARBON FOOTPRINT : <br />
              <span>{project.project_details.carbon_footprint_reduced}</span>
              </h5>
            </div>
          </div>
          <div className={styles.project_list}>
            <h2>{project.title}</h2>
            <br />
            <h3>Project Scope:</h3>
            <p>{project.project_scope}</p>
            <br />
            <h3>Challenges & Solution:</h3>
            <p>{project.challenges}</p>
            <br />
            <h3>IMPACT</h3>
            <p>{project.impact}</p>
            <br />
            <div className={styles.project_image_grid}>
                <Image src={project.images} alt='design' height='320' width='320' className={styles.project_image} />
                
            </div>
          </div>
        </section>
        {/* <Testimonial  testimonials={testimonials}/> */}
        <FooterCta />
        <Footer />
      </>
  )
}


export const getServerSideProps = async (context) => {
    const res = await fetch (`${server}/api/projects/${context.params.id}`)
    const project = await res.json()
    
    return {
      props: {
        project,
      },
    }
  }

export default projects