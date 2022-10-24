import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
const tableData = [
  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },
  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },  {

    Category: "Drivers",
    Description: "A good driver with 5 - 10 years of experience as a proffesional driver ",
    user: "Odhis101",
    Posted_By: "0703765432",
    
  
  },
];
const Jobs = () => {
  return (
    <Row>
        <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            List of Posted Jobs 
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category </th>
                  <th>Description</th>
                  <th>Posted By</th>
                  <th>Phone number</th>
                  <th>Update</th>
                  <th>Remove</th>
                
                </tr>
              </thead>
              <tbody>
              
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <th scope="row">{index + 1}</th>
                  <td>{tdata.Category}</td>
                  <td>{tdata.Description}</td>
                  <td>{tdata.user}</td>
                  <td>{tdata.Posted_By}</td>
                 
                  <td>UPDATE</td>
                  <td>Remove</td>
               
                </tr>
              ))}
            </tbody>
            
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Jobs;
