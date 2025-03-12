import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Men() {
  var [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:9000/getproducts/Men").then((response) => {
      setProducts(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <>
      <h1 className='text-center'>Men Fashion</h1>
      <div className='row justify-content-around'>
        {products.map((pr, index) => {
          return <ProductCard productid={pr.productid} image={pr.productimage} productname={pr.productname} description={pr.description} price={pr.price} />
        })}
      </div>
    </>
  )
}
