import React from "react"
import { useState , useEffect } from 'react'
import CheckoutItem from "./CheckoutItem"
import { Link} from 'react-router-dom'

const Checkout = (props) => {
  const [total, setTotal] = useState()
  const [itemNum, setItemNum] = useState()

  useEffect(()=>{
    let sum = 0
    let num = 0
    props.cart.map((item) => 
      {
        sum = sum + (item.info.price*item.cart)
        num = num + item.cart;
      }
    )
    let formatted = (Math.round(sum * 100) / 100).toFixed(2);
    setTotal(formatted)
    setItemNum(num)
  },[props.cart])

  


  const checkout = props.cart.map((product) => 
    <CheckoutItem info={product.info} num={product.cart} stock={props.stock} setStock={props.setStock} getStock={props.getStock} setCart={props.setCart} cart={props.cart} getTotal={props.getTotal}/>
  )

  const mess = props.cart.length===0? 
  <div>
    <p>Your cart is currently empty</p>
    <Link style={{width:"100%", height:"100%", display:'flex', alignItems:"center"}} to={'/products'} >
      Continue shopping
    </Link>
  </div> : ""


  


  return(

      <section class="section card">
        <div class="columns" style={{minHeight:"100vh", paddingTop:"5rem"}}>
          <div class="column is-half">
            
            {checkout}
            {mess}
          </div>
          <div class="column is-half card" style={{height:"100%"}}>
            <p style={{fontSize:"1rem", fontWeight:"bold"}}>ORDER SUMMARY | {itemNum} ITEM(S)</p>
            <div style={{display:"flex", justifyContent:"space-between", fontSize:"1.2rem"}}>
              <p>items subtotal</p>
              <p>RM {total}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", fontSize:"2rem"}}>
              <p >ORDER TOTAL</p>
              <p>RM {total}</p>
            </div>
          </div>
        </div>  
      </section>


  )

}

export default Checkout