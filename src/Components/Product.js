import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import Dropdown from './Dropdown'
import ItemAddedPop from './ItemAddedPop'
import NoStockPop from './NoStockPop'


const Product = (props) => {

  const params = useParams()
  const product = props.products.filter((item)=> item.id==params.id)[0]
  const [quantity, setQuantity] = useState(1)
  const [addCart, setAddCart] = useState(false)
  const [noStock, setNoStock] = useState(false)



  const addToCart = (quantity, id) => {
    if(quantity<=props.getStock(params.id )){
      setAddCart(true)
      setTimeout(()=>{setAddCart(false)}, 1000)
      addProductCart(quantity, id)
      minusProductStock(quantity, id)
      console.log(props.cart)
    }else{
      setNoStock(true)
      setTimeout(()=>{setNoStock(false)}, 1000)
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

  const productDetail = props.products.filter((item) => item.id == params.id).map((product) => (
    <div className="card has-background-light columns product-detail" >
      <div class="is-one-third column product-detail-img" >
        <img src={product.image}/>
      </div>
      <div class="is-two-third column product-detail-content" >
        <div>
          <p className="product-detail-title">{product.title}</p>
          <p className="product-detail-description">{product.description}</p>  
        </div>
        
        <div>
          <p className="product-detail.stock is-size-6 has-text-weight-bold">Stock: {props.getStock(product.id )}</p>
          <Dropdown quantity={quantity} action={setQuantity}/>
          <div class="submit-button" onClick={()=>addToCart(quantity, params.id)}>
            Add to cart
          </div>
        </div>

      </div>
    </div>

    ))

  return (
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column ">
            {productDetail}
          </div>
        </div>
      </div>
      <ItemAddedPop addCart={addCart}/>
      <NoStockPop noStock={noStock} />
    </section>


  )
}

export default Product