import styles from '../styles/Layout.module.css'
// import ArticleList from '../components/ArticleList'
// import {server} from '../config'
import Header from '../components/Header'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <>
    <Header />
    <div className={styles.containerAbout}>
        {/* <ArticleList articles={articles} /> */}
      <div className={styles.aboutImg}></div>
      <div className={styles.aboutDesc}>
        <h4>WHO WE ARE</h4>
        <h1>Renewable Energy For Sustainability</h1>
          <p style={{width:'490px'}}>Since 2014, we have been providing constant electicity supply
              to various projects from private businesses, corporate 
              organizations, non-governmental organizations and 
              private Individuals.
          </p>
        <ul>
          <li>Lower Monthly Bills</li>
          <li>No worries about blackouts</li>
          <li>Positive environment impact</li>
        </ul>
        <button className={styles.cta}>MORE ABOUT US</button>
      </div>
    </div>

    <div className={styles.containerServices}>
      <h4 style={{color: '#00923f'}}>OUR SERVICES</h4>
      <h1>We Are Building A Sustainable Future</h1>
      <ul>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h3>Project Development</h3>
          <p> We co- develop solar project with our partners RIA ( Renewable In Africa) in London, UK. 
            We source for clients with huge energy demands (200kwatts &amp; above) mostly commercial 
            usage
          </p>
          <button className={styles.cta}>Learn More</button>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h3>Designing of Solar Systems</h3>
          <p>We design the solar system base on the load analysis and comes up with the best system to 
            perfectly fit into the loads profile.
          </p>
          <button className={styles.cta}>Learn More</button>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h3>Engineering, Procurement & Construction</h3>
          <p>At this stage, the design of the system is interpreted and procurement of the component are 
            made,follow by construction of the whole system and commissioning by our team.
          </p>
          <button className={styles.cta}>Learn More</button>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h3>Operating & Maintenance</h3>
          <p>This is carried out mostly quarterly or bi- annually after commissioning of the solar system
             to ensure maximum efficiency &amp; effectiveness of the solar system.
          </p>
          <button className={styles.cta}>Learn More</button>
        </li>
      </ul>
    </div>

    <div className={styles.containerProjects}>
      <div>
        <h4 style={{color: '#00923f'}}>OUR PROJECTS</h4>
        <h1>Our Recent Work</h1>
        <h4 style={{color: '#848484', fontWeight:'normal'}}>We have built a wide range of independent power <br />generating systems</h4>
      </div>
      <ul>
        <li>
          <h4>2Mega Watts</h4>
          <h4> View detail &#12297; </h4>
        </li>
        <li>
          <h4>90kWatts Hybrid Solar Power System</h4>
          <h4> View detail &#12297; </h4>
        </li>
        <li>
          <h4>50kwatts Hybrid Solar Power System</h4>
          <h4> View detail &#12297; </h4>
        </li>
      </ul>
    </div>

    <div className={styles.containerProcess}>
      <h4 style={{color: '#00923f'}}>OUR PROCESS</h4>
      <h1>How We Work</h1>
      <p style={{color: '#848484'}}>We complete every step carefully, Lorem ipsum dolor amet, consectetur adipiscing elit</p>
      <ul>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h4>Make Appointment</h4>
          <p> Lorem Ipsum dolor sit <br />amet, consectetur <br />adipiscing elit </p>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h4>Consultation</h4>
          <p> Lorem Ipsum dolor sit <br />amet, consectetur <br />adipiscing elit </p>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h4>Design</h4>
          <p> Lorem Ipsum dolor sit <br />amet, consectetur <br />adipiscing elit </p>
        </li>
        <li>
          <Image src='/img/logo.jpg' alt="tbgl logo" height='60' width='60' />
          <h4>Construction & Commissioning</h4>
          <p> Lorem Ipsum dolor sit <br />amet, consectetur <br />adipiscing elit </p>
        </li>
      </ul>
    </div>

    <div className={styles.containerClients}>
      <h4 style={{color: '#00923f'}}>OUR CLIENTS</h4>
      <h1>We Have Worked With Some <br />Awesome Brands</h1>
      <ul>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
      </ul>
      <ul>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
        <li>
          <Image src='/img/clientlogo.png' alt="tbgl logo" height='40' width='192' />
        </li>
      </ul>
    </div>

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

    <FooterCta />
    <Footer />
    </>
  )
}

// export const getStaticProps = async () => {
//   const res =  await fetch
//   (`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props:{
//       articles
//     },
//   }
// }