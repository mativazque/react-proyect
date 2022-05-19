import { Nav, Navbar, Container, } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Gamer Over</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/category/1">
                            Mouse
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
                    <Nav.Link>
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
