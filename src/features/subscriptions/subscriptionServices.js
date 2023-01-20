import axios from 'axios'

const getSubscribers = async (goalData) => {
  const response = await axios.post("http://localhost:5000/daraja/subscriptions", goalData)
  console.log(goalData)
  console.log(response.data)
  return response.data
}
const getAllSubscribers = async () => {
  
  
  const response = await axios.get("http://localhost:5000/daraja/Allsubscriptions")

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