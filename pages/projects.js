import Meta from '../components/Meta'
import styles from '../styles/Project.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import WhyChooseUs from '../components/WhyChooseUs'
import Clients from '../components/Clients'
import Link from 'next/link'
import ProjectList from '../components/ProjectList'
import {server} from '../config'
import { Component } from 'react'
import { attributes } from '../content/projects.md';
import Head from 'next/head'
import Script from 'next/script'

const projects = () => {
  let { title, cats } = attributes;
  return (
    <>
    <Meta title='Projects | Tunde Ben Global Limited' />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
    
        <section className={styles.hero} >
          <div className='overlay'>
            <h1 className={styles.heroText}>Our projects</h1>
            <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>Projects</div>
            </div>
          </div>
        </section><section className={styles.project_container}>
          <h4 style={{color:'#00923f'}}>OUR PROJECTS</h4>
          <h1>Our Recent Works</h1>
          <p>While pursuing our business objectives, we aim to be a 
            responsible partner in society, acting with integrity 
            towards our employees, clients, businesses, partners, 
            as we as the wider community in which we operate.
            </p>

        <article>
          <h1>{title}</h1>
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
            {/* <ProjectList projects={projects} /> */}
        </section>

        <WhyChooseUs />
        <Clients />
        <FooterCta />
        <Footer />
    </>
  )
}

// export const getStaticProps = async () => {
//   const res_project =  await fetch
//   (`${server}/api/projects`)
//   const projects = await res_project.json()
//   return {
//     props:{
//       projects
//     },
//   }
// }

export default projects