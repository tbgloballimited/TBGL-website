import styles from '../styles/Layout.module.css'
import Image from 'next/image'

const Clients = () => {
  return (
    <>
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
    </>
  )
}

export default Clients