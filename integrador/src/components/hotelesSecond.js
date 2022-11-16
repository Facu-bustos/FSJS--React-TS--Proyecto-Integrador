import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img className='Cardhotel' src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_960_720.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>HOTELES RESORT</Card.Title>
        <Card.Text>
         ¡HOTEL DESTACADO DEL AÑO!
         Alojate en la cadena de Hoteles RESORT. La cadena de hoteles mas grande el mundo.
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;