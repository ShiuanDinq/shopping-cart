import { useState } from "react/cjs/react.development"
import Dropdown from "./Dropdown"
import NoStockPop from "./NoStockPop"

const CheckoutItem = (props) => {

  const [noStock, setNoStock] = useState(false)

  const adjustCart = (quantity) => {
    if(quantity<=props.getTotal(props.info.id)){
      adjustProductStock(quantity, props.info.id)
      adjustProductCart(quantity, props.info.id)
    }else{
      setNoStock(true)
      setTimeout(()=>{setNoStock(false)}, 1000)
    }
  }

  const dropProduct = () => {
    restoreProductStock(props.info.id)
    dropProductCart(props.info.id)
  }

  const restoreProductStock = (id) => {  
    props.setStock((prevState) => {  
      const newStock = prevState.map((product) => {
        if(product.id == id){
          return({id:product.id, total:product.total, stock:product.total})
        }else{
          return(product)
        }
      }) 
      return(newStock)
    })  
  }

  const dropProductCart = (id) => {
    props.setCart((prevState) => { 
      const newCart = prevState.filter((item)=>item.id != id)
      return(newCart)
    })
  }

  const adjustProductStock = (quantity, id) => { 
    props.setStock((prevState) => {  
      const newStock = prevState.map((product) => {     
        if(product.id == id){
          return({id:product.id, total:product.total, stock:product.total-quantity})
        }else{
          return(product)
        }
      }) 
      return(newStock)
    })  
  }

  const adjustProductCart = (quantity, id) => {
    props.setCart((prevState) => { 
      const newCart = prevState.map((item) => {
        if(item.id == id){
          return({id:item.id, info:item.info, cart:quantity})
        }else{
          return(item)
        }
      }) 
      return(newCart)
    })
  }


  return(
    <div className="columns is-mobile card checkout-card">
      <div class="column is-one-third checkout-card-image">
        <img src={props.info.image} />
      </div>

      <div class="is-two-third checkout-card-content">
        <div>
          <p className="is-size-4-desktop is-size-6-mobile has-text-weight-bold">{props.info.title}</p>
          <p className="is-size-5-desktop is-size-7-mobile">RM {props.info.price}</p>
        </div>

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div>
            <p className="is-size-5-desktop is-size-7-mobile">quantity</p>
            <Dropdown quantity={props.num} action={adjustCart}/>
          </div>

          <p className="is-size-6-desktop is-size-7-mobile">SUBTOTAL: <p className="is-size-4-desktop is-size-7-mobile">RM {props.info.price*props.num}</p> </p>
        </div>

        <div className="drop-button" onClick={dropProduct}>x</div>
      </div>
      <NoStockPop noStock={noStock}/>
    </div>
  )
}

export default CheckoutItem