import styles from '../styles/Service.module.css'
import ServiceItem from './ServiceItem'

const ServiceList = ({services}) => {
  return (
    <>  
    <div className={styles.containerServices}>
      <h4 style={{color: '#00923f'}}>OUR SERVICES</h4>
      <h1>We Are Building A Sustainable Future</h1>
      <ul>
        {services.map((service) => (
          <ServiceItem key={service.id} services={service} />
        ))}
      </ul>
    </div>
    
    </>
    
  )
}

export default ServiceList