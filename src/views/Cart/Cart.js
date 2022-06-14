import React from 'react'
import { CartContext } from "../../context/CartContext"
import CartList from "../../components/CartList/CartList"
import { Link } from "react-router-dom"


export default function Cart() {
    const { cart, totalCart, deleteAll } = React.useContext(CartContext);


    return (
        <>
            <h1>Cart</h1>
            {cart.length > 0 ?
                <div>
                    {cart.map((buy) => (<CartList buy={buy} key={buy.id} />))}
                    <h3>
                        Precio Total:   USD {totalCart()}
                    </h3>
                    <button onClick={() => (deleteAll())}>Eliminar todos los items</button>
                    <Link to="/checkout">
                        <button>Finalizar compra</button>
                    </Link>
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