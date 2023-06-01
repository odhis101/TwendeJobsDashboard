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
  
} from "reactstrap";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOneGoal,reset } from '../../features/jobs/jobSclice'
import { useState } from "react";
import { useEffect } from 'react';
import { updateGoal } from "../../features/jobs/jobSclice";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const JobsOfTheDay = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)



  
  const [postData, setPostData] = useState({ Salary:"",Requirment:"",Employers_contact:"",Employers_Name :"", jobDescription:"", EMPLOYER_EMAIL:"",Employers_contact: "", jobTitle:"", DeadlineDate: "",Category:"",Location:""});
console.log('post data',postData)

const handleSubmit=(e) => {
  e.preventDefault();
  
  console.log('1234')
  console.log(postData)
  // update the goal 
  axios.post(`${API_URL}/jobs/setJobsOfTheDay`,postData)
 // axios.post(`http://localhost:5000/jobs/setJobsOfTheDay`,postData)
  // go back to the previous page 
 // navigate(-1)
//dispatch(updateGoal(id,postData))
alert('Job updated Successfully')
navigate('/')
}
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Job Of The Day
          </CardTitle>
          <CardBody>
            <Form  onSubmit ={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Employers_Name</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  value = {postData.Employers_Name} 
                  onChange ={(e) => setPostData({...postData,Employers_Name: e.target.value})}
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Employers Contact</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  value = {postData.Employers_contact} 
                  onChange ={(e) => setPostData({...postData,Employers_contact: e.target.value})}
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Location </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                
                  value = {postData.Location} 
                  onChange ={(e) => setPostData({...postData,Location: e.target.value})}
              
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Job Category </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                
                  value = {postData.Category} 
                  onChange ={(e) => setPostData({...postData,Category: e.target.value})}
              
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Requriment </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                
                  value = {postData.Requirment} 
                  onChange ={(e) => setPostData({...postData,Requirment: e.target.value})}
              
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Salary </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                
                  value = {postData.Salary} 
                  onChange ={(e) => setPostData({...postData,Salary: e.target.value})}
              
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Deadline Date </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  type="date"
                  placeholder="with a placeholder"
                
                  value = {postData.DeadlineDate} 
                  onChange ={(e) => setPostData({...postData,DeadlineDate: e.target.value})}
              
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
Employers email 

</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  value = {postData.EMPLOYER_EMAIL} 
                  onChange ={(e) => setPostData({...postData,EMPLOYER_EMAIL: e.target.value})} 
                
                />
              </FormGroup>    
              <FormGroup>
                <Label for="exampleEmail">Job Post Title
</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  value = {postData.jobTitle} 
                  onChange ={(e) => setPostData({...postData,jobTitle: e.target.value})} 
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Job Description</Label>
                <Input id="exampleText" name="text" type="textarea"
                value = {postData.jobDescription} 
                onChange ={(e) => setPostData({...postData,jobDescription: e.target.value})} />
              </FormGroup>
              
             
              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default JobsOfTheDay;
