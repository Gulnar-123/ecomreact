import React from 'react'

export default function ProductCard(props) {
    var em = localStorage.getItem("emailid")
    function showDetails(pid) {
        window.location = "/productdetails/" + pid
    }
    return (

        <div className="card" style={{ width: '18rem' }}>
            <img src={"http://localhost:9000/" + props.image} className="card-img-top" alt="..." style={{ height: '27rem' }} />
            <div className="card-body">
                <h5 className="card-title">{props.productname}</h5>
                <p className="card-text">
                    {props.description}
                    <br></br>
                    Price: 	&#8377; {props.price}
                </p>
                {em != null && <a href="#" onClick={() => { showDetails(props.productid) }} className="btn btn-primary">Add To Cart</a>}
            </div>
        </div>

    )
}
