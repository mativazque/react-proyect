import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Item({ productos }) {
    const routeIMG = `../`;
    const routeId = `/product/`

    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={routeIMG + productos.image} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Title>USD {productos.price}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">
                    <Link to={routeId + productos.id}>Ver producto</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

