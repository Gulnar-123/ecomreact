import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Viewcart() {
    var [cartproducts, setCartproducts] = useState([])

    var em = localStorage.getItem("emailid")
    var sum = 0
    useEffect(() => {
        axios.get("http://localhost:9000/getcart/" + em).then((response) => {
            setCartproducts(response.data)

        })

    }, [])

    function confirm() {
        var ono = parseInt(Math.random() * 100000)
        cartproducts.map((pr) => {
            axios.post("http://localhost:9000/addorder", {
                emailid: em,
                productid: pr.productid,
                qty: pr.qty,
                amt: pr.amt,
                orderno: ono

            })
        })
        alert("order placed successfully")
        window.location = "/"
    }
    return (
        <div>
            <h1 className='text-center'>Products in Cart</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Product Image</th>  <th>Product Id</th><th>Product Name</th><th>Price</th><th>Quantity</th><th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {cartproducts.map((pr, index) => {
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
                        <td>{cartproducts.map(row => {
                            sum = sum + row.amt
                        })}
                            {sum}
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type='button' value='confirm order' className='btn btn-primary' onClick={confirm}></input>
        </div>
    )
}
