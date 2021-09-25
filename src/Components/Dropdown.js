
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {

  return(
    <div class="drop">
      <div class="drop-head">
        {props.quantity}
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div class="drop-content">
        <div class="drop-item" onClick={() => {props.action(1)}}>
          1
        </div>
        <div class="drop-item" onClick={() => {props.action(2)}}>
          2
        </div>
        <div class="drop-item" onClick={() => {props.action(3)}}>
          3
        </div>
        <div class="drop-item" onClick={() => {props.action(4)}}>
          4
        </div>
        <div class="drop-item" onClick={() => {props.action(5)}}>
          5
        </div>
      </div>
    </div>
  )
}

export default Dropdown