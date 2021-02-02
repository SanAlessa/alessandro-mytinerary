// Componente HOME que se llama para la pagina principal llamando los componentes que pertenecen a la misma.

import Cta from '../components/Cta'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import { useEffect } from 'react'

const Home = ()  => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  function probando() {
    document.querySelector('.prueba').style.backgroundColor= 'red'
    document.querySelector('#probando').classList.toggle('show')
  }
    return (
      <>
        <Hero/>
        <Cta/>
        <Carousel/>
      </>
    )}

export default Home;
