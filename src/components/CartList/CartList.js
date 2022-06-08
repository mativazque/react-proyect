import React from 'react'
import { CartContext } from "../../context/CartContext"

export default function CartList({ buy }) {
    const { addToCart, removeFromCart, isInCart, deleteAll} = React.useContext(CartContext);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={buy.image} alt="img" className="me-3 imgCart"/>
                        <div className="d-flex flex-column text-white">
                            <h6>{buy.title}</h6>
                            <h6 className="fw-bolder">USD {buy.price * buy.quantity}</h6>
                            <div className="d-flex">
                                <i className="fa-solid fa-circle-minus fa-lg me-2 text-danger" ></i>
                                <spam>{buy.quantity}</spam>
                                <i className="fa-solid fa-circle-plus fa-lg ms-2 text-success"></i>
                            </div>
                        </div>
                </div>
                <button onClick={() => removeFromCart(buy.id)}>
                    <i className="fa-solid fa-trash-can fa-lg text-white ms-2" type="button"></i>
                </button>
            </div>
            <hr className="text-white"></hr>
        </div>
    )
}