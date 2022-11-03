import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function BookFigure() {
  return (
    <Container>
      <Image 
        src='/img/placeholder.jpeg' 
        fluid
        className='my-3'
      />
    </Container>
  )
}

export default BookFigure;