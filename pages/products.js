import Meta from '../components/Meta'
import styles from '../styles/Products.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import WhyChooseUs from '../components/WhyChooseUs'
import Clients from '../components/Clients'

const products = () => {
  return (
    <>
    <Meta title='Projects | Tunde Ben Global Limited' />
    
        <section className={styles.hero} >
            <h1 className={styles.heroText}>Shop</h1>
            <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}>Home</div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>Shop</div>
            </div>
        </section>
        <section className={styles.product_main}>
            <ul>
                <li>10K WATTS</li>
                <li>30K WATTS</li>
                <li>50K WATTS</li>
                <li>100K WATTS</li>
            </ul>
            <div className={styles.product_grid}>
                <div className={styles.product_card}>
                    <Image src='/img/product_one.png' alt='product one' height='426' width='345' />
                    <div className={styles.product_content}>
                        <div className={styles.content_info}>
                            <h6>3K WATTS</h6>
                            <h5>Jackery 2000i</h5>
                            <h5>N150,000</h5>
                        </div>
                        <div className={styles.content_button}>
                            <button className={styles.cta}>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <Image src='/img/product_two.png' alt='product two' height='426' width='345' />
                    <div className={styles.product_content}>
                        <div>
                            <h6>3K WATTS</h6>
                            <h4>Jackery 2000i</h4>
                            <h5>N150,000</h5>
                        </div>
                        <div>
                            <button className={styles.cta}>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <Image src='/img/product_two.png' alt='product three' height='426' width='345' />
                    <div className={styles.product_content}>
                        <div>
                            <h6>3K WATTS</h6>
                            <h4>Jackery 2000i</h4>
                            <h5>N150,000</h5>
                        </div>
                        <div>
                            <button className={styles.cta}>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className={styles.product_card}>
                    <Image src='/img/product_one.png' alt='product three' height='426' width='345' />
                    <div className={styles.product_content}>
                        <div>
                            <h6>3K WATTS</h6>
                            <h4>Jackery 2000i</h4>
                            <h5>N150,000</h5>
                        </div>
                        <div>
                            <button className={styles.cta}>BUY NOW</button>
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

export default products