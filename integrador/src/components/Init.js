import React from 'react'
import GroupExample from './cards/Cards'
import GroupExampleSecond from './cards/CardsSecond'
import GroupExampleThree from './cards/CardsThree'
import CarouselFadeExample from './carrousel/Carrousel'
import Populares from './populares/Populares'
import Fq from './preguntas/Fq'
import AllCollapseExample from './preguntas/PreguntasF'
import AllCollapseExampleSecond from './preguntas/PreguntasFSecond'
import Footer from './footer/Footer'
const Init = () => {
  return (
  <>
    <CarouselFadeExample />
    <Populares />
    <GroupExample />
    <GroupExampleSecond />
    <GroupExampleThree />
    <Fq />
    <AllCollapseExample />
    <AllCollapseExampleSecond />
    <Footer />
    
  </>
  )
}

export default Init
