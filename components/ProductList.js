import styles from '../styles/Products.module.css'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
  return (
    <>     
    <div className={styles.product_grid}>     
      {products.map((product) => (
        <ProductItem key={product.id} products={product} />
      ))}
    </div>
    </>
    
  )
}

export default ProductList