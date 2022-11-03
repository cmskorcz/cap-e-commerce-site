import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Navbar bg='primary' className='text-center text-lg-start'>
      <Container className='p-4'>
        <Row>
          <Col lg={6} md={12}>
            <h5>Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Footer;