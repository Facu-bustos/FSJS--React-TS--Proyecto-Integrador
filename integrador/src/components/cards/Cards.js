import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


function GroupExample() {
  return (
<>
<CardGroup>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/2ebc6061-1a4f-45cf-be0e-a5cb2bb8d968/300x200" />
        <Card.Body>
          <Card.Title>MADRID</Card.Title>
          <Card.Text>
            Conoce las miticas calle de la capital española. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/9e82bac6-d856-4f52-b51f-cc01eb80a4f4/300x200" />
        <Card.Body>
          <Card.Title>MEXICO</Card.Title>
          <Card.Text>
            Un viaje al paraiso. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/810dbd3b-425d-4afc-b09b-ffee8391b2e9/300x200" />
        <Card.Body>
          <Card.Title>PASEO GLACIAR PERITO MORENO</Card.Title>
          <Card.Text>
            ¿No conoces el glaciar Perito Moreno?. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  
</>
  );
}

export default GroupExample;