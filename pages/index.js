import styles from '../styles/Layout.module.css'
import styles2 from '../styles/Products.module.css'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Image from 'next/image'
import WhyChooseUs from '../components/WhyChooseUs'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { useEffect } from 'react'
import ServiceList from '../components/ServiceList'


export default function Home({slugs, slugs_proj, data1, data2, data3, dataa1, dataa2, dataa3, dataa4, dataa5, dataa6}) {
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])
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
     <ServiceList /> 

    
    <section className={styles.containerProjects}>
        <h4 style={{color: '#00923f'}}>OUR PROJECTS</h4>
        <h1>Our Recent Work</h1>
        <h4 style={{color: '#848484', fontWeight:'normal'}}>We have built a wide range of independent power 
        <br />generating systems</h4>
          <div className={styles.containerProject}>
        
            <ul>
              {/* {dat.title}
              {dat.map((project) => (
                <li style={{
                    backgroundImage: `url(${project.images})`
                  }}>
                  <Link href={`/projects/${data.title}`}>
                    <div className='overlay'> 
                        <h4>{data.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
              ))} */}
                <li style={{
                    backgroundImage: `url(${data1.images})`
                  }}>
                  <Link href={`/projects/${slugs_proj[0]}`}>
                    <div className='overlay'> 
                        <h4>{data1.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
                <li style={{
                    backgroundImage: `url(${data2.images})`
                  }}>
                  <Link href={`/projects/${slugs_proj[1]}`}>
                    <div className='overlay'> 
                        <h4>{data2.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
                <li style={{
                    backgroundImage: `url(${data3.images})`
                  }}>
                  <Link href={`/projects/${slugs_proj[2]}`}>
                    <div className='overlay'> 
                        <h4>{data3.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
            </ul>
          </div>
          {/* {projects.map((project) => (
            <ProjectItem key={project.id} projects={project} />
          ))} */}
    </section>

    <section className={styles2.containerProducts}>
      <h4 style={{color: '#00923f'}}>PRODUCTS</h4>
      <h1>Shop With Us</h1>
      <h4>Browse through some of our vetted <br /> products from trusted brands</h4>
      <br />
      <div className={styles2.product_grid}>   
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa1.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa1.title}</h6>
                      <h4>{dataa1.description}</h4>
                      <h5>N{dataa1.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa2.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa2.title}</h6>
                      <h4>{dataa2.description}</h4>
                      <h5>N{dataa2.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa3.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa3.title}</h6>
                      <h4>{dataa3.description}</h4>
                      <h5>N{dataa3.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa4.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa4.title}</h6>
                      <h4>{dataa4.description}</h4>
                      <h5>N{dataa4.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa5.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa5.title}</h6>
                      <h4>{dataa5.description}</h4>
                      <h5>N{dataa5.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
          <div className={styles2.product_card}>
              <div className={styles2.product_image} style={{backgroundImage: `url(${dataa6.image})`}}></div>
              {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
              <div className={styles2.product_content}>
                  <div>
                      <h6>{dataa6.title}</h6>
                      <h4>{dataa6.description}</h4>
                      <h5>N{dataa6.price}</h5>
                  </div>
                  <div>
                      <button className={styles2.cta}><Link href='/'>BUY NOW</Link></button>
                  </div>
              </div>
          </div>
      </div> 
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
          <Image src='/img/Design.png' alt="design" height='60' width='60' />
          <h4>Design</h4>
        </li>
        <li>
          <Image src='/img/construction.png' alt="construction" height='60' width='60' />
          <h4>Construction & Commissioning</h4>
        </li>
      </ul>
    </div>

    {/* <Clients /> */}
    {/* <Testimonial testimonials={testimonials} /> */}
    <WhyChooseUs />
    <FooterCta />
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  

  const files = fs.readdirSync('content/products')

  const slugs = files.map(filename => filename.replace('.md', '')  )    
  const each_slug = slugs.map(slug => slug)
  // console.log(each_slug)
  let  markdownWithMetaData1 = fs.readFileSync(path.join('content/products', each_slug[0] + '.md')).toString()
  let  markdownWithMetaData2 = fs.readFileSync(path.join('content/products', each_slug[1] + '.md')).toString()
  let  markdownWithMetaData3 = fs.readFileSync(path.join('content/products', each_slug[2] + '.md')).toString()
  let  markdownWithMetaData4 = fs.readFileSync(path.join('content/products', each_slug[3] + '.md')).toString()
  let  markdownWithMetaData5 = fs.readFileSync(path.join('content/products', each_slug[4] + '.md')).toString()
  let  markdownWithMetaData6 = fs.readFileSync(path.join('content/products', each_slug[5] + '.md')).toString()

  let parsedMarkedown1 = matter(markdownWithMetaData1)
  let parsedMarkedown2 = matter(markdownWithMetaData2)
  let parsedMarkedown3 = matter(markdownWithMetaData3)
  let parsedMarkedown4 = matter(markdownWithMetaData4)
  let parsedMarkedown5 = matter(markdownWithMetaData5)
  let parsedMarkedown6 = matter(markdownWithMetaData6)

  let htmlString1 = marked.parse(parsedMarkedown1.content)
  let htmlString2 = marked.parse(parsedMarkedown2.content)
  let htmlString3 = marked.parse(parsedMarkedown3.content)
  let htmlString4 = marked.parse(parsedMarkedown4.content)
  let htmlString5 = marked.parse(parsedMarkedown5.content)
  let htmlString6 = marked.parse(parsedMarkedown6.content)

  const files_proj = fs.readdirSync('content/projects')

  const slugs_proj = files_proj.map(filename => filename.replace('.md', '')  )
  const each_slug_proj = slugs_proj.map(slug => slug)
  // console.log(each_slug)
  let  markdownWithMetaData1_proj = fs.readFileSync(path.join('content/projects', each_slug_proj[0] + '.md')).toString()
  let  markdownWithMetaData2_proj = fs.readFileSync(path.join('content/projects', each_slug_proj[1] + '.md')).toString()
  let  markdownWithMetaData3_proj = fs.readFileSync(path.join('content/projects', each_slug_proj[2] + '.md')).toString()

  let parsedMarkedown1_proj = matter(markdownWithMetaData1_proj)
  let parsedMarkedown2_proj = matter(markdownWithMetaData2_proj)
  let parsedMarkedown3_proj = matter(markdownWithMetaData3_proj)

  let htmlString1_proj = marked.parse(parsedMarkedown1_proj.content)
  let htmlString2_proj = marked.parse(parsedMarkedown2_proj.content)
  let htmlString3_proj = marked.parse(parsedMarkedown3_proj.content)
  return{
      props:{
          slugs,
          slugs_proj,
          contents1: htmlString1,
          contents2: htmlString2,
          contents3: htmlString3,
          contents4: htmlString4,
          contents5: htmlString5,
          contents6: htmlString6,
          content1_proj: htmlString1_proj,
          content2_proj: htmlString2_proj,
          content3_proj: htmlString3_proj,
          data1: parsedMarkedown1_proj.data,
          data2: parsedMarkedown2_proj.data,
          data3: parsedMarkedown3_proj.data,
          dataa1: parsedMarkedown1.data,
          dataa2: parsedMarkedown2.data,
          dataa3: parsedMarkedown3.data,
          dataa4: parsedMarkedown4.data,
          dataa5: parsedMarkedown5.data,
          dataa6: parsedMarkedown6.data,
      }
  }
}
// export const getStaticProps = async () => {
//   const res_service =  await fetch
//   (`${server}/api/services`)
//   const services = await res_service.json()
  

//   const res_project =  await fetch
//   (`${server}/api/projects`)
//   const projects = await res_project.json()

//   // const res_testimonial =  await fetch
//   // (`${server}/api/testimonials`)
//   // const testimonials = await res_testimonial.json()

//   const res_product =  await fetch
//   (`${server}/api/products`)
//   const products = await res_product.json()

//   return {
//     props:{
//       services,
//       projects,
//       products
//     },
//   }
// }