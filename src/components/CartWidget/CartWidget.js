import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import React from 'react'

export default function CartWidget () {
    const {cart} = React.useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
                <i className="fas fa-shopping-cart fa-lg text-white"></i>
            </Link>
            {cart.length > 0 && 
            <spam className="spamCart">{cart.reduce((acumulator, item) => acumulator + item.quantity, 0)}</spam>}
        </div>
    )
}
