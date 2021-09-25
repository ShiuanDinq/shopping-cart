import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ItemAddedPop = (props) => {
  return(
    <div className={`popup ${props.addCart? "active":""} ${props.pressed?"pressed":""}`}>
      <FontAwesomeIcon icon={faCheckCircle} />
      <p>Added to cart</p>
    </div>
  )
}

export default ItemAddedPop