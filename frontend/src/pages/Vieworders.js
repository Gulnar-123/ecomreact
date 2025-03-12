import axios from 'axios'

import React, { useEffect, useState } from 'react'

export default function Vieworders() {
  var [ordernos, setOrdernos] = useState([])
  var [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9000/getono").then((response) => {
      setOrdernos(response.data)
    })
  }, [])
  function showdetails(ono) {
    axios.get("http://localhost:9000/getorderdetails/" + ono).then(respo => {
      setProducts(respo.data)
      console.log(respo.data)
    })
  }
  var sum = 0
  return (
    <div>
      <h2>Orders Are</h2>
      {
        ordernos.map((ono, index) => {
          return <div key={index} style={{ padding: '20px' }}> <a href="#" onClick={() => { showdetails(ono) }}> {ono}</a></div>
        })
      }
      <h1 className='text-center'>Products in Cart</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Product Image</th><th>Product Id</th><th>Product Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pr, index) => {
            return <tr key={index}>
              <td><img width="50px" height="50px" src={"http://localhost:9000/" + pr.productimage}></img></td>
              <td>{pr.productid}</td>
              <td>{pr.productname}</td>
              <td>{pr.price}</td>
              <td>{pr.qty}</td>
              <td>{pr.amt}</td>

            </tr>

          })}
          <tr>
            <td colSpan={5} align='right'>Total Amount</td>
            <td>{products.map(row => {
              sum = sum + row.amt
            })}
              {sum}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
