/* The following line can be included in a src/App.scss */
// @import '~bootstrap/scss/bootstrap';
/* The following line can be included in your src/index.js or App.js file */
// import './App.scss';

import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

function BasicExample() {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const collectData=()=>{
        console.warn(name, email, password);
    }
  return (
    <div className='formStyle'>

      <Form>
        <br /><br /><h2>Registration Form</h2><br /><br />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
        <Form.Text className="text-muted">
          Please enter the full name.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='SubmitCss' onClick={collectData} variant="primary" type="button">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;