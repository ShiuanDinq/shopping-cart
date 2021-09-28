
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {

  return(
    <div class="drop">
      <div class="drop-head is-size-5-desktop is-size-7-mobile">
        {props.quantity}
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div class="drop-content">
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(1); event.target.blur()}}>
          1
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(2); event.target.blur()}}>
          2
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(3); event.target.blur()}}>
          3
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(4); event.target.blur()}}>
          4
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(5); event.target.blur()}}>
          5
        </div>
      </div>
    </div>
  )
}

export default Dropdown