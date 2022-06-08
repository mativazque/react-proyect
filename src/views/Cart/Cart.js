import React from 'react'
import { CartContext } from "../../context/CartContext"
import CartList from "../../components/CartList/CartList"
import { Link, NavLink } from "react-router-dom"


export default function Cart() {
    const { cart } = React.useContext(CartContext);


    return (
        <>
            <h1>Cart</h1>
            {cart.length > 0 ?
                <div>
                    {cart.map((buy) => (<CartList buy={buy} key={buy.id} />))}
                    <h3>
                       Precio Total:   USD {cart.reduce((acumulator, buy) => acumulator + buy.price * buy.quantity, 0)}
                    </h3>
                </div>
                :
                <div>
                    <h5>No hay items agregados</h5>
                    <Link to="/">Volver al inicio</Link>
                </div>
            }
        </>
    )
}