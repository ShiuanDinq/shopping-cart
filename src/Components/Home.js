import Slider from "./Slider"
import Item from "./Item"
import ProductSlider from "./ProductSlider";

const Home = (props) => {


  return(
    <div  style={{width:"100vw"}}>
      <Slider />
      <div class="columns" style={{ marginTop:"0.5rem"}}>
        <div class="featured column is-four-fifth" style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
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
      </div>
      <ProductSlider products={props.products} />
    </div>
  )
}

export default Home