import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

function BookFigure() {
  return (
    <Container className='mb-3'>
      <Row className='justify-content-center'>
        <Col xs={10}>
          <Image 
            src='/img/placeholder.jpeg' 
            fluid
            className='my-3'
          />
        </Col>
        <Col xs={10} className='text-center'>
          <h1>The EKG Guidebook</h1>
          <p className='lead'>By: Mikel Capillari</p>
        </Col>
        <Col xs={10}>
          <div className='d-grid gap-2'>
            <Button 
              href='#'
              variant='primary'
              size='lg'
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BookFigure;