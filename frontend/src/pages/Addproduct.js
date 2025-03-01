import axios from 'axios'
import React, { useState } from 'react'

export default function Addproduct() {
    var [productname, setProductname] = useState('')
    var [productid, setProductid] = useState('')
    var [image, setImage] = useState({})
    var [price, setPrice] = useState('')
    var [description, setDescription] = useState('')
    var [type, setType] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        const fd = new FormData()
        fd.append("file", image)
        fd.append("productid", productid)
        fd.append("productname", productname)
        fd.append("price", price)
        fd.append("description", description)
        fd.append("type", type)
        axios.post('http://localhost:9000/addproduct', fd, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
            alert(response.data["message"])
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Add Product</h1>
            <form method='post' onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="mb-3">
                    <label htmlFor="con" className="form-label">Product Image</label>
                    <input type="file" className="form-control" id="con" aria-describedby="emailHelp"
                        onChange={(e) => setImage(e.target.files[0])} />


                </div>
                <div className="mb-3">
                    <label htmlFor="addr" className="form-label">Product ID</label>
                    <input type="text" className="form-control" id="addr"
                        aria-describedby="emailHelp" onChange={(e) => setProductid(e.target.value)}
                        value={productid} />

                </div>
                <div className="mb-3">
                    <label htmlFor="nm" className="form-label"> Product Name</label>
                    <input type="text" className="form-control" id="nm" aria-describedby="emailHelp"
                        onChange={(e) => setProductname(e.target.value)} value={productname} />

                </div>


                <div className="mb-3">
                    <label htmlFor="em" className="form-label">Price </label>
                    <input type="number" className="form-control" id="em" aria-describedby="emailHelp"
                        onChange={(e) => setPrice(e.target.value)} value={price} />

                </div>
                <div className="mb-3">
                    <label htmlFor="pw" className="form-label"> Product Description</label>
                    <input type="text" className="form-control" id="pw"
                        onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pw" className="form-label"> Product type</label>
                    <select className="form-control" id="pw"
                        onChange={(e) => setType(e.target.value)} value={type} >
                        <option>--select type--</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Kids</option>
                    </select>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
