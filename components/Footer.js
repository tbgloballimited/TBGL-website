import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
      <>
        <div className={styles.containerFooter}>
            <div className={styles.top_footer}>
                <ul>
                    <li>Services</li>
                    <li>
                    <span>
                        Design
                    </span>
                    </li>
                    <li>
                    <span>
                        Installation
                    </span>
                    </li>
                    <li>
                    <span>
                        Procurement
                    </span>
                    </li>
                    <li>
                    <span>
                        Maintenance
                    </span>
                    </li>
                </ul>
                <ul>
                    <li>Quick links</li>
                    <li>
                    <span>
                        Blog
                    </span>
                    </li>
                    <li>
                    <span>
                        About
                    </span>
                    </li>
                    <li>
                    <span>
                        Projects
                    </span>
                    </li>
                    <li>
                    <span>
                        Faq
                    </span>
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