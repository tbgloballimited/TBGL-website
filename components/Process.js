import Image from "next/image"

const Process = () => {


  return (
    <>
    <div className={styles.containerProcess}>
      <h4 style={{color: '#00923f'}}>OUR PROCESS</h4>
      <h1>How We Work</h1>
      <p style={{color: '#848484', textAlign: 'center'}}>We complete every step carefully,<br />
       Lorem ipsum dolor amet, consectetur adipiscing elit</p>
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
    </>
  )
}

export default Process