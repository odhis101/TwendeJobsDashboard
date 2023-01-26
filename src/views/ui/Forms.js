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
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOneGoal,reset } from '../../features/jobs/jobSclice'
import { useState } from "react";
import { useEffect } from 'react';
import { updateGoal } from "../../features/jobs/jobSclice";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Forms = () => {
  const API_URL = process.env.REACT_APP_API_URL
  const id = useParams().id;
  console.log('this is the id',id)
  const { jobs, iSLoading, IsError, Message } = useSelector(
    (state) => state.jobs
  )
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)


  const dispatch = useDispatch()
  useEffect(() => {

    if (IsError) {
      console.log('there was an error while loading', Message)
    }    
    // dispatch the id of the job that is clicked 
    dispatch(getOneGoal(id)) 
  },[user,dispatch])
  console.log('here are the',jobs)
  const [postData, setPostData] = useState({ Employers_Name :jobs.Employers_Name, jobDescription: jobs.jobDescription, EMPLOYER_EMAIL:jobs.EMPLOYER_EMAIL,Employers_contact: jobs.Employers_contact, jobTitle:jobs.jobTitle, DeadlineDate: jobs.DeadlineDate,Category:jobs.Category});
console.log('post data',postData)

const handleSubmit=(e) => {
  e.preventDefault();
  
  console.log('1234')
  console.log(postData)
  // update the goal 
  axios.post(`${API_URL}/jobs/updateJobs/${id}`,postData)
  // go back to the previous page 
  navigate(-1)
//dispatch(updateGoal(id,postData))
//alert('Job Posted Successfully')
//navigate('/')
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
            Update Job
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

export default Forms;
