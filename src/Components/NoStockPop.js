import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const ItemAddedPop = (props) => {
  return(
    <div className={`popup ${props.noStock? "active":""}`}>
      <FontAwesomeIcon icon={faTimesCircle} />
      <p>Insufficient stock</p>
    </div>
  )
}

export default ItemAddedPop