import Image from "next/image"
import styles from '../styles/Layout.module.css'

const Testimonial = () => {
  return (
    <>
    
    <div className={styles.containerTestimonial}>
      <h4 style={{color: '#fff'}}>TESTIMONIAL</h4>
      <h1 style={{color: '#fff'}}>What They Said About Us</h1>
      <div className={styles.testimonialSlider}>
        <div className={styles.testimonialDesc}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.
            </h4>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.
            </h4>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.
            </h4>
            <h5>
              John Doe
            </h5>
            <h5>
              Managing Director, Petrocam Igando.
            </h5>
        </div>
        <div className={styles.testimonialSlideImg}>
          <Image src='/img/testimonial.png' alt='testimonial' height='557' width='483' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial