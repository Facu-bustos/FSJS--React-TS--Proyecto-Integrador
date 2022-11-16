import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExampleThree() {
  return (
    <>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/f220efa5-5846-405c-a51d-49bde13175fa/300x200" />
        <Card.Body>
          <Card.Title>VUELO A SAN CARLOS DE BARILOCHE</Card.Title>
          <Card.Text>
            Bariloche como siempre lo soñaste. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/9c9c9803-adc1-4819-91f4-b6312b3dd504/300x200" />
        <Card.Body>
          <Card.Title>MENDOZA</Card.Title>
          <Card.Text>
            Vivi la experiencia de los viñedos en mendoza. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/becf02ac-e437-46bb-87f7-dc92c133c443/300x200" />
        <Card.Body>
          <Card.Title>PAQUETES A EL CALAFATE</Card.Title>
          <Card.Text>
          Paquete completo a el calafate ¡Empieza a vivir tu viaje!
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

export default GroupExampleThree;