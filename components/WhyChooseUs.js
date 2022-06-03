import styles from '../styles/Layout.module.css'

const WhyChooseUs = () => {
  return (
    <>
        <div className={styles.containerWhy}>
            <h1 style={{color: '#000', marginBottom: '65px'}}>Why Choose Us</h1>
            <div className={styles.WhyDescription}>
                <h4>We give the best customer relationship management and customer satisfaction.</h4>
                <h4>We bring in the best hands of professionalism to our design, construction &amp; commissioning of
                    the solar systems.</h4>
                <h4>We educate our clients on solar system as a whole and let them understand how it works before
                    designing and installing a system for them.</h4>
                {/* <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h4> */}
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs