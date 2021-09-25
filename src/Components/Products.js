import Item from './Item'


const Products = (props) => {

  const productImages = props.products.map((product) => (
    <div class="column is-one-fifth">
      <Item product={product} addToCart={props.addToCart}/>
    </div>

  ))

  return (
    <section class="section ">
      <div class="container">
        <h1 style={{fontSize:"4rem", fontWeight:"bold"}}>All our products</h1>
        <h2 style={{fontSize:"2rem"}}>Browse our latest offerings</h2>
        <div class="columns is-multiline ">
          {productImages}
        </div>
      </div>
    </section>

  )
}

export default Products



