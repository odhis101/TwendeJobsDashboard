import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { useSelector, useDispatch  } from 'react-redux';
import { getUsers} from '../../features/auth/authSlice'

import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectTables = () => {
   const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.auth
    )
    useEffect(() => {

      if (isError) {
        console.log('there was an error while loading', message)
      }
  
  
      dispatch(getUsers())
  
     
    }, [])
console.log('goals', goals)
console.log('user', )


  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Latest Subscribers </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Short overview of our latest subscribers 
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                
                <th>Phone number </th>

                <th>Subscription status </th>
                <th>Update</th>
                <th>Remove</th>
                <th>Mpesa Confirmation  </th>
              </tr>
            </thead>
            <tbody>
              {goals === undefined ? <p>loading</p> : 
goals.length > 0 ? (
              goals.map((tdata, goal) => (
                <tr key={goal._id} className="border-top">
                  
                  <td>{goal.phoneNumber}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )  : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>UPDATE</td>
                  <td>DELETE</td>
                  <td>12</td>
                </tr>
              ))) : (
                <h3>You have not set any goals</h3>
        )
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
