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
      
    <section className={styles.hero} >
        <h1 className={styles.heroText}>Our projects</h1>
        <div className={styles.breadcrumb}>
        <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
        <div className={styles.angleIcon}>&#12297; </div>
        <div className={styles.heroDescription}>Projects</div>
        </div>
    </section>
      <section className={styles.single_project_container}>
          <div className={styles.project_summary}>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
              <h5>CLIENT:<br />
              <span>{project.project_details.client}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
              <h5>COMPLETION:<br />
              <span>{project.project_details.completion}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
              <h5>PROJECT TYPE: <br />
              <span>{project.project_details.project_type}</span>
              </h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' />
              <h5>PROJECT MANAGER: <br />
              <span>{project.project_details.project_manager}</span>
              </h5>
            </div>
          </div>
          <div className={styles.project_list}>
            <h2>{project.title}</h2>
            <br />
            <h3>Project Scope:</h3>
            <p>{project.project_scope}</p>
            <br />
            <h3>The problem:</h3>
            <p>{project.problem}</p>
            <br />
            <h3>The solution</h3>
            <p>{project.solution}</p>
            <br />
            <h3>The result:</h3>
            <p>{project.result}</p>
            <br />
            <div className={styles.project_image_grid}>
                <Image src='/img/petrocam.png' alt='design' height='270' width='320' />
                <Image src='/img/petrocam.png' alt='design' height='270' width='320' />
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