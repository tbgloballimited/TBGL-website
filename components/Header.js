import styles from '../styles/Header.module.css'
// import bgVideo from '/videos/3dbg.mp4'

const Header = () => {

  return (
      <>
        <section className={styles.hero} >
          <div className='overlay'></div>
          <video 
          autoPlay
          loop 
          muted 
          className={styles.video_bg}>
            <source src='/videos/3dbg.mp4' type='video/mp4' />
          </video>
          {/* <Video src={videobg} autoPlay loop muted playsInline className={styles.video_bg}/> */}
          <div className={styles.slide_container}>
            <div className={styles.hero_container}>
              <h1 className={styles.text}>Let your power problem be our problem.</h1>
              <div className={styles.description}>Having unstable and high cost of power generation is 
              not fun.<br />We want to make it a better experience for you.</div>
              <button className={styles.cta}>LEARN MORE</button>
            </div>
            {/* <Fade {...slideProperties}>
                <div className='each-slide'>
                    <div className={styles.carousel_image} style={{backgroundImage: `url(${images[0]})`, backgroundSize: 'cover'}}>
                      <h1 className={styles.text}>Let your power problem be our problem.</h1>
                      <div className={styles.description}>Having unstable and high cost of power generation is 
                      not fun.<br />We want to make it a better experience for you.</div>
                      <button className={styles.cta}>LEARN MORE</button>
                  </div>
                </div>
                <div className='each-slide'>
                  <div  className={styles.carousel_image} style={{backgroundImage: `url(${images[1]})`, backgroundSize: 'cover'}}>
                      <h1 className={styles.text}>2 Mega Watts Hybrid Solar System Installation</h1>
                      <button className={styles.cta}>LEARN MORE</button>
                  </div>
                </div>
                <div className='each-slide'>
                  <div className={styles.carousel_image}  style={{backgroundImage: `url(${images[2]})`, backgroundSize: 'cover'}}>
                      <h1 className={styles.text}>90 Kilo Watts All in one Solar System Installation</h1>
                      <button className={styles.cta}>LEARN MORE</button>
                  </div>
                </div>
                <div className='each-slide'>
                  <div className={styles.carousel_image}  style={{backgroundImage: `url(${images[3]})`, backgroundSize: 'cover'}}>
                      <h1 className={styles.text}>50 Kilo Watts All in one Solar System Installation</h1>
                      <button className={styles.cta}>LEARN MORE</button>
                  </div>
                </div>
              </Fade> */}
          </div>
        </section>

      </>
    
  )
}

export default Header