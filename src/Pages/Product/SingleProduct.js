import React from 'react'
import "../style/singleProduct.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";

export default function SingleProduct() {

    const { state } = useLocation()

    const navigate = useNavigate()

    const HandleCancel = (()=>{
        navigate(-1)
    })

  return (
    <div className='single-product'>
        <div className="single-product-container">
            <h3 className='cancel-icon' onClick={HandleCancel}> <IoCloseSharp /></h3>
            <div className="product-img-container">
                <div className="product-img">
                    <img src={state.image} alt="" />
                </div>
            </div>
            <div className="product-header-dec">
                <div className="name">
                    <h4>{state.name}</h4>
                </div>
                <div className="price">
                    <h4>{state.price}</h4>
                </div>
            </div>
            <div className="product-decription">
                <div className="product-decription-content">
                    <h4>Description</h4>
                    <p>
                        {state.des}
                    </p>
                </div>
                <div className="cart">
                    <div className="submit">
                        <button>Purchase Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
