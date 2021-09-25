import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import Item from './Item'
import Dropdown from './Dropdown'
import ItemAddedPop from './ItemAddedPop'

const Product = (props) => {


  const params = useParams()
  const selected = props.products.filter((item) => item.id == params.id)
  const product = selected[0]
  const [quantity, setQuantity] = useState(1)
  const [addCart, setAddCart] = useState(false)
  const [pressed, setPressed]  = useState(false)

  const addToCart = (quantity, id) => {
    if(quantity<=props.getStock(product.id )){
      setAddCart(true)
      setPressed(true)
      setTimeout(()=>{setAddCart(false)}, 1000)
      addProductCart(quantity, id)
      minusProductStock(quantity, id)
      console.log(props.cart)
    }else{
      alert('stock insufficient')
    }


  }

  const addProductCart = (quantity, id) => {
    if(props.cart.filter(e => e.id == id).length > 0){
      props.setCart((prevState) => { 
        const newCart = prevState.map((item) => {
          if(item.id == id){
            return({id:id, info:item.info, cart:item.cart+quantity})
          }else{
            return(item)
          }
        }) 
        return(newCart)
      })
    }else{
      props.setCart([...props.cart, {id:id, info:product, cart:quantity}])
    }
  }


  const minusProductStock = (quantity, id) => {
  
    props.setStock((prevState) => {  
      const newStock = prevState.map((item) => {
        if(item.id == id){
          return({id:item.id, total:item.total, stock:item.stock-quantity})
        }else{
          return(item)
        }
      }) 
      return(newStock)
    })  
    console.log(props.stock)
  }






  const productCard = 
  <div className="product card has-background-light columns" style={{padding:"1rem"}}>
      <div class="is-one-third column">
        <div style={{width:"100%", height:"100%", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img src={product.image}/>
        </div>

      </div>

      <div class="is-half column">
        <div class="product-content">
          <p style={{fontSize:"2rem", fontWeight:"bold"}}>{product.title}</p>
          <p className="is-size-6" style={{marginTop:"0.5rem" , height: "40%", overflow:"hidden"}}>{product.description}</p>
          <p className="is-size-6 has-text-weight-bold">Stock: {props.getStock(product.id )}</p>
          <div >       
          </div>
          <Dropdown quantity={quantity} action={setQuantity}/>
          <div class="submit-button" onClick={()=>{addToCart(quantity, params.id)}}>
            Add to cart
          </div>
        </div>

      </div>

  </div>

  return (
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column ">
            {productCard}
          </div>
        </div>
      </div>
      <ItemAddedPop addCart={addCart} pressed={pressed}/>
    </section>


  )
}

export default Product