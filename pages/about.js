import Meta from '../components/Meta'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import FooterCta from '../components/FooterCta'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function about() {
  return (
    <>
      <Meta title='About | Tunde Ben Global Limited' />

      <section className={styles.hero} >
          <h1 className={styles.heroText}>About Us</h1>
          <div className={styles.breadcrumb}>
            <div className={styles.heroDescription}>Home</div>
            <div className={styles.angleIcon}>&#12297; </div>
            <div className={styles.heroDescription}>ABOUT</div>
          </div>
      </section>

      <div className={styles.containerAbout}>
        <h4 style={{color: '#00923f'}}>WHO WE ARE</h4>
        <h1>Leading solar energy company with 
          <br /> all in one services.</h1>
          <p>Founded in 2015 in Ogun State Nigeria</p>
          <p>We offer a full service portfolio for solar 
            projects of all scales including site visitation, 
            procurement, installation/ engineering, project 
            management/development and construction.</p>
          <p>Tuned Ben Global Limited has received the 
            approval and endorsement of clients and users
            in Nigeria since 2014 by powering constant 
            supplies of electricity to various projects 
            from private businesses, corporate 
            organizations, Non-governmental organizations 
            and private Individuals.</p>
      </div>

      <div className={styles.containerExperience}>
        <div className={styles.containerAssymetric}>
          <div>
            <Image src='/img/onroof.jpg' alt='ben on the roof' height='464' width='424' />
            <h4 style={{color: '#00923f', marginTop: '55px'}}>OUR EXPERIENCE</h4>
            <h2>7+ Years Of Service In Solar & Renewable Energy</h2>
          </div>
          <div>
            <Image src='/img/aboutimg.jpg' alt='tbgl holding panel' height='430' width='430' />        
          </div>
        </div>

        <div className={styles.containerVision}>
          <h4>
          <span style={{color: '#00923f', textDecoration: 'capitalize'}}>OUR VISION</span>
            &nbsp;is to put an end to unstable power supply and ozone depletion while aiding environmental return to nature through solar power systems and independent station.
          </h4>
          <h4>
            <span style={{color: '#00923f', textDecoration: 'capitalize'}}>OUR MISSION</span>
            &nbsp;is To create and provide innovative, affordable, 
            efficient and timely solutions to our clients by 
            providing them utmost satisfaction and value through 
            quality products and efficient service delivery using
             the right people, strategies and technology at the 
             best possible price and to be dominant player in 
             our selected field through global alliances.
          </h4>
        </div>
      </div>

      <div className={styles.containerSpecialist}>
        <div className={styles.flex}>
          <div>
            <h2>Your Success Is Our Top <br /> Priority</h2>
            <h5>Our main aim is to help our clients generate 
              power independently thereby reducing the 
              destruction of nature by releasing toxic gases 
              into the atmosphere through the use of 
              generators and other emission engines.</h5>
          </div>
          <div>
            <h2>We Help Our Clients</h2>
            <ul>
              <li>Design suitable independent power generating
                system through renewable energy via solar 
                power systems.</li>
              <li>Manage the system by training them on 
                how to operate it to ensure maximum yield 
                of the system.</li>
              <li>Reduce long term cost on power.</li>
            </ul>
          </div>
        </div>
        <div className={styles.bullet_list}>
          <ul>
            <li>We design based on region, clients needs, 
              clients budget, nature of projects and environmental
               factors.
            </li>
            <li>We achieve all this by cooperating with our 
              suppliers to deliver superior quality components
               to meet the needs of our clients.
            </li>
            <li>We support our supplier in their pursuit of 
              continuous improvement and operational excellence. 
              At the same time, we expect our suppliers to meet 
              the highest standard in terms of quality components 
              of products such as inverter, batteries and solar 
              plates.
            </li>
            <li>We collaborate closely with our supply 
              partners to drive improvement throughout 
              the value chain. At Tunde Ben Global Limited,
               everything we do is centered around improving
                people’s lives through provision of quality 
                and standard independent solar power systems.
            </li>
            <li>We do business with partners who are committed
               to acting fairly with integrity, observing the 
               highest standard of ethics in compliance with 
               all applicable laws, regulations, policies and 
               controls.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.containerTeam}>
        <h5 style={{color: '#00923f'}}>OUR TEAM</h5>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        <h2>Meet Our Expert Team</h2>
        <div className={styles.team_cards}>
          <div className={styles.card}>
              <Image src='/img/abolanle.png' alt='Abolanle' height='180' width='170' className={styles.team_image}/>
              <h4>MD/PROJECT MANAGER</h4>
              <h6>Abolanle Ademola Dickson</h6>
          </div>
          <div className={styles.card}>
              <Image src='/img/sophia.png' alt='sophia' height='180' width='170' className={styles.team_image} />
              <h4>FINANCIAL ANALYST</h4>
              <h6>Sophia Ihuoma Agada</h6>
          </div>
          <div className={styles.card}>
              <Image src='/img/odunmolorun.png' alt='odunmolorun' height='180' width='170' className={styles.team_image} />
              <h4>CHIEF OPERATING</h4>
              <h6>Odunmolorun Oshineye</h6>
          </div>
          <div className={styles.card}>
              <Image src='/img/Babatunde.png' alt='babatunde' height='180' width='170' className={styles.team_image} />
              <h4>CHIEF ENGINEER</h4>
              <h6>Babatunde Adedayo Oniyitan</h6>
          </div>
          <div className={styles.card}>
              <Image src='/img/Frevbenagie.png' alt='frevbenagie' height='180' width='170' className={styles.team_image} />
              <h4>CHIEF SITE ENGINEER</h4>
              <h6>Frevbenagie Henry</h6>
          </div>
          <div className={styles.card}>
              <Image src='/img/josiah.png' alt='josiah' height='180' width='170' className={styles.team_image} />
              <h4>SECRETARY & LEGAL ADVISER</h4>
              <h6>Josiah Ade</h6>
          </div>

        </div>
      </div>

      {/* <Faq /> */}

      <FooterCta />
      <Footer />
    </>
  )
}
