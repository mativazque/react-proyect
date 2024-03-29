import { Nav, Navbar, Container, } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container className="text-white">
                <Navbar.Brand>
                    <Link to="/" >Gamer Over</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/1">
                                Mouses
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/4">
                                Teclados
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/3">
                                Auriculares
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/2">
                                Camaras Web
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/category/5">
                                Sillas
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}
