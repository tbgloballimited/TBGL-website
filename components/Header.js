import headerStyles from '../styles/Header.module.css'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Header = () => {
  const images= [
    'img/hero.png',
    'img/hero2mw.png',
    'img/90kwatt.jpg',
  ]

  const slideProperties = {
    indicators: true,
    scale: 0,
    duration:5000,
    transitionDuration:500,
    arrows: false,
    infinite:true,
    pauseonHover: false,
  }

  return (
      <>
        <section className={headerStyles.hero} >
        <div className='overlay'>
          <div className='slide-container'>

          <Fade {...slideProperties}>
              <div className='each-slide'>
                  <div className={headerStyles.carousel_image} style={{backgroundImage: `url(${images[0]})`, backgroundSize: 'cover'}}>
                    <h1 className={headerStyles.text}>Let your power problem be our problem.</h1>
                    <div className={headerStyles.description}>Having unstable and high cost of power generation is 
                    not fun.We want to make it a better experience for you.</div>
                    <button className={headerStyles.cta}>LEARN MORE</button>
                </div>
              </div>
              <div className='each-slide'>
                <div  className={headerStyles.carousel_image} style={{backgroundImage: `url(${images[1]})`, backgroundSize: 'cover'}}>
                    <h1 className={headerStyles.text}>2 Mega Watts Hybrid Solar System Installation</h1>
                    <button className={headerStyles.cta}>LEARN MORE</button>
                </div>
              </div>
              <div className='each-slide'>
                <div className={headerStyles.carousel_image}  style={{backgroundImage: `url(${images[2]})`, backgroundSize: 'cover'}}>
                    <h1 className={headerStyles.text}>90 Kilo Watts All in one Solar System Installation</h1>
                    <button className={headerStyles.cta}>LEARN MORE</button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        </section>

      </>
    
  )
}

export default Header