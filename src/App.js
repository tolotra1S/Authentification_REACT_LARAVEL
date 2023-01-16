import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/form';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Container id="main-container" className='d-grid h-100'>
      <Form id="sign-in-form" className='text-center w-100'>
        <h1 className="fs-3 fw-normal">please sign in</h1>
        <Form.Group>

        <Form.Control type='email' size='lg' placeholder='Email Adress' autoComplete='username'/>

        </Form.Group>
      </Form>


      </Container>
    </div>
  );
}

export default App;
