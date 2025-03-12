import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Women() {
    var [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9000/getproducts/Women").then((response) => {
            setProducts(response.data)
            console.log(response.data)
        })
    }, [])
    return (
        <>
            <h1 className='text-center'>Women's Fashion</h1>
            <div className='row justify-content-around'>
                {products.map((pr, index) => {
                    return <ProductCard productid={pr.productid} image={pr.productimage} productname={pr.productname} description={pr.description} price={pr.price} />
                })}
            </div>
        </>
    )
}
