import Meta from '../../components/Meta'
import styles from '../../styles/Products.module.css'
import Image from 'next/image'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'
import Link from 'next/link'
import fs from 'fs'
import path, { parse } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
 
const products = ({slugs,data1, data2, data3, data4, data5, data6}) => {
    console.log(data1)
  return (
    <>

    <Meta title='Projects | Tunde Ben Global Limited' />
        
        <section className={styles.hero} >
            <div className='overlay'>
                <h1 className={styles.heroText}>Shop</h1>
                <div className={styles.breadcrumb}>
                <div className={styles.heroDescription}><Link href='/'>Home</Link></div>
                <div className={styles.angleIcon}>&#12297; </div>
                <div className={styles.heroDescription}>Shop</div>
                </div>
            </div>
        </section>
        <section className={styles.product_main}>
            <ul>
                <li>10K WATTS</li>
                <li>30K WATTS</li>
                <li>50K WATTS</li>
                <li>100K WATTS</li>
            </ul>
            {/* <ProductList products={products} /> */}

            <div className={styles.product_grid}>   
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data1.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data1.title}</h6>
                            <h4>{data1.description}</h4>
                            <h5>N{data1.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data2.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data2.title}</h6>
                            <h4>{data2.description}</h4>
                            <h5>N{data2.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data3.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data3.title}</h6>
                            <h4>{data3.description}</h4>
                            <h5>N{data3.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data4.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data4.title}</h6>
                            <h4>{data4.description}</h4>
                            <h5>N{data4.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data5.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data5.title}</h6>
                            <h4>{data5.description}</h4>
                            <h5>N{data5.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <div className={styles.product_image} style={{backgroundImage: `url(${data6.image})`}}></div>
                    {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
                    <div className={styles.product_content}>
                        <div>
                            <h6>{data6.title}</h6>
                            <h4>{data6.description}</h4>
                            <h5>N{data6.price}</h5>
                        </div>
                        <div>
                            <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
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
          data5: parsedMarkedown5.data,
          data6: parsedMarkedown6.data,
      }
  }
}

export default products