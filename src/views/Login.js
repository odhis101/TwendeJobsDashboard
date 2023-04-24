 

import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import { useSelector, useDispatch  } from 'react-redux';
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { loginAdmin, reset } from '../features/auth/authSlice'
import './login.css'



const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  console.log(user)
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  })
  const { phoneNumber, password } = formData
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isError) {
      //toast.error('check password or phone number')
    console.log('check password or phone number')
    setShowError(true);
    }

    if (user != null) {
     navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault()

    if(!phoneNumber || !password){
      setShowError(true);
      return;
    }
    
    try {
      await dispatch(loginAdmin(formData));
    } catch (err) {
      setShowError(true);
    }
  }

    
   
    console.log(showError )

  

  return (
    <div>
      {showError && (
        <div className="alert alert-danger" role="alert">
          Phone number or password is incorrect.
        </div>
      )}
        <form  onSubmit={onSubmit}>
         <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>


    <div className="d-flex flex-row align-items-center justify-content-center">
    {isError && (
  <div className="text-danger mt-3">{'check password or phone number'}</div>
)}
      <p className="lead fw-normal mb-0 me-3">Login To admin </p>

      
    </div>

    

    <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type="text" placeholder="Enter Phone Number" size="lg"onChange={onChange} value={phoneNumber} name ='phoneNumber' />
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={onChange} value={password} name='password' placeholder="Enter Password" />


    <div className='text-center text-md-start mt-4 pt-2'>
    <button class="btn btn-lg btn-orange">Login</button>
    
    </div>
    <Link to="/forgotPassword" className="text-decoration-none text-reset"  style={{marginTop: '20px'}}> forgot password</Link>

  </MDBCol>

</MDBRow>


</MDBContainer>
</form>



    </div>
  );
};

export default Login;
