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
  axios.post(`http://localhost:5000/jobs/updateJobs/${id}`,postData)
  // go back to the previous page 
  //navigate(-1)
//dispatch(updateGoal(id,postData))
//alert('Job Posted Successfully')
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
  <Label for="exampleEmail">Job Category</Label>
  <br/>
  <select
  id="categories"
  name='category'
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full my-1 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
  onChange={(e) => setPostData({ ...postData, Category: e.target.value })}
>
  <option selected disabled>Category</option>
  <option value="Construction">Construction</option>
  <option value="Cooks">Cooks</option>
  <option value="Drivers">Drivers</option>
  <option value="Woodwork">Woodwork</option>
  <option value="Electricals">Electricals</option>
  <option value="Cleaning">Cleaning</option>
  <option value="Nannies">Nannies</option>
  <option value="Professional services">Professional services</option>
  <option value="Outside catering">Outside catering</option>
  <option value="Pets Services">Pets Services</option>
  <option value="Farming">Farming</option>
  <option value="Internships">Internships</option>
  <option value="Classified">Classified</option>
  <option value="Professionals local">Professionals local</option>
  <option value="Professionals abroad">Professionals abroad</option>
  <option value="Casual jobs">Casual jobs</option>
  <option value="Casual long term">Casual long term</option>
  <option value="Freelance jobs">Freelance jobs</option>
</select>
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
                  <Label for="exampleEmail">
Employers Contact  
  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="tel"
                    value = {postData.Employers_contact} 
                    onChange ={(e) => setPostData({...postData,Employers_contact: e.target.value})} 
                  
                  />
                </FormGroup> 
                <FormGroup>
                  <Label for="exampleEmail">
                  DeadlineDate
  
  </Label>
                  <Input
                    id="exampleEmail"
                    name="deadlineDate"
                    placeholder="with a placeholder"
                    type="date"
                    value = {postData.DeadlineDate} 
                    onChange ={(e) => setPostData({...postData,DeadlineDate: e.target.value})} 
                  
                  />
                </FormGroup>   
                <FormGroup>
                  <Label for="exampleEmail">
                  Location
  
  </Label>
                  <Input
                    id="exampleEmail"
                    name="deadlineDate"
                    placeholder="with a placeholder"
                    type="text"
                    value = {postData.Location} 
                    onChange ={(e) => setPostData({...postData,Location: e.target.value})} 
                  
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
