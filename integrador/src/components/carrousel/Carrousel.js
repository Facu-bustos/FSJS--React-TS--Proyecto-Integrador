import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <>
     <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/04/02/13/06/beach-99388_960_720.jpg"
          alt="Rio De Janeiro"
        />
        <Carousel.Caption>
          <h3 style={{color: "black", textDecoration:"underline"}}>Bem-vindo ao Rio, o lugar mais top do Brasil</h3>
          <p  style={{color: "black"}}>Disfruta de las mejores actividades</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/07/21/18/46/surf-1533278_960_720.jpg"
          alt="Surf en las tipicas playas de brasil"
        />
        <Carousel.Caption>
          <h3  style={{color: "black", textDecoration:"underline"}}>Surf en las mejores playas</h3>
          <p  style={{color: "black"}}>Hace surf en las tipicas playas de Brasil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/03/27/20/57/people-1284253_960_720.jpg"
          alt="Disfruta del mejor futbol de sudamerica"
        />
        <Carousel.Caption>
          <h3  style={{color: "black", textDecoration:"underline"}}>Campeonato Brasileirao de serie A</h3>
          <p  style={{color: "black", }}>
            Disfruta del mejor futbol de sudamerica
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
   
  


    </>
   
  );
}

export default CarouselFadeExample;