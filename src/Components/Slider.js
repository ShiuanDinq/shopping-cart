import { useState , useEffect } from 'react'
import SlideItem from './SlideItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import SlideDetails from './SlideDetails'

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const length = 3

  const goToPrevSlide = () => {
    if(activeIndex<1){
      setActiveIndex(length-1)
    }else{
      setActiveIndex(prevState => 
        prevState -1
      )
    }
  }

  const goToNextSlide = () => {
    if(activeIndex>=length-1){
      setActiveIndex(0)
    }else{
      setActiveIndex(prevState => 
        prevState +1
      )
    }
  }

  useEffect(() => {
    const timer = () => setTimeout(() => {
      console.log('This will run after 1 second!')
      timer()
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  var slide = SlideDetails.map((detail, index) => 
    <SlideItem num={index} activeIndex={activeIndex} title={detail.title} content={detail.content} background={detail.background}/>
  
  )

  var slideButtons = SlideDetails.map((detail, index) =>
    <span class={`dot ${activeIndex===index? "active": ""}`} onClick={() => setActiveIndex(index)} />
  )

  useEffect(() => {
    const timeout = setTimeout(
       goToNextSlide
     , 5000);
 
    return () => clearTimeout(timeout);
   },[activeIndex]);


  return(
    <div style={{position:"relative"}} class="slide-container ">

      <div className="slide-content" style={{position:"absolute"}}>
        {slide}
      </div>
      <FontAwesomeIcon icon={faAngleLeft} onClick={goToPrevSlide}/>
      <FontAwesomeIcon icon={faAngleRight} onClick={goToNextSlide}/>
      <div className="slideButtonsContainer">
      {slideButtons}
      </div>

    </div>
  )
}

export default Slider