import React from "react"
import { Link } from 'react-router-dom'
const Item = (props) => {
  
  return(
    <Link to={`/products/${props.product.id}`}> 
      <div id={props.product.id} className="card" className="card" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"22rem", width:"13rem"}}>
        <div style={{height:"65%"}}>
          <img style={{width: "10rem",height: "100%", padding: "1rem"}} key={props.product.id} src={props.product.image} /> 
        </div>
        <div className="product-card" style={{height:"35%"}}>
          <p style={{textAlign:"left", fontSize:"1rem", overflow:"hidden", height: "2rem", fontWeight:"bold"}}>{props.product.category}</p>
          <p style={{textAlign:"left", fontSize:"1rem", overflow:"hidden", height: "3rem", fontWeight:"bold", color:"black"}}>{props.product.title}</p>
          <p style={{fontSize:"1.5rem", color:"black", textAlign:"left", fontWeight:"bold"}}>RM {props.product.price}</p>
        </div>
      </div>
    </Link>

  )
}


export default Item

