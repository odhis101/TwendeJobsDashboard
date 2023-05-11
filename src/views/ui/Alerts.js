import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useNavigate } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom'



const Alerts = () => {
  // For Dismiss Button with Alert
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const id = useParams().id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/updateNumber/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        setPhoneNumber('');
        navigate('/table');
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
     
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-4*/}
      {/* --------------------------------------------------------------------------------*/}
    
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
        Update Phone Number 
        </CardTitle>
        <CardBody className="">
        <Form  onSubmit ={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Phone Number</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  value = {phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="with a placeholder"
                
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
              
        
        </CardBody>
      </Card>

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Alerts;
