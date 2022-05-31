import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
      <>
        <section className={headerStyles.hero} >
            <h1 className={headerStyles.text}>Go Solar in Nigeria</h1>
            <div className={headerStyles.description}>Having unstable and high cost of power generation is 
            not fun.</div>
            <div className={headerStyles.description}> 
              We want to make it a better experience for you.</div>
            <button className={headerStyles.cta}>LEARN MORE</button>
        </section>
      </>
    
  )
}

export default Header