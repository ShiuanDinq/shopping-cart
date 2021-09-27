import Item from './Item'


const Products = (props) => {

  const productImages = props.products.map((product) => (
    <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop ">

      <Item product={product} addToCart={props.addToCart}/>
    </div>

  ))

  return (

      <div style={{padding:"0.5rem", minHeight:"100vh", paddingTop:"5rem"}}>
        <div className="is-paddingless" style={{position:"relative" ,height:"5rem"}}>
          <h1 style={{position:'absolute'}} className="is-size-4 has-text-weight-bold has-text-white is-marginless">All our products</h1>
          <h2 style={{position:'absolute' , top:"1.2rem"}}  className="is-size-3">Browse our latest offerings</h2>
        </div>

        <div class="columns is-1 is-variable is-multiline is-mobile" style={{}}>
          {productImages}
        </div>
      </div>


  )
}

export default Products



