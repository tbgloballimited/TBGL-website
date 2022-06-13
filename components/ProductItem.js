import styles from '../styles/Products.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ProductItem = ({products}) => {
  return (   
        <div className={styles.product_card}>
            <div className={styles.product_image} style={{backgroundImage: `url(${products.image})`}}></div>
            {/* <Image src={products.image} alt='product three' height='426' width='345' /> */}
            <div className={styles.product_content}>
                <div>
                    <h6>{products.name}</h6>
                    <h4>{products.description}</h4>
                    <h5>N{products.price}</h5>
                </div>
                <div>
                    <button className={styles.cta}><Link href='/'>BUY NOW</Link></button>
                </div>
            </div>
        </div>

  )
}

export const getStaticPaths = async() => {
  const res = await fetch(`${server}/api/products`)
  const products= await res.json()
  const ids = products.map((product) => product.id)
  const paths = ids.map((id) => ({param: {id: id.toString()}}))

  return {
    paths,
    fallbalck:false,
  }
}

export default ProductItem