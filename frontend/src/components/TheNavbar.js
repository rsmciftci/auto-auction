import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import styles from './TheNavbar.module.css'
import commonstyle from '../Common.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { openLoginDrawer } from '../redux/loginDrawerSlice';
import CreateAccount from './CreateAccount';
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';
import { initializeUser } from '../redux/userSlice';
import { FRONTEND_URL } from '../config';

function TheNavbar() {

    const path = FRONTEND_URL;
    const user = useSelector(state => state.persistedData.userSlice)
    const pathAutoAuction = path + "autoauction.png"
    const dispatch = useDispatch();

    function openDrawer() {
        dispatch(openLoginDrawer())
    }

    return (

        <div className={commonstyle.outerDiv}>
            {console.log(user)}
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
                            <Nav.Link className={styles.tab} href={path}>Home</Nav.Link>
                            <Nav.Link className={styles.tab} href={path + "ending-soon/1"}>Ending soon</Nav.Link>
                            <Nav.Link className={styles.tab} href={path + "sell-your-car"}>Sell your car</Nav.Link>




                            {!user.ID ?

                                ""

                                :
                                <><Nav.Link className={styles.tab} href={path + "my-auctions/1"}>My Auctions</Nav.Link><Nav.Link className={styles.tab} href={path + "favourites"}>Favourites</Nav.Link></>
                            }


                        </Nav>

                        {!user.ID ?

                            <div className={styles.signInDiv} onClick={() => openDrawer()} >
                                <Container className={styles.signInContainer}>
                                    <Row className={styles.signInImage}>
                                        <BsPersonCircle />

                                    </Row>
                                    <Row className={styles.signInText}>
                                        Sign in
                                    </Row>
                                </Container>
                            </div>

                            :
                            <Button onClick={() => dispatch(initializeUser())} >Log Out</Button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login />
            <CreateAccount />
            <ToastContainer />
        </div>

    );
}

export default TheNavbar;