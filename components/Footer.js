import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
      <>
        <div className={styles.containerFooter}>
            <div className={styles.top_footer}>
                <ul>
                    <li>Services</li>
                    <li>
                        <Link href='/services/1'>
                            <span>
                                Development
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/services/2'>
                            <span>
                                Design
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/services/3'>
                            <span>
                                EPC
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/services/4'>
                            <span>
                                O&M
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Quick links</li>
                    <li>
                        <Link href='/about'>
                            <span>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects'>
                            <span>
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/products'>
                            <span>
                                Shop
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <span>
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>Office Address</li>
                    <li>
                    <span>
                        Block A Plot 8a, Laderin Estate, Abeokuta, Ogun State, Nigeria
                    </span>
                    </li>
                    <li>
                    <span>
                        Generation Homes Estate, Kuje, Abuja.
                    </span>
                    </li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>hello@tbgl.com.ng</li>
                    <li>+2347067965229</li>
                </ul>
            </div>
            <div className={styles.footerReserve}>
                Copyright c 2022 TBGL. All Rights Reserved
            </div>
        </div>
      </>
  )
}

export default Footer