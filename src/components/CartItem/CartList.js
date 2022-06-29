import React from 'react'
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function CartItem({ buy }) {
    const { removeFromCart } = React.useContext(CartContext);

    return (
        <div className="d-flex w-100 p-2 mb-4 align-items-center containerItemCart bg-white">
            <img src={buy.image} alt="img" className="imgCart" />
            <div className="d-flex justify-content-between align-items-center w-100 flex-wrap flex-direction-row align-content-center">
                <h5 className="p-2 fw-bolder m-0 rounded-4">{buy.title}</h5>
                <h5 className="p-2 m-0 text-success fw-bolder">Cantidad: {buy.quantity}</h5>
                <h5 className="fw-bolder p-2 m-0">USD {buy.price * buy.quantity}</h5>
                <FontAwesomeIcon icon={faTrashCan} size="lg" onClick={() => removeFromCart(buy.id)} className="p-2"/>
            </div>
        </div>
    )
}