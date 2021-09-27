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
    console.log(props.cart)


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
    console.log(props.stock)
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
    console.log(props.stock)
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
    <div style={{padding:"1rem", borderBottom:"2px solid rgba(0,0,0,0.4)", width:"100%"}}className="columns is-mobile card ">
      <div class="column is-one-third" style={{display:'flex', flexDirection:"column", justifyContent:"center"}}>
        <img src={props.info.image} />
      </div>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%"}} class="is-two-third">
        <div>
        <p style={{fontSize:"2rem"}}>{props.info.title}</p>
        <p style={{fontWeight:"bold"}}>RM {props.info.price}</p>

        </div>

        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div>
          <p>quantity</p>
        <Dropdown quantity={props.num} action={adjustCart}/>
          </div>

        <p style={{fontSize:"0.8rem", fontWeight:"bold"}}>SUBTOTAL: <p style={{fontSize:"1.2rem", fontWeight:"bolder"}}>RM {props.info.price*props.num}</p> </p>
        </div>
        <div className="drop-button" onClick={dropProduct}>x</div>

      </div>
      <NoStockPop noStock={noStock}/>


    </div>
  )
}

export default CheckoutItem