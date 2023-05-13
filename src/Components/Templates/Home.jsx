import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { connectToMetaMask } from '../../Actions/MetaMask';

const Home = () => {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    await connectToMetaMask(dispatch);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="12" className="text-center">
          <h1>UNXD Home Page</h1>
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
