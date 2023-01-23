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


const Jobs = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = (id) => {
    dispatch(deleteGoal(id))
    window.location.reload();

  }
    const navigate = useNavigate()
    const Navigate = (id) => {
      console.log('clicked')
      console.log(id)
      navigate(`/updateJob/${id}`)
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
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure you want to delete ? {goal.Category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are unable to retrieve deleted items </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
                Delete
          </Button>
        </Modal.Footer>
      </Modal>
               
                </tr>
              ))}
            </tbody>
            
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Jobs;
