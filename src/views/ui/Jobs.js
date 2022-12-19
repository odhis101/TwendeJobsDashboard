import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

import { useSelector, useDispatch  } from 'react-redux';
import { getUsers} from '../../features/auth/authSlice'

import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getGoals, reset } from '../../features/jobs/jobSclice'

const tableData = [
  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },
  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },
];
const Jobs = () => {
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
                 
                  <td> <button type="button" class="btn btn-success disabled">update</button></td>
                  <td> <button type="button" class="btn btn-danger disabled" data-toggle="modal" data-target="#exampleModal">
Delete
</button></td>
               
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
