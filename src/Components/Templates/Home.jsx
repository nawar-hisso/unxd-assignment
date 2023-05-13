import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { connectToMetaMask } from '../../Actions/MetaMask';
import { fetchNFTs } from '../../APIs/Infura';

const Home = () => {
  const dispatch = useDispatch();

  const { app } = useSelector(state => state);

  const connectWallet = async () => {
    await connectToMetaMask(dispatch);
  };

  const fetchMyNFTs = () => {
    fetchNFTs(dispatch, app?.wallet);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="12" className="text-center">
          <h1>UNXD Home Page</h1>
          <Button onClick={connectWallet}>Connect Wallet</Button>
          <Button onClick={fetchMyNFTs}>Fetch</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
