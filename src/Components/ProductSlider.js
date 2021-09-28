import { useState, useEffect} from "react";
import Item from "./Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'



const ProductSlider = (props) => {
  const [activeNum, setActiveNum] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [size, setSize] = useState(5)
  const max = 15/size-1
  const increaseActiveIndex = () => {
      setActiveIndex((prevState)=> prevState+1)
  }
  const decreaseActiveIndex = () => {
    setActiveIndex((prevState)=> prevState-1)
  }

  const handleActiveNumber = () => {

    let arr = []
    for(let i=0;i<size;i++){
      arr.push(activeIndex*size+i) 
    }
    setActiveNum(arr)
  }


 

  function handleColumnSize() {
    const { innerWidth: width, innerHeight: height } = window;
    // console.log( width)
    // console.log(height)
    if(width > 768){
      setSize(5)
    }else{
      setSize(3)
    }

  }

  useEffect(() => {
    handleColumnSize();
  })


  useEffect(() => {
    handleActiveNumber();
  })
  var sortedProduct = props.products.sort(function(a, b){return a.price - b.price});
  var filteredProduct = sortedProduct.slice(0,15)
  const finalProduct = filteredProduct.map((product, index) => 
    <div class={`is-one-fifth-desktop is-one-third-mobile column psliderItem${activeNum.includes(index)? "active":""}`} >
        <Item product={product} addToCart={props.addToCart}/>   
    </div>
  )

  return(
    <div class="card has-background-light">
      <p className="is-size-5-desktop has-text-weight-bold" style={{margin:"1rem", color:"lightsalmon"}}>TRENDING PRODUCTS</p>
      <div class="columns is-mobile card is-gapless" style={{position:"relative"}}>
        <FontAwesomeIcon icon={faChevronCircleLeft} class={`psliderMinus ${activeIndex>0? "active":""}`} onClick={decreaseActiveIndex} style={{width:"3rem"}}/>
        <FontAwesomeIcon icon={faChevronCircleRight} class={`psliderPlus ${activeIndex<max? "active":""}`} onClick={increaseActiveIndex} style={{width:"3rem"}}/>
        {finalProduct}

      </div>
    </div>

  )
}

export default ProductSlider