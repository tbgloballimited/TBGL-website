import styles from '../styles/Nav.module.css'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className = {styles.nav}>
       <Link href='/'>
            <a className={styles.logo_anchor}>
                <ul className='nav-logo'>
                    <Image src={'/img/final_logo.png'} alt={'tbgl logo'} height={112} width={107} />
                </ul>
            </a>
        </Link>
        <ul className={styles.nav_links}>
            <li>
                <Link href='/'>HOME</Link>
            </li>
            <li>
                <Link href='/about'>ABOUT</Link>
            </li>
            <li>
                <Link href='/services'>SERVICES</Link>
            </li>
            <li>
                <Link href='/projects'>PROJECTS</Link>
            </li>
            <li>
                <Link href='/products'>PRODUCTS</Link>
            </li>
        </ul>
        <ul className='nav-cta'>
        <Link href='/contact'><button className={styles.cta}>GET IN TOUCH</button></Link>
        </ul>
        <ul className={styles.mobile_nav}>
            <details>
                <summary></summary>
                <div className={styles.nav_dropdown}>
                    <ul>
                        <li>
                            <Link href='/'>HOME</Link>
                        </li>
                        <li>
                            <Link href='/about'>ABOUT</Link>
                        </li>
                        <li>
                            <Link href='/services'>SERVICES</Link>
                        </li>
                        <li>
                            <Link href='/projects'>PROJECTS</Link>
                        </li>
                        <li>
                            <Link href='/products'>PRODUCTS</Link>
                        </li>
                    </ul>
                </div>
            </details>
        </ul>
    </nav>
  )
}

export default Nav