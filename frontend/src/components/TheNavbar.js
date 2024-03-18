import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import styles from './TheNavbar.module.css'
import commonstyle from '../Common.module.css'
import { useSelector } from 'react-redux';
import Login from './Login';

function TheNavbar() {

    const path = useSelector(state => state.configSlice.path)
    const pathAutoAuction = path + "autoauction.png" 

    return (
       
            <div className={commonstyle.outerDiv}>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><img className={styles.logo} src={pathAutoAuction} alt='auto-auction' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className={styles.tab} href="#action1">Home</Nav.Link>
                                <Nav.Link className={styles.tab} href="#action3">Ending soon</Nav.Link>
                                <Nav.Link className={styles.tab} href="#action4">Sell your car</Nav.Link>


                            </Nav>

                            <div className={styles.signInDiv}>
                                <Container className={styles.signInContainer}>
                                    <Row className={styles.signInImage}>
                                        <BsPersonCircle />

                                    </Row>
                                    <Row className={styles.signInText}>
                                        Sign in
                                    </Row>
                                </Container>
                            </div>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Login key="end" placement="end" name="end" />
            </div>

    );
}

export default TheNavbar;