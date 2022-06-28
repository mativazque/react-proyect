import Item from "../Item/Item"
import { Container, Row, } from "react-bootstrap";


export default function ItemList({ productos }) {


    return (
        <Container>
            <Row xs={2} md={3} lg={4} className="g-3 g-md-4 g-xl-5 justify-content-center">
                {productos.map((productos) => (
                    <Item productos={productos} key={productos.id} />
                )
                )}
            </Row>
        </Container>
    )
}
