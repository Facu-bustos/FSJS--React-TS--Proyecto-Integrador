import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExampleSecond() {
  return (

      <>
       <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Cómo selecciono mis asientos?</Accordion.Header>
        <Accordion.Body>
        Para seleccionar los asientos, debes acceder directamente al sitio web de la aerolínea de tu vuelo. También puedes elegir el asiento en el momento del check-in.
        <hr></hr>
        Importante:
        Ten en cuenta que algunas aerolíneas no permiten que selecciones los asientos gratis antes del check-in, solo con el pago de una tasa con anticipación y que, en algunos casos, tienes que gestionarlo directamente con ellos.
        Si pre-seleccionas el asiento de tu vuelo, la aerolínea puede cambiarlo sin previo aviso.
        <hr></hr>
        💡 Tip para tu viaje:
        Si no seleccionas tu asiento, podrás hacerlo con la aerolínea en el aeropuerto antes de tu viaje.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Con cuánta anticipación tengo que estar en el aeropuerto?</Accordion.Header>
        <Accordion.Body>
        Para vuelos internacionales se recomienda estar 3 horas antes del horario de partida.
        Cuando el vuelo es doméstico, la anticipación sugerida es de 2 horas.
        ¡Buen viaje! 🙂
        <hr></hr>

    👉 Ten en cuenta que según el horario en el que estás haciendo la compra y el tipo de tarifa que hayas elegido, pueden variar los medios de pago que se muestran.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
     
      </>
   
  );
}

export default AllCollapseExampleSecond;