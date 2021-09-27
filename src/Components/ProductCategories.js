import { useParams } from 'react-router'
import Item from './Item'



const ProductCategory = (props) => {

  const params = useParams()

  const category = props.products.filter((item) => item.category == params.category).map((product) => (
    <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop">
      <Item product={product} addToCart={props.addToCart}/>
    </div>

    ))

  return (
    <section  class="section">
      <h1 class="is-size-2 has-text-weight-bold">
        {params.category}
      </h1>
      <div className="columns is-multiline is-mobile">{category}</div>
    </section>


  )
}

export default ProductCategory