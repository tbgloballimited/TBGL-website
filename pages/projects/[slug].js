import React from 'react'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'
import styles from '../../styles/Project.module.css'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'
import Link from 'next/link'

const projects = ({contents, data}) => {
  return (
    <>
    <section className={styles.single_hero} style={{backgroundImage: `url(${data.images})`}}>
        <div className='overlay'></div>
        <h1 className={styles.heroText}>{data.title}</h1>
        <div className={styles.breadcrumb}>
        <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
        <div className={styles.angleIcon}>&#12297; </div>
        <div className={styles.descriptionTitle} style={{color:'#fff'}}>{data.title}</div>
        </div>
    </section>
      <section className={styles.single_project_container}>
          <div className={styles.project_summary}>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>CLIENT:<br />
              <span>{data.facility_power}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>COMPLETION:<br />
              <span>{data.completion}</span></h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>MODULE TECHNOLOGY: <br />
              <span>{data.module_technology}</span>
              </h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>INVERTER: <br />
              <span>{data.inverter}</span>
              </h5>
            </div>
            <div className={styles.summary_point}>
              <Image src='/img/service_icon.png' alt='service icon' height='49' width='49' className={styles.summary_point_img} />
              <h5>CARBON FOOTPRINT : <br />
              <span>{data.carbon_footprint_reduced}</span>
              </h5>
            </div>
          </div>
          <div className={styles.project_list}>
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html:contents }} />
            <div className={styles.project_image_grid}>
                <Image src={data.images} alt='design' height='320' width='320' className={styles.project_image} />
                
            </div>
          </div>
        </section>
        <FooterCta />
        <Footer />
    </>
  )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync('content/projects')
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    // console.log('paths: ', paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    
    const markdownWithMetaData = fs.readFileSync(path.join('content/projects', slug + '.md')).toString()

    const parsedMarkedown = matter(markdownWithMetaData)
    
    const htmlString = marked.parse(parsedMarkedown.content)

    return{
        props:{
            contents: htmlString,
            data: parsedMarkedown.data
        }
    }
}

export default projects