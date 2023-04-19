import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useEffect, useState } from "react";

const Sms = () => {
    const API_URL = process.env.REACT_APP_API_URL
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/messages/getall`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            List of All sms messages 
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Phone number</th>
                  <th>Message Text</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{message.phoneNumber}</td>
                    <td>{message.messageText}</td>
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
export default Sms;
