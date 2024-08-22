import { Card, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <h1>Welcome to our Website</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This a Brief description of what this card is about
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This a Brief description of what this card is about
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                This a Brief description of what this card is about
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
