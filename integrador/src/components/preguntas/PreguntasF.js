import Accordion from 'react-bootstrap/Accordion';


function AllCollapseExample() {
  return (
    <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Medios de pagos</Accordion.Header>
        <Accordion.Body>
        ¿Cuáles son las formas de pago disponibles?
        ¡Queremos que tu viaje sea realidad! Por eso, te ofrecemos varias formas de pago 😉
        <hr></hr>
        Las alternativas disponibles para tu reserva están en la sección “Forma de pago”, en el último paso antes de comprar en Shop Fly. Recuerda que las opciones pueden variar según tu país, el horario en el que estás comprando y el tipo de tarifa que elegiste. En algunos casos, puedes elegir pagar directamente al proveedor.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Puedo pagar con 2 o más tarjetas de crédito?</Accordion.Header>
        <Accordion.Body>
        Algunos productos permiten la opción de pagar con 2 tarjetas de crédito.
        Puedes verificar si esta alternativa está disponible en la sección "Forma de pago" que se encuentra en el último paso de tu compra en Shop Fly. Recuerda que las opciones que aparecen ahí son las únicas válidas para completar la compra.
        <hr></hr>
    👉 Ten en cuenta que según el horario en el que estás haciendo la compra y el tipo de tarifa que hayas elegido, pueden variar los medios de pago que se muestran.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    
    
    </>

    
  );
}

export default AllCollapseExample;