import React from 'react'
import { CartContext } from "../../context/CartContext"
import CartList from "../../components/CartItem/CartList"
import { Link } from "react-router-dom"
import { Container, Button } from "react-bootstrap";


export default function Cart() {
    const { cart, totalCart, deleteAll } = React.useContext(CartContext);


    return (
        <main className="bg-success bg-opacity-10">
            <Container className="py-5">
                <h1 className="text-center mb-5 fw-bolder">CARRITO</h1>
                {cart.length > 0 ?
                    <div>
                        <div className="d-flex flex-column align-items-center">
                            {cart.map((buy) => (<CartList buy={buy} key={buy.id} />))}
                        </div>
                        <div>
                            <h3 className="d-flex justify-content-center fw-bolder text-success mt-3">
                                Total: USD {totalCart()}
                            </h3>
                            <hr />
                        </div>
                        <div className="d-flex justify-content-around flex-wrap-reverse">
                            <Button variant="danger" onClick={() => (deleteAll())} className="m-3">Eliminar items</Button>
                            <Link to="/checkout">
                                <Button variant="success" className="m-3">Finalizar compra</Button>
                            </Link>
                            <Link to="/">
                                <Button variant="secondary" className="m-3">Ir a Productos</Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center flex-column align-items-center text-success">
                        <h5>No hay items agregados</h5>
                        <Link className="text-black m-5" to="/">
                            <Button variant="dark">Volver al inicio</Button>
                        </Link>
                    </div>
                }
            </Container>
        </main>
    )
}