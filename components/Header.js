import headerStyles from '../styles/Header.module.css'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Header = () => {
  const images= [
    'img/hero.png',
    'img/2mw.png',
    'img/90kwatt.jpg',
    'img/50kw.png',
  ]

  const slideProperties = {
    indicators: true,
    scale: 1.2,
    duration:5000,
    transitionDuration:500,
    arrows: true,
    infinite:true,
    pauseonHover: true,
    onchange:(oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`)
    }
  }

  return (
      <>
        <section className={headerStyles.hero} >
        <div className='slide-container'>

        <Fade {...slideProperties}>
            <div className='each-slide'>
                <div className={headerStyles.carousel_image} style={{backgroundImage: `url(${images[0]})`}}>
                  <h1 className={headerStyles.text}>Let your power problem be our problem.</h1>
                  <div className={headerStyles.description}>Having unstable and high cost of power generation is 
                  not fun.We want to make it a better experience for you.</div>
                  <button className={headerStyles.cta}>LEARN MORE</button>
              </div>
            </div>
            <div className='each-slide'>
              <div  className={headerStyles.carousel_image} style={{backgroundImage: `url(${images[1]})`}}>
                  <h1 className={headerStyles.text}>2 Mega Watts Hybrid Solar System Installation</h1>
                  <button className={headerStyles.cta}>LEARN MORE</button>
              </div>
            </div>
            <div className='each-slide'>
              <div className={headerStyles.carousel_image}  style={{backgroundImage: `url(${images[2]})`}}>
                  <h1 className={headerStyles.text}>90 Kilo Watts All in one Solar System Installation</h1>
                  <button className={headerStyles.cta}>LEARN MORE</button>
              </div>
            </div>
            <div className='each-slide'>
              <div className={headerStyles.carousel_image}  style={{backgroundImage: `url(${images[3]})`}}>
                  <h1 className={headerStyles.text}>50 Kilo Watts Hybrid Solar System Installation</h1>
                  <button className={headerStyles.cta}>LEARN MORE</button>
              </div>
            </div>
          </Fade>
        </div>
        </section>

      </>
    
  )
}

export default Header