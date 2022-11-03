import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BookFigure() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={10}>
          <Image 
            src='/img/placeholder.jpeg' 
            fluid
            className='my-3'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default BookFigure;