import Meta from '../components/Meta'
import styles from '../styles/Products.module.css'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Link from 'next/link'
import { server } from '../config'

const products = ({products}) => {
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
            <ProductList products={products} />
        </section>
        <FooterCta />
        <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
    const res_product =  await fetch
    (`${server}/api/products`)
    const products = await res_product.json()
  
    return {
      props:{
        products
      },
    }
  }

export default products