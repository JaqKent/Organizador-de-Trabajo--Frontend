import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './styles.module.scss';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className={styles.container}>
                <Nav className="me-auto">
                    <Nav.Link href="#Work Orders">Work Orders</Nav.Link>
                    <Nav.Link href="#Incidencias">Incidencias</Nav.Link>
                    <Nav.Link href="#Cronograma de Ventanas">
                        Cronograma de Ventanas
                    </Nav.Link>
                    <Nav.Link href="#Alarmas">Alarmas</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavBar;
