import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import { useSelector, useDispatch  } from 'react-redux';
import { getGoals, reset } from '../features/jobs/jobSclice'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Starter = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const { user } = useSelector((state) => state.auth)
    console.log(user)
    if(!user){
    console.log('user is not logged in')
    navigate('/login')
    }
    else{
      console.log('user is logged in')
    }
    const { goals, isLoading, isError, message } = useSelector(
        (state) => state.jobs
      )
      useEffect(() => {

        if (isError) {
          console.log('there was an error whilst loading', message)
        }
    
    
        dispatch(getGoals())
    
       
      }, [user, isError, message, dispatch])
  

  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds goals ={goals} />
        </Col>
      </Row>
      {/***Table ***/}
   
      {/***Blog Cards***/}
    </div>
  );
};

export default Starter;
