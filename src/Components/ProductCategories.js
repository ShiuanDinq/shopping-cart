import { useParams } from 'react-router'
import Item from './Item'



const ProductCategory = (props) => {

  const params = useParams()

  const category = props.products.filter((item) => item.category == params.category).map((product) => (
    <div class="column is-one-fifth">
      <Item product={product} addToCart={props.addToCart}/>
    </div>

    ))

  return (
    <section  class="section">
      <h1 class="is-size-2">
        {params.category}
      </h1>
      <div className="columns is-multiline">{category}</div>
    </section>


  )
}

export default ProductCategory