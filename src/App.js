import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import Products from "./Components/Products"
import Product from "./Components/Product"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import ProductCategories from "./Components/ProductCategories"
import Stock from "./Components/Stock"
import './css/reset.css'
import 'bulma/css/bulma.min.css';
import './css/styles.css'
import './css/slider.css'
import './css/dropdown.css'
import './css/product-detail.css'
import { useState , useEffect } from 'react'
import Checkout from "./Components/Checkout"

const App = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState([]) 
  const [stock, setStock] = useState(Stock)


  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
    const productDatas = await data.json()
    setProducts(productDatas) 
    setIsLoading(false)
  }

  useEffect(() => {
    console.log('fecthing dada')
    fetchProducts()
  }, [])



  const getStock = (id) => {
    return(stock.filter(item => item.id == id)[0].stock)
  }

  const getTotal = (id) => {
    return(stock.filter(item => item.id == id)[0].total)
  }




  return(
    <div style={{minHeight:"100vh", backgroundColor:"lightblue"}} className="App">
      <BrowserRouter>
        <Nav />
          <Switch>
            <Route exact path="/products">
              <Products products={products} />
            </Route>
            <Route exact path="/category/:category">
              <ProductCategories products={products} />
            </Route>
            <Route exact path="/products/:id">
              <Product setStock={setStock} products={products} stock={stock} getStock={getStock} cart={cart} setCart={setCart}/>
            </Route>
            <Route exact path="/checkout">
              <Checkout cart={cart} setCart={setCart} stock={stock} setStock={setStock} products={products} getStock={getStock} getTotal={getTotal}/>
            </Route>
            <Route path="/">
              <Home products={products}/>
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App