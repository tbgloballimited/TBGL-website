import styles from '../styles/Layout.module.css'
import ServiceList from '../components/ServiceList'
import ProjectItem from '../components/ProjectItem'
import {server} from '../config'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Image from 'next/image'
import WhyChooseUs from '../components/WhyChooseUs'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
// import Testimonial from '../components/Testimonial'
import ProductList from '../components/ProductList'

export default function Home({services, projects, products}) {
  
  return (
    <>
    <Meta title='Home - Tunde Ben Global Limited' />
    
    <Header />
    <div className={styles.containerAbout}>
       
      <div className={styles.aboutImg}></div>
      <div className={styles.aboutDesc}>
        <h4>WHO WE ARE</h4>
        <h1>Renewable Energy For Sustainability</h1>
          <p style={{width:'490px'}}>Since 2014, we have been providing constant electicity supply
              to various projects from private businesses, corporate 
              organizations, non-governmental organizations and 
              private Individuals.
          </p>
        <ul>
          <li>Lower Monthly Bills</li>
          <li>No worries about blackouts</li>
          <li>Positive environment impact</li>
        </ul>
        <button className={styles.cta}>MORE ABOUT US</button>
      </div>
    </div>
     <ServiceList services={services} /> 

    
    <section className={styles.containerProjects}>
        <h4 style={{color: '#00923f'}}>OUR PROJECTS</h4>
        <h1>Our Recent Work</h1>
        <h4 style={{color: '#848484', fontWeight:'normal'}}>We have built a wide range of independent power 
        <br />generating systems</h4>
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.id} projects={project} />
          ))}
        </ul>
    </section>

    <section className={styles.containerProducts}>
      <h4 style={{color: '#00923f'}}>PRODUCTS</h4>
      <h1>Shop With Us</h1>
      <h4>Browse through some of our vetted <br /> products from trusted brands</h4>
      <br />
      <ProductList products={products} />
    </section>
    <div className={styles.containerProcess}>
      <h4 style={{color: '#00923f'}}>OUR PROCESS</h4>
      <h1>How We Work</h1>
      <p style={{color: '#848484', textAlign: 'center'}}>We complete every step carefully,</p>
      <ul>
        <li>
          <Image src='/img/appointment.png' alt="appointment" height='60' width='60' />
          <h4>Make Appointment</h4>
        </li>
        <li>
          <Image src='/img/consultation.png' alt="consultation" height='60' width='60' />
          <h4>Consultation</h4>
        </li>
        <li>
          <Image src='/img/design.png' alt="design" height='60' width='60' />
          <h4>Design</h4>
        </li>
        <li>
          <Image src='/img/construction.png' alt="construction" height='60' width='60' />
          <h4>Construction & Commissioning</h4>
        </li>
      </ul>
    </div>

    <Clients />
    {/* <Testimonial testimonials={testimonials} /> */}
    <WhyChooseUs />
    <FooterCta />
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const res_service =  await fetch
  (`${server}/api/services`)
  const services = await res_service.json()
  

  const res_project =  await fetch
  (`${server}/api/projects`)
  const projects = await res_project.json()

  // const res_testimonial =  await fetch
  // (`${server}/api/testimonials`)
  // const testimonials = await res_testimonial.json()

  const res_product =  await fetch
  (`${server}/api/products`)
  const products = await res_product.json()

  return {
    props:{
      services,
      projects,
      products
    },
  }
}