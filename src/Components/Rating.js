import star from "../staroutline.png"

const Rating = () => {
  
  return(
    // <div className="rating-background" style={{width:"5rem", position:"relative"}}>
    //   <span style={{width:"5rem", height:"2rem", color:'yellow'}}></span>
    //   <div style={{position:"absolute", width:"5rem"}}>
    //   {[...Array(5)].map(rate =>{
    //     return <img style={{width:"1rem"}} src={star}/>

    //   })}
    //   </div>
    // </div>
    // <div style={{width:"1rem", height:"1rem", position:"relative"}}>
    //   <div style={{backgroundColor:"yellow", width:"1rem", height:"1rem", position:"absolute"}}></div>
    //   <img style={{width:"1rem"}} style={{position:"absolute"}} src={star}/>
    // </div>

    <div className="rating-background">
      <img style={{width:"1rem"}} src={star}/>
    </div>


  )
}

export default Rating