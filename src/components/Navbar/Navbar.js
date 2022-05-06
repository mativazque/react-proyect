import { Nav, Navbar, Container,} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar({category1, category2, category3, category4}) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Game Over</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">{category1}</Nav.Link>
                    <Nav.Link href="#pricing">{category2}</Nav.Link>
                    <Nav.Link href="#pricing">{category3}</Nav.Link>
                    <Nav.Link href="#pricing">{category4}</Nav.Link>
                    <Nav.Link>
                        <CartWidget/>
                    </Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}
