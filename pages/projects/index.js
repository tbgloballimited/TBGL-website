import Meta from '../../components/Meta'
import styles from '../../styles/Project.module.css'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'
import WhyChooseUs from '../../components/WhyChooseUs'
import Clients from '../../components/Clients'
import Link from 'next/link'
import fs from 'fs'
import Script from 'next/script'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
 
const projects = ({slugs, data1, data2, data3}) => {
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
          {/* <Link href='/projects/projects'><a><h1>go to projects</h1></a></Link> */}
          {/* <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul> */}
        </article>
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
                  <Link href={`/projects/${slugs[0]}`}>
                    <div className='overlay'> 
                        <h4>{data1.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
                <li style={{
                    backgroundImage: `url(${data2.images})`
                  }}>
                  <Link href={`/projects/${slugs[1]}`}>
                    <div className='overlay'> 
                        <h4>{data2.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
                <li style={{
                    backgroundImage: `url(${data3.images})`
                  }}>
                  <Link href={`/projects/${slugs[2]}`}>
                    <div className='overlay'> 
                        <h4>{data3.title}</h4>
                        <h4> View More &#12297; </h4>
                    </div>
                  </Link>
                </li>
            </ul>
          </div>
            {/* <ProjectList projects={slugs} data={data} content={contents} /> */}
        </section>

        <WhyChooseUs />
        <Clients />
        <FooterCta />
        <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  

  const files = fs.readdirSync('content/projects')

  const slugs = files.map(filename => filename.replace('.md', '')  )
  const each_slug = slugs.map(slug => slug)
  // console.log(each_slug)
  let  markdownWithMetaData1 = fs.readFileSync(path.join('content/projects', each_slug[0] + '.md')).toString()
  let  markdownWithMetaData2 = fs.readFileSync(path.join('content/projects', each_slug[1] + '.md')).toString()
  let  markdownWithMetaData3 = fs.readFileSync(path.join('content/projects', each_slug[2] + '.md')).toString()

  let parsedMarkedown1 = matter(markdownWithMetaData1)
  let parsedMarkedown2 = matter(markdownWithMetaData2)
  let parsedMarkedown3 = matter(markdownWithMetaData3)

  let htmlString1 = marked.parse(parsedMarkedown1.content)
  let htmlString2 = marked.parse(parsedMarkedown2.content)
  let htmlString3 = marked.parse(parsedMarkedown3.content)
  return{
      props:{
          slugs,
          contents1: htmlString1,
          contents2: htmlString2,
          contents3: htmlString3,
          data1: parsedMarkedown1.data,
          data2: parsedMarkedown2.data,
          data3: parsedMarkedown3.data,
      }
  }
}

export default projects