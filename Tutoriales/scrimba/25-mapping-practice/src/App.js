/*

    I N S T R U C T I O N S
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from 'react'
import Product from './components/Product'
import productsData from "./components/productsData"

function App (){
  let productsBundle = productsData.map ((product)=>
    <Product
      key="product.id"
      num="product.id"
      name="product.product"
      price="product.price"
      existance="product.existance"
    />)
  return(
    <div>
      {productsBundle}
    </div>
  )
}
export default App