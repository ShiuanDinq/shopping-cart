import React from "react"
import { Link } from 'react-router-dom'
const Item = (props) => {
  
  return(
    <Link to={`/products/${props.product.id}`}> 
      <div className="product-card-container">
        <div id={props.product.id} className="card product-card">
          <div className="product-card-image" >
            <img key={props.product.id} src={props.product.image} /> 
          </div>

          <div className="product-card-content" >
            <div>
              <p className="product-card-title" >{props.product.title}</p>
              <p className="product-card-category">{props.product.category}</p>
            </div>

            <div>
              <p className="product-card-price">RM {props.product.price}</p>
            </div>
          </div>
        </div>
        <div className="moreinfo">More Info</div>
      </div>    
    </Link>
  )
}


export default Item

