import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"



export default function CartWidget() {
    const { cart } = React.useContext(CartContext);

    return (
        <div className="d-flex">
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} size="lg"/>
                {cart.length > 0 &&
                    <spam className="spamCart p-1 ps-2 pe-2 ms-1">{cart.reduce((acumulator, item) => acumulator + item.quantity, 0)}</spam>}
            </Link>
        </div>
    )
}
