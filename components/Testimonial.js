import Image from "next/image"
import styles from '../styles/Testimonial.module.css'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Testimonial = ({testimonials}) => {

    const images= [
      '/img/testimonial.png',
      '/img/testimonial2.jpg',
      '/img/testimonial3.jpg',
    ]
  
    const slideProperties = {
      indicators: true,
      scale: 1.2,
      duration:5000,
      transitionDuration:500,
      arrows: false,
      infinite:true,
      pauseOnHover: false,
    }
    
    const slide_container_img={
        borderRadius:'15px',
    }
    const each_slide={
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    }

  return (
    <>
    <div className={styles.containerTestimonial}>
      
        <h4 style={{color: '#fff',textAlign: 'center'}}>TESTIMONIAL</h4>
        <h1 style={{color: '#fff',textAlign: 'center',marginBottom: '40px'}}>What They Said About Us</h1>
      <div className="slide-container">
        <Fade {...slideProperties}>
          {testimonials.map((testimonial)=> (
            <>
            <div className='each-slide' style={each_slide}>
                <div className={styles.testimonial_text}>
                    <h4>{testimonial.content}
                    </h4>
                    <h5>
                    {testimonial.name}
                    </h5>
                    <h5>
                    {testimonial.designation}
                    </h5>
                </div>
                <div>
                  <Image style={slide_container_img} src={testimonial.image} alt='testimonial' height='557' width='483' />
                </div>
            </div>
            </>
            ))}
        </Fade>
      </div>
    </div>
    </>
  )
}

export default Testimonial