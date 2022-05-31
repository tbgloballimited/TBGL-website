import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className = {navStyles.nav}>
        <ul className='nav-logo'>
          <Image src={'/img/logo.jpg'} alt={'tbgl logo'} height={112} width={107} />
        </ul>
        <ul className='nav-links'>
            <li>
                <Link href='/'>HOME</Link>
            </li>
            <li>
                <Link href='/about'>ABOUT</Link>
            </li>
            <li>
                <Link href='/services'>SERVICES</Link>
            </li>
            <li>
                <Link href='/about'>PROJECTS</Link>
            </li>
            <li>
                <Link href='/about'>PRODUCTS</Link>
            </li>
        </ul>
        <ul className='nav-cta'>
          <button className={navStyles.cta}>GET IN TOUCH</button>
        </ul>
    </nav>
  )
}

export default Nav