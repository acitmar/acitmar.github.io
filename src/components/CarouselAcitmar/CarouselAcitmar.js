import Carousel from 'react-bootstrap/Carousel';
import slideOne from '../../img/alianzasnacionales.gif';
import slideTwo from '../../img/conveniosinternacionales.gif'
import slideTree from '../../img/pagina1.png'

function CarouselAcitmar() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideTree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAcitmar;