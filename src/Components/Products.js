import Item from './Item'


const Products = (props) => {

  const productImages = props.products.map((product) => (
    <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop ">

      <Item product={product} addToCart={props.addToCart}/>
    </div>

  ))

  return (

      <div class="container" style={{padding:"0.5rem"}}>
        <h1 className="is-size-4 has-text-weight-bold">All our products</h1>
        <h2 className="is-size-3">Browse our latest offerings</h2>
        <div class="columns is-1 is-variable is-multiline is-mobile" style={{}}>
          {productImages}
        </div>
      </div>


  )
}

export default Products



