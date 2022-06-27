import React, { useState } from "react"
import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { toast } from 'react-toastify';
import { Container, Col, Row, Carousel, Button } from "react-bootstrap";





export default function ItemDetail({ item }) {

    const { addToCart } = React.useContext(CartContext);
    const routeIMG = `../../`;
    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(false);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <Container className="containerItemDetail d-flex align-items-center">
            <Row xs={1} md={2}>
                <Col>
                    <Carousel className="mb-5" variant="dark">
                        <Carousel.Item interval={10000000000}>
                            <img
                                className="d-block w-100"
                                src={routeIMG + item.image}
                                alt="Img-I-Item"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={null}>
                            <img
                                className="d-block w-100"
                                src={routeIMG + item.image_2}
                                alt="Img-I-Item"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="d-flex align-items-center pb-5">
                    <Container className="d-flex flex-column containerDetail">
                        <h1 className="mt-2">{item.title}</h1>
                        <p>{item.detail}</p>
                        <h5>Price: USD {item.price}</h5>
                        <div className="d-flex justify-content-center">
                            {buy ?
                                <Button variant="success" className="text-color-black" >
                                    <Link to="/cart" onClick={() => {
                                    }}>Ir al carrito</Link>
                                </Button> :
                                <ItemCount onAdd={handleAdd} onRest={handleRest} counter={count} />}
                        </div>
                        <div className="text-center">
                            {buy ?
                                <Link to="/">
                                    <Button variant="dark" className="m-4">
                                        Seguir comprando
                                    </Button>
                                </Link>
                                :
                                <Button className="m-3" variant="dark" onClick={() => {
                                    setBuy(true)
                                    addToCart(item, count)
                                    toast.success(`Se agregaron ${count} unidades del producto ${item.title} al carrito`, {
                                        position: "top-center",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    })
                                }}>Agregar al carrito</Button>
                            }

                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

