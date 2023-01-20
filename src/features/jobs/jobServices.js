
import axios from 'axios'

const API_URL = 'http://localhost:5000/jobs'

const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URL, goalData, config)
  
    return response.data
  }
  const getGoals = async () => {
  
  
    const response = await axios.get("http://localhost:5000/jobs/getjobs")
  
    return response.data
  }
  
  // Delete user goal
  const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(`${API_URL}/deleteJobs/${goalId}`)
  
    return response.data
  }
  
  const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
  }
  
  export default goalService