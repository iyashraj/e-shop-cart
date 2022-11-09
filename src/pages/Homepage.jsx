import React from 'react'
import CartCountButton from '../components/cartCountButton/CartCountButton'
import Products from './Products'

const Homepage = () => {
  return (
    <div style={{textAlign: "center", width: "90v%"}}>
        <Products />
        <CartCountButton />
    </div>
  )
}

export default Homepage