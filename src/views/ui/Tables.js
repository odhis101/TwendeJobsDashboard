import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
const tableData = [
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "done",
    mpesa: "XXXYYYZZZ5 Confirmed. ",
  
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "done",
    mpesa: "XXXYYYZZZ5 Confirmed .",
 
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed ",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed. ",
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "done",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "done",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "done",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "x",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  }, {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "x",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
  {

    name: "Hanna Gover",
    email: "hgover@gmail.com",
    number: "0703765432",
    status: "pending",
    mpesa: "XXXYYYZZZ5 Confirmed.",
    
  },
];
const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
  
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            List of All Subscribers
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                 
                  <th>Phone number</th>
                  <th>Subscription status</th>
                  <th>Update</th>
                  <th>Remove</th>
                  <th>Mpesa Confirmation</th>
                </tr>
              </thead>
              <tbody>
              
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <th scope="row">{index + 1}</th>
               
                  <td>{tdata.number}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    )  : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>UPDATE</td>
                  <td>Remove</td>
                  <td>XXXYYYZZZ5 Confirmed.</td>
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

export default Tables;
