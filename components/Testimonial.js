import Image from "next/image"
import styles from '../styles/Testimonial.module.css'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Testimonial = () => {

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
      pauseonHover: true,
      onchange:(oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`)
      }
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
              <div className='each-slide' style={each_slide}>
                  <div className={styles.testimonial_text}>
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
                  <div>
                    <Image style={slide_container_img} src={images[0]} alt='testimonial' height='557' width='483' />
                  </div>
              </div>
              <div className='each-slide' style={each_slide}>
                  <div className={styles.testimonial_text}>
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
                        General Manager, NNPC Abeokuta.
                      </h5>
                  </div>
                  <div>
                    <Image style={slide_container_img} src={images[1]} alt='testimonial' height='557' width='483' />
                  </div>
              </div>
              <div className='each-slide' style={each_slide}>
                  <div className={styles.testimonial_text}>
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
                        Founder, OG Farms Igando.
                      </h5>
                  </div>
                  <div>
                    <Image style={slide_container_img} src={images[2]} alt='testimonial' height='557' width='483' />
                  </div>
              </div>
        </Fade>
      </div>
        {/* <h4 style={{color: '#fff'}}>TESTIMONIAL</h4>
        <h1 style={{color: '#fff'}}>What They Said About Us</h1>
        <div className={styles.testimonialSlider}>
          <div >
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
        </div> */}
    </div>
    </>
  )
}

export default Testimonial