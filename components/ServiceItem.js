import styles from '../styles/Service.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ServiceItem = ({services, paths}) => {
  return (
            <li className={styles.single_service_box}>
              <Link href={`/services/${services.id}`}>
                <div>
                    <Image src={services.image} alt="tbgl logo" height='60' width='60' />
                  <h3>{services.title}</h3>
                  <p> {services.excerpt}
                  </p>
                  <button className={styles.cta}>
                      Learn More
                  </button>
                </div>
              </Link>
          </li>

        )
      }


export default ServiceItem