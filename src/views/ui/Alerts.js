import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux';

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  if(!user){
  console.log('user is not logged in')
  navigate('/login')
  }
  else{
    console.log('user is logged in')
  }

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
     
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-4*/}
      {/* --------------------------------------------------------------------------------*/}
    
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
         Notifications 
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert
              color="primary"
              isOpen={visible}
              toggle={onDismiss.bind(null)}
              fade={false}
            >
              I am a primary alert and I can be dismissed without animating!
            </Alert>
            <UncontrolledAlert color="warning" fade={false}>
              I am an alert and I can be dismissed without animating!
            </UncontrolledAlert>
          </div>
        </CardBody>
      </Card>

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Alerts;
