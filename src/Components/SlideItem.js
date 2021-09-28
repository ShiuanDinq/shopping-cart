const SlideItem = (props) => {
  return(
    <div style={{color:"lightblue", backgroundImage: `url(${props.background})`, backgroundSize: "cover", backgroundPosition: "center"}}class={`slide-item has-text-black  ${props.activeIndex===props.num? "active": ""}`}>
      
      <div style={{display:"flex", flexDirection:"column"}}>
      <h1 style={{color:"cyan"}} className="is-size-1-desktop is-size-4-mobile has-text-weight-bold">{props.title}</h1>
      <p style={{color:"cyan"}}className="is-size-2-desktop is-size-5-mobile">{props.content}</p>
      </div>
    </div>
  )
}

export default SlideItem