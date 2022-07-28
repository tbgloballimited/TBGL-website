import Meta from '../../components/Meta'
import styles from '../../styles/Service.module.css'
import Image from 'next/image'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
 
const services = ({slugs,data1, data2, data3, data4}) => {
    console.log(data1)
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
        <div className={styles.containerServices}>
        <h4 style={{color: '#00923f'}}>OUR SERVICES</h4>
        <h1>We Are Building A Sustainable Future</h1>
        <ul>
            <li className={styles.single_service_box}>
                <Link href={`/services/${slugs[0]}`}>
                    <div>
                        <Image src='/img/light-bulb.png' alt="tbgl logo" height='60' width='60' />
                    <h3>{data1.title}</h3>
                    <p> {data1.excerpt}
                    </p>
                    <button className={styles.cta}>
                        Learn More
                    </button>
                    </div>
                </Link>
            </li>
            <li className={styles.single_service_box}>
                <Link href={`/services/${slugs[1]}`}>
                    <div>
                        <Image src='/img/solar-panel.png' alt="tbgl logo" height='60' width='60' />
                    <h3>{data2.title}</h3>
                    <p> {data2.excerpt}
                    </p>
                    <button className={styles.cta}>
                        Learn More
                    </button>
                    </div>
                </Link>
            </li>
            <li className={styles.single_service_box}>
                <Link href={`/services/${slugs[2]}`}>
                    <div>
                        <Image src='/img/house.png' alt="tbgl logo" height='60' width='60' />
                    <h3>{data3.title}</h3>
                    <p> {data3.excerpt}
                    </p>
                    <button className={styles.cta}>
                        Learn More
                    </button>
                    </div>
                </Link>
            </li>
            <li className={styles.single_service_box}>
                <Link href={`/services/${slugs[3]}`}>
                    <div>
                        <Image src='/img/under-maintenance-black.png' alt="tbgl logo" height='60' width='60' />
                    <h3>{data4.title}</h3>
                    <p> {data4.excerpt}
                    </p>
                    <button className={styles.cta}>
                        Learn More
                    </button>
                    </div>
                </Link>
            </li>
        </ul>
        </div>
        {/* <Faq /> */}
        <FooterCta />
        <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  

  const files = fs.readdirSync('content/services')

  const slugs = files.map(filename => filename.replace('.md', '')  )    
  const each_slug = slugs.map(slug => slug)
  // console.log(each_slug)
  let  markdownWithMetaData1 = fs.readFileSync(path.join('content/services', each_slug[0] + '.md')).toString()
  let  markdownWithMetaData2 = fs.readFileSync(path.join('content/services', each_slug[1] + '.md')).toString()
  let  markdownWithMetaData3 = fs.readFileSync(path.join('content/services', each_slug[2] + '.md')).toString()
  let  markdownWithMetaData4 = fs.readFileSync(path.join('content/services', each_slug[3] + '.md')).toString()

  let parsedMarkedown1 = matter(markdownWithMetaData1)
  console.log(parsedMarkedown1.data)
  let parsedMarkedown2 = matter(markdownWithMetaData2)
  let parsedMarkedown3 = matter(markdownWithMetaData3)
  let parsedMarkedown4 = matter(markdownWithMetaData4)

  let htmlString1 = marked.parse(parsedMarkedown1.content)
  let htmlString2 = marked.parse(parsedMarkedown2.content)
  let htmlString3 = marked.parse(parsedMarkedown3.content)
  let htmlString4 = marked.parse(parsedMarkedown4.content)
  return{
      props:{
          slugs,
          contents1: htmlString1,
          contents2: htmlString2,
          contents3: htmlString3,
          contents4: htmlString4,
          data1: parsedMarkedown1.data,
          data2: parsedMarkedown2.data,
          data3: parsedMarkedown3.data,
          data4: parsedMarkedown4.data,
      }
  }
}

export default services