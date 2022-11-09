import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Navbar bg='primary' className='text-center text-lg-start d-block pb-0'>
      <Container className='p-4'>
        <Row>
          <Col lg={6} md={12} className='mb-4 mb-md-0'>
            <h5>Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </Col>
          <Col lg={6} md={12} className='mb-4 mb-md-0'>
            <h5>Footer Content</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </Col>
        </Row>
      </Container>
      <div 
        className='text-center p-3' 
        style={{ backgroundColor: 'rgba(0,0,0,0.2' }}
      >
        &copy; {new Date().getFullYear()} Copyright:{' '}
      </div>
    </Navbar>
  )
}

export default Footer;