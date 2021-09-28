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
    <div className="card" style={{padding:"0.5rem", minHeight:"100vh", paddingTop:"5rem"}}>
       <h2 style={{padding:"1rem 0"}} className="is-size-3-desktop is-size-4-mobile is-capitalized">{params.category}</h2>

      <div className="columns is-1 is-variable is-multiline is-mobile">{category}</div>
    </div>


  )
}

export default ProductCategory