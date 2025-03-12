
import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function OrderHistory() {
    var [cartproducts, setCartproducts] = useState([])

    var em = localStorage.getItem("emailid")
    var sum = 0
    useEffect(() => {
        axios.get("http://localhost:9000/getorder/" + em).then((response) => {
            setCartproducts(response.data)

        })

    }, [])


    return (
        <div>
            <h1 className='text-center'>Your Orders</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Order No</th>   <th>Product Image</th>  <th>Product Id</th><th>Product Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cartproducts.map((pr, index) => {
                        return <tr key={index}>
                            <td>{pr.orderno}</td>
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
                        <td>{cartproducts.map(row => {
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
