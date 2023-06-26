
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const getOneGoal = async (goalId) => {
  //console.log("this is from services", goalId)
  console.log("this is from services")
  const response = await axios.get(`${API_URL}/jobs/getjobs/${goalId}`)
  console.log(response)
  return response.data
}
const updateGoal = async(goalId,goalData) =>{
  console.log('here is the param',goalId)
  console.log('updating the services',goalData)
  const response = await axios.post(`${API_URL}/jobs/updateJobs/${goalId}`,goalData)
  console.log(response)
  return response.data
}
const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(`${API_URL}/jobs/setJob`, goalData, config)
  
    return response.data
  }
  const getGoals = async () => {
  
  
    const response = await axios.get(`${API_URL}/jobs/getjobs`)
  
    return response.data
  }
  
  // Delete user goal
  const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  console.log('deleting the goal',goalId)
    const response = await axios.delete(`${API_URL}/jobs/deleteJobs/${goalId}`)
  
    return response.data
  }
  const excelUpload = async (req, res) => {
    const response = await axios.get(`${API_URL}/jobs/excel`)
    console.log(response)
    return response
  }
  
  
  const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    getOneGoal,
    updateGoal,
    excelUpload,
  }
  
  export default goalService