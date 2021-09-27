import Item from './Item'


const Products = (props) => {

  const productImages = props.products.map((product) => (
    <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop">

      <Item product={product} addToCart={props.addToCart}/>
    </div>

  ))

  return (
    <section class="section ">
      <div class="container">
        <h1 className="is-size-4 has-text-weight-bold">All our products</h1>
        <h2 className="is-size-3">Browse our latest offerings</h2>
        <div class="columns is-multiline is-mobile">
          {productImages}
        </div>
      </div>
    </section>

  )
}

export default Products



