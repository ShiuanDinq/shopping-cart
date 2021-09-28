import Item from './Item'


const Products = (props) => {

  const productImages = props.products.map((product) => (
    <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop ">

      <Item product={product} addToCart={props.addToCart}/>
    </div>

  ))

  return (

      <div className="card" style={{padding:"0.5rem", minHeight:"100vh", paddingTop:"5rem"}}>
        <h2 style={{padding:"1rem 0"}} className="is-size-3-desktop is-size-4-mobile ">Browse our latest offerings</h2>
        <div class="columns is-1 is-variable is-multiline is-mobile" style={{}}>
          {productImages}
        </div>
      </div>


  )
}

export default Products



