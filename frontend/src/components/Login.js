import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginDrawer } from '../redux/loginDrawerSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'
import { openCreateAccountDrawer } from '../redux/createAccountDrawerSlice';
import { useState } from 'react';


function Login() {

  const show = useSelector(state => state.persistedData.loginDrawerSlice.show)
  const dispatch = useDispatch();

  function close() {
    dispatch(closeLoginDrawer())
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

      <Offcanvas show={show} onHide={() => close()} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Login</Offcanvas.Title>


        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr></hr>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.formLabel}>Email address</Form.Label>
              <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={styles.formLabel}>Password</Form.Label>
              <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className={styles.loginButtonDiv}>

              <Button variant="primary">
                Login
              </Button>
            </div>
            <hr></hr>
            <div className={styles.loginButtonDiv}>
              <Button variant="link" onClick={() => dispatch(openCreateAccountDrawer())}>Create an account</Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Login;