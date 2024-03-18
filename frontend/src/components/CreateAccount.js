import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { closeCreateAccountDrawer } from '../redux/createAccountDrawerSlice';
import styles from './CreateAccount.module.css'
import { useState } from 'react';


function CreateAccount() {

  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [dob,setDob] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password1,setPassword1] = useState("");


  const show = useSelector(state => state.persistedData.createAccountDrawerSlice.show)
  const dispatch = useDispatch();

  function close() {
    dispatch(closeCreateAccountDrawer())
  }

  return (
    <>
      <Offcanvas show={show} onHide={() => close()} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Account</Offcanvas.Title>


        </Offcanvas.Header>
        <Offcanvas.Body>
          <hr></hr>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label className={styles.formLabel}>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label className={styles.formLabel}>Surname</Form.Label>
              <Form.Control type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label className={styles.formLabel}>Date of Birth</Form.Label>
              <Form.Control type="text" placeholder="DD/MM/YYYY" value={dob} onChange={(e) => setDob(e.target.value)}/>
            </Form.Group>




            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.formLabel}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={styles.formLabel}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={styles.formLabel}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  value={password1} onChange={(e) => setPassword1(e.target.value) }/>
            </Form.Group>
            <div className={styles.loginButtonDiv}>
              {/* TODO: Login button functionality */}
              <Button variant="primary">
                Register
              </Button>
            </div>
            <hr></hr>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default CreateAccount;