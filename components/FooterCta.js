import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const FooterCta = () => {
  return (
    <>
    <div className={styles.containerFooterCta}>
        <h4>GET IN TOUCH WITH US</h4>
        <h1>Lets Build Something <br /> Great For You</h1>
        <Link href='/contact'><button>GET IN TOUCH</button></Link>
    </div>

    </>
  )
}

export default FooterCta
