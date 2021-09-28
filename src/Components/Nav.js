import { Link} from 'react-router-dom'
import React from 'react';
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMeteor} from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log(nav)
  }

  return (
    <nav class="navbar card" role="navigation" aria-label="main navigation" style={{backgroundColor:"cornflowerblue" ,position:"fixed", width:"100%", height:"5rem"}}>
  <div class="navbar-brand">
    <Link to={'/'}>
      <div class="navbar-item fade " style={{display:"flex", flexDirection:"column", position:"relative"}}>
        <header class="is-size-2 has-text-weight-bold" style={{color:"cyan"}}>Impact<FontAwesomeIcon icon={faMeteor}/></header>
        <p style={{fontSize:"0.8rem", fontWeight:"bold", color:"white", position:"absolute", bottom: 0}}>fashion concept store</p>
      </div>
    </Link>

    <a role="button" class={`navbar-burger ${nav? "is-active has-background-danger": ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onMouseOver ={handleNav}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class={`navbar-menu ${nav? "is-active": ""}`}>
    <div class="navbar-start">
      <a class="navbar-item">
        <Link style={{width:"100%", height:"100%", display:'flex', alignItems:"center"}} to={'/'} onClick={(event) => {handleNav(); event.target.blur()}}>
          Home
        </Link>
      </a>
      <a class="navbar-item">
        <Link style={{width:"100%", height:"100%", display:'flex', alignItems:"center"}} to={'/products'} onClick={(event) => {handleNav(); event.target.blur()}}>
          Products
        </Link>
      </a>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Categories
        </a>

        <div class="navbar-dropdown">
          <a href="/category/men's clothing" class="navbar-item">
            <Link to={`/category/men's clothing`} onClick={(event) => {handleNav(); event.target.blur()}}>
              Men's clothing
            </Link> 
          </a>
          <a href="/category/women's clothing" class="navbar-item">
            <Link to={`/category/women's clothing`} onClick={(event) => {handleNav(); event.target.blur()}}>
              Women's clothing
            </Link> 
          </a>
          <a href="/category/jewelery" class="navbar-item">
            <Link to={`/category/jewelery`} onClick={(event) => {handleNav(); event.target.blur()}}> 
              Jewelery
            </Link> 
          </a>
          <a class="navbar-item">
            <Link to={`/category/electronics`} onClick={(event) => {handleNav(); event.target.blur()}}>
              Electronics
            </Link> 
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
          <a class="button" style={{backgroundColor:"lightblue"}}>
          <Link to={`/checkout`} onClick={(event) => {handleNav(); event.target.blur()}}>
            <div class="navbar-item" >
            <FontAwesomeIcon icon={faCartPlus}/>
            </div>
          </Link>
          </a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav;