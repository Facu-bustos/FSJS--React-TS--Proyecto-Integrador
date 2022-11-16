import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExampleHotel() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg" />
        <Card.Body>
          <Card.Title>Hotel 5 estrellas</Card.Title>
          <Card.Text>
          Hotel DESTACADO
          Lujoso hotel ubicado en la zona centrica de New York
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Increible oportunidad</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" />
        <Card.Body>
          <Card.Title>Hotel 5 estrellas</Card.Title>
          <Card.Text>
          Hotel DESTACADO
          Lujoso hotel ubicado en la zona centrica de Rio de Janeiro
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Increible oportunidad</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_960_720.jpg" />
        <Card.Body>
          <Card.Title>Hotel 4 estrellas</Card.Title>
          <Card.Text>
          Hotel DESTACADO
          Lujoso hotel ubicado en la zona centrica de Mendoza
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Increible oportunidad</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExampleHotel;