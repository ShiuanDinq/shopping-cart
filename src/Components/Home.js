import Slider from "./Slider"
import Item from "./Item";
const Home = (props) => {
  var sortedProduct = props.products.sort(function(a, b){return a.price - b.price});
  var filteredProduct = sortedProduct.slice(0,3)

  const finalProduct = filteredProduct.map((product) => 
      <Item product={product}  addToCart={props.addToCart}/>
  )
  return(
    <div>
      <Slider />
      <div class="columns section" >
        <div class="featured column is-four-fifth" style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <div style={{backgroundImage: `url(father.jpeg)` ,backgroundSize:"cover" ,backgroundPosition:'center', height:"12rem"}} class="card section">
            <p class="is-size-4 has-text-black has-text-weight-bold">
              Struggling to find a gift?
            </p>
            <p class="is-size-6 has-text-black">
              Check out our selections!
            </p>
          </div>
          <div style={{backgroundImage: `url(wardrobe.jpg)` ,backgroundSize:"cover" ,backgroundPosition:'center', height:"12rem"}} class="card section">
            <p class="is-size-4 has-text-black has-text-weight-bold">
              Mix and Match
            </p>
            <p class="is-size-6 has-text-black">
              Bring out your style
            </p>
          </div>
          <div style={{backgroundImage: `url(electronics.jpg)` ,backgroundSize:"cover" ,backgroundPosition:'center', height:"12rem"}} class="card section">
            <p class="is-size-4 has-text-white has-text-weight-bold">
              Trending Electronics
            </p>
            <p class="is-size-6 has-text-white">
              Check out our guide for the best buys
            </p>
          </div>
          <div style={{backgroundImage: `url(lovers.jpg)` ,backgroundSize:"cover" ,backgroundPosition:'center', height:"12rem"}} class="card section">
            <p class="is-size-4 has-text-white has-text-weight-bold">
              Love is in the air
            </p>
            <p class="is-size-6 has-text-white">
              Pamper her with our lastest collections
            </p>
          </div>
        </div>

        <div class="column is-one-fifth has-text-centered" style={{display:"flex", flexDirection:"column" , }}> 
          <section class="has-background-danger" style={{width:"100%"}}>
            <p class="is-size-3 has-text-weight-bold">
              Crazy Deals
            </p>
          </section>
          <div className="sales-content" style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", height:"100%", backgroundColor:"lightgrey", padding:"1rem"}}>
            {finalProduct}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home