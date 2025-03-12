import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Productdetails() {
    var params = useParams()
    var [selproduct, setSelproduct] = useState({})
    var pid = params.id
    var [amt, setAmt] = useState(0)
    var [qty, setQty] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:9000/searchproduct/" + pid).then((response) => {
            setSelproduct(response.data)
        })
    }, [])
    function addtocart() {
        axios.post("http://localhost:9000/addcart", {
            emailid: localStorage.getItem("emailid"),
            productid: pid,
            qty: qty,
            amt: amt
        }).then((response) => {
            alert(response.data["message"])
        })
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1 className='text-center'>Product Details for Product Id {pid}</h1>
                <div className="card mb-3" style={{ width: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={"http://localhost:9000/" + selproduct.productimage} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{selproduct.title}</h5>
                                <p className="card-text">{selproduct.description}</p>
                                <h3>Price: &#8377;{selproduct.price} </h3>
                                Quantity: <input min="0" type='number' onChange={(e) => { setQty(e.target.value); setAmt(e.target.value * selproduct.price) }}></input><br></br>
                                <br></br>
                                <h3> Amount: &#8377; {amt}</h3>
                                {qty != 0 && <a href='#' onClick={() => { addtocart() }} className='btn btn-success col-md-8'>Add to Cart</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
