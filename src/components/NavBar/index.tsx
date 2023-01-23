import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

import styles from './styles.module.scss';

import Log from '~assets/login.png';

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
            <div className={styles.log}>
                <img className={styles.img} src={Log} alt="imagen de perfil" />
                <div className={styles.text}>
                    <h6>Log out</h6>
                </div>
            </div>
        </Navbar>
    );
}

export default NavBar;
