const SlideItem = (props) => {
  return(
    <div style={{color:"lightblue", backgroundImage: `url(${props.background})`, backgroundSize: "cover", backgroundPosition: "center"}}class={`slide-item has-text-black  ${props.activeIndex===props.num? "active": ""}`}>
      <h1 style={{color:"lightyellow"}}className="is-size-2 has-text-weight-bold">{props.title}</h1>
      <p style={{color:"lightyellow"}} className="is-size-3">{props.content}</p>
    </div>
  )
}

export default SlideItem