import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginDrawer } from '../redux/loginDrawerSlice';

function Login() {

 
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  const show = useSelector(state => state.persistedData.loginDrawerSlice.show)
  const dispatch = useDispatch();

  function close(){
    dispatch(closeLoginDrawer())
  }

  return (
    <>
    {/* TODO : remove the button, should be triggered by Sign In Image */}
   {console.log(show)}
      <Offcanvas show={show} onHide={() => close()} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Login</Offcanvas.Title>
        
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Login;