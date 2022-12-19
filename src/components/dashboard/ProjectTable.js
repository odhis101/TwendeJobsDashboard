import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

import { useSelector, useDispatch  } from 'react-redux';
import { getUsers} from '../../features/auth/authSlice'
import { Dialog, Transition } from '@headlessui/react'
import { useEffect,useState,Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ProjectTables = () => {
  const [showModal, setShowModal] = useState(false);
   const dispatch = useDispatch()
   let [isOpen, setIsOpen] = useState(true)

 
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
                  
                  <td>{tdata.phoneNumber}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )  : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td >  
                  <button type="button" class="btn btn-success disabled">update</button>
      
      
      </td>
                  <td>   <button type="button" class="btn btn-danger disabled" data-toggle="modal" data-target="#exampleModal">
Delete
</button>



 </td>
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
