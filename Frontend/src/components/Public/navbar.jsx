import { Image, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAction } from "../../store/slices/loginSlice";

function NavbarCom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   
  function Logout() {
    console.log("clciked");
    localStorage.removeItem("token");
    dispatch(logoutAction())
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginRight: 30 }}>
            <Image
              style={{ marginRight: 10 }}
              src="src/images/my brand.png"
              width="50"
              height="45"
              alt="user profile"
            />
            FilmExplorer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/MyFavoriteMovies">Favorite</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="logout-Button">
              <Nav.Link as={NavLink} to="/" onClick={Logout}>
              Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;
