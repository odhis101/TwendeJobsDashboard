import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

import { useSelector, useDispatch  } from 'react-redux';
import { getUsers} from '../../features/auth/authSlice'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGoals, reset } from '../../features/jobs/jobSclice'
import { deleteGoal } from '../../features/jobs/jobSclice'
import axios from 'axios';
const Jobs = () => {
  const API_URL = process.env.REACT_APP_API_URL
  var xlsx = require("xlsx")
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files);
  };


  const deleteUser = (id) => {
    console.log('delete user')
    dispatch(deleteGoal(id))
    //window.location.reload();

  }
  
    const navigate = useNavigate()
    const Navigate = (id) => {
      console.log('clicked')
      console.log(id)
      navigate(`/updateJob/${id}`)
    }
    function handleAddJob() {
      // Your logic to handle the "Add Job" button click event
      // For example, you can navigate to a new page or perform any other action
      navigate('/addjob');
    }
    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.jobs
    )
    if(!user){
      console.log('user is not logged in')
      navigate('/login')
      }
      else{
        console.log('user is logged in')
      }
    useEffect(() => {

      if (isError) {
        console.log('there was an error while loading', message)
      }
  
  
      dispatch(getGoals())
  
     
    }, [user, navigate, isError, message, dispatch])
  
    console.log(goals)
    const readUploadFile = (e) => {
      console.log(e.target.files)
      console.log('here is selected file ',selectedFile)
      e.preventDefault();
      if (e.target.files) {
          const reader = new FileReader();
          reader.onload = (e) => {
              const data = e.target.result;
              const workbook = xlsx.read(data, { type: "array" });
              const sheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[sheetName];
              const json = xlsx.utils.sheet_to_json(worksheet);
              console.log(json);
          };
          reader.readAsArrayBuffer(e.target.files[0]);
      }
  }
  const handleSubmit=(e) => {
    e.preventDefault();
    console.log(selectedFile)
    if (selectedFile === null) {
      alert('Please select a file to upload')
      return
    }
    else{
      // convert excel to json
      console.log("we are here ")
      const reader = new FileReader();
      reader.onload = (e) => {
          const data = e.target.result;
          const workbook = xlsx.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const json = xlsx.utils.sheet_to_json(worksheet);
          console.log(json);
          axios.post(`http://localhost:5000/jobs/excelToMongoDb`, json, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            console.log(res)
            window.location.reload();
          }).catch(err => {
            console.log(err)
          })
         
      };
  
      reader.readAsArrayBuffer(selectedFile[0]);

     
    }
  }
   
    return (
    <Row>
        <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            List of Posted Jobs 
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category </th>
                  <th>Description</th>
                  <th>Posted By</th>
                  <th>Employer Contact</th>
                  <th>Update</th>
                  <th>Remove</th>
                
                </tr>
              </thead>
              <tbody>
              
              {
              goals === undefined ? <p>loading</p> :      
              goals.map((goal, index) => (
                <tr key={index} className="border-top">
                  <th scope="row">{index + 1}</th>
                  <td>{goal.Category}</td>
                  <td>{goal.jobDescription}</td>
                  <td>{goal.user}</td>
                  <td>{goal.Employers_contact}</td>
                 
                  <td> <button type="button" class="btn btn-success " onClick={()=>Navigate(goal._id)}>update</button></td>
                  <td> <button class="btn btn-danger" onClick={()=>deleteUser(goal._id)}>
        Delete 
      </button>
      </td>
 
               
                </tr>
              ))}
            </tbody>
            
            </Table>
          </CardBody>
          <form onSubmit={handleSubmit}>
            <input name = "excel" type= "file" onChange={handleFileSelect} />
           <br/>
           <button type="submit" className="btn btn-success">Upload</button>
          </form>
          <br/>
          <button type="button" class="btn btn-primary"  onClick={handleAddJob}>Add Job</button>

        </Card>
      </Col>
    </Row>
  );
};

export default Jobs;
