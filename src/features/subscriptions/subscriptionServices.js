import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

const getSubscribers = async (goalData) => {
  const response = await axios.post(`${API_URL}/daraja/subscriptions`, goalData)
  console.log(goalData)
  console.log(response.data)
  return response.data
}
const getAllSubscribers = async () => {
  
  
  //const response = await axios.get("http://localhost:5000/daraja/Allsubscriptions")
  const response = await axios.get(`${API_URL}/daraja/Allsubscriptions`)

  return response.data
}
const deleteSubscriber = async (goalId) => {
  const response = await axios.delete(`http://localhost:5000/daraja/Deletesubscribers/${goalId}`)
  console.log(goalId)
  console.log(response.data)
  return response.data
}

const goalService = {
  getAllSubscribers,
  getSubscribers,
  deleteSubscriber
}

export default goalService