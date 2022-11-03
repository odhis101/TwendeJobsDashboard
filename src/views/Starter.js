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
    const { goals, isLoading, isError, message } = useSelector(
        (state) => state.jobs
      )
      useEffect(() => {

        if (isError) {
          console.log('there was an error while loading', message)
        }
    
    
        dispatch(getGoals())
    
       
      }, [user, navigate, isError, message, dispatch])
  

  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
    </div>
  );
};

export default Starter;
