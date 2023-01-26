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

//import { toast } from 'react-toastify'
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

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
  
  useEffect(() => {
    if (isError) {
      //toast.error('check password or phone number')
    console.log('check password or phone number')
    }

    if (isSuccess || user) {
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
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      phoneNumber,
      password,
    }
    if(!phoneNumber || !password){
      //toast.erro('Please fill in all fields')
      console.log('Please fill in all fields')
    }
    // this code doesn't work as intended work on it
 
    else{
      try{
        //console.log(userData)
        dispatch(loginAdmin(userData))
        //console.log('login success')
        
       
      }
      catch(err){
        console.log(err)
        // toast message here 
       // notify()

      }

    
   
    }}

  

  return (
    <div>
        <form  onSubmit={onSubmit}>
         <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>


    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3">Login To admin </p>

      
    </div>

    

    <MDBInput wrapperClass='mb-4' label='Phone Number' id='formControlLg' type="text" placeholder="254703757369" size="lg"onChange={onChange} value={phoneNumber} name ='phoneNumber' />
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={onChange} value={password} name='password' />


    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn  size='lg'>Login</MDBBtn>
         </div>

  </MDBCol>

</MDBRow>


</MDBContainer>
</form>



    </div>
  );
};

export default Login;
