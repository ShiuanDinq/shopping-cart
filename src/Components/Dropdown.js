import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = (props) => {
  const [expand, setExpand] = useState(false)

  const handleExpand = () => {
    setExpand(prevState =>!prevState)
    console.log(expand)
  }
  return(
    <div class="drop" onClick={()=>{handleExpand()}}>
      <div class="drop-head is-size-5-desktop is-size-7-mobile">
        {props.quantity}
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div class={`drop-content ${expand? "active" : ""}`} onClick={()=>{handleExpand()}}>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={() => {props.action(1); handleExpand()}}>
          1
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(2); handleExpand()}}>
          2
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(3); handleExpand()}}>
          3
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(4); handleExpand()}}>
          4
        </div>
        <div class="drop-item is-size-5-desktop is-size-7-mobile" onClick={(event) => {props.action(5); handleExpand()}}>
          5
        </div>
      </div>
    </div>
  )
}

export default Dropdown