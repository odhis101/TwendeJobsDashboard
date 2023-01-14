import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import { useSelector, useDispatch  } from 'react-redux';
import { getGoals, reset } from '../features/jobs/jobSclice'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
        (state) => state.jobs
      )
      useEffect(() => {

        if (isError) {
          console.log('there was an error while loading', message)
        }
    
    
        dispatch(getGoals())
    
       
      }, [user, navigate, isError, message, dispatch])
  

  return (
    <div>
         <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">Login To admin </p>

      
    </div>

    

    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/alerts"  href="#!" className="link-danger">Register</Link></p>
    </div>

  </MDBCol>

</MDBRow>


</MDBContainer>
   

    </div>
  );
};

export default Login;
