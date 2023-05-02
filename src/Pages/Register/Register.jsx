import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted,setAccepted] =useState(false);
    const handleAccepted = event =>{
      setAccepted(event.target.checked)
    }

    const handleRegister =event=>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;

        console.log(email,name,photo,password);

        createUser(email,password)
        .then(result => {
          const createdUser = result.user;
          console.log(createdUser);
        })
        .catch(error =>{
          console.log(error);
        })

    }

    return (
        <Container className="w-50 mx-auto">
      <Form onSubmit={handleRegister}>
        <h2>Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Your Photo Url</Form.Label>
          <Form.Control type="text" name="photoUrl" placeholder="Your Photo Url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={handleAccepted}
          type="checkbox" 
          name='accept'
          label={<>Accepts <Link to='/terms'>Terms and conditions</Link></>} />
        </Form.Group>
        
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text>
            Already have an account?<Link to='/login'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
    );
};

export default Register;