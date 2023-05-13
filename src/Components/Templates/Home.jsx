import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="12" className="text-center">
          <h1>UNXD Home Page</h1>
          <Button>Click me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
