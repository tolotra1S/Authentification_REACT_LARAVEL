import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function signin() {
  return (
    <div>
        <Container id="main-container" className='d-grid h-100'>
      <Form id="sign-in-form" className='text-center w-100'>
        <h1 className="fs-3 fw-normal">please sign in</h1>
      
        <Form.Group>
        <Form.Control type='email' size='lg' placeholder='Email Adress' autoComplete='username'/>
        </Form.Group>
        <Form.Group>
        <Form.Control type='password' size='lg' placeholder='password' autoComplete='password'/>
        </Form.Group>
        <Form.Group>
        <Form.Check className='d-flex justify-content-center' label="Remember me"/>
        </Form.Group>
        <div className='d-grid'>
        <Button>Sign in</Button>
        </div>
        </Form>
      </Container>
    </div>
  )
}

export default signin