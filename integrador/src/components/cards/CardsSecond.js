import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExampleSecond() {
  return (

    <>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/7d352670-38c3-423a-bcc7-18f896db7126/300x200" />
        <Card.Body>
          <Card.Title>RIO DE JAINERIO</Card.Title>
          <Card.Text>
            RIO al alcance de tu mano. ¡Empieza a vivir tu viaje!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Es por tiempo limitado</small>
          <Button variant="outline-warning">IR</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.staticontent.com/media/pictures/5d34639c-7974-4bd1-a145-da0c994b0460/300x200" />
        <Card.Body>
          <Card.Title>MISIONES</Card.Title>
          <Card.Text>
           Adentrate en las cataratas del Iguazu y viví una experiencia unica. ¡Empieza a vivir tu viaje!
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

export default GroupExampleSecond;