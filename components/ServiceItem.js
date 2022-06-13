import styles from '../styles/Service.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ServiceItem = ({services, paths}) => {
  return (
            <li className={styles.single_service_box}>
            <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
            <h3>{services.title}</h3>
            <p> {services.excerpt}
            </p>
            <button className={styles.cta}>
              <Link 
                href={`/services/${services.id}`}>
                Learn More
              </Link>
            </button>
          </li>

        )
      }


export default ServiceItem