import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Item({ productos }) {
    const routeIMG = `../`;
    const routeId = `/product/`

    return (
        <Col>
            <Card className="pt-3">
                <Card.Img variant="top" src={routeIMG + productos.image} />
                <Card.Body className="text-center">
                    <h5 className="fw-bolder">USD {productos.price}</h5>
                    <Card.Title>{productos.title}</Card.Title>
                    <div>
                        <Link to={routeId + productos.id}>
                            <Button variant="success" className="mt-2">Ver detalle</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

