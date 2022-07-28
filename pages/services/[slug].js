import React from 'react'
import styles from '../../styles/Service.module.css'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'
import Link from 'next/link'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'

const projects = ({contents, data}) => {
  return (
    <>

      {/* <Meta title='Single Services - Tunde Ben Global Limited' /> */}
      
      <section className={styles.hero_single} >
          <h1 className={styles.heroText}>{data.title}</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>{data.title}</div>
          </div>
        </section>
        <section className={styles.single_main}>

          <div className={styles.single_list}>
            <h2>Other Services</h2>
            <div className={styles.single_item}>
              <Link href='/services/development'><h5>DEVELOPMENT</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/design'><h5>DESIGN</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/epc'><h5>EPC</h5></Link>
            </div>
            <div className={styles.single_item}>
            <Link href='/services/oandm'><h5>O&M</h5></Link>
            </div>
          </div>
          <div className={styles.single_description}>
            <h4>OUR PROCESS</h4>
            <h2>{data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html:contents }} />
            <div className={styles.image_grid}>
                {data.gallery.map((image) => (
                    <Image src={image} alt='design' height='210' width='270' />
                ))}
            </div>
        </div>
        </section>
        <FooterCta />   
        <Footer />
    </>
  )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync('content/services')
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
    
    const markdownWithMetaData = fs.readFileSync(path.join('content/services', slug + '.md')).toString()

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