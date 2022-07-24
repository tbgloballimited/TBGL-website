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
            <Image src='/img/petrocam_logo.png' alt="petrocam logo" height='40' width='192' />
            </li>
            <li>
            <Image src='/img/green_legacy_logo.png' alt="green legacy" height='52' width='252' />
            </li>
            <li>
            <Image src='/img/eterna_logo.png' alt="eterna logo" height='52' width='252' />
            </li>
        </ul>
        <ul>
            <li>
            <Image src='/img/paragon_logo.png' alt="paragon logo" height='144' width='146' />
            </li>
            <li>
            <Image src='/img/oopl_logo.png' alt="oopl logo" height='152' width='158' />
            </li>s
        </ul>
        </div>
    </>
  )
}

export default Clients