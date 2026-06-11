import './App.css'

import Counter from './components/Counter'


function App() {
  const valor = "Hola mundo"

  // Acá podemos escribir todo el js que necesitemos

  if(valor === "Chau") {

  }

  return (
    <>
      <div>Hola mundo</div>
      <div>Curso de React</div>

      <div id={`element-${2 + 5}`}></div>

      {
        valor === "Hola mundo" 
          ? <h1>Es igual</h1> 
          : <h1>No es igual</h1>
      }

      <br />
      <Counter minValue={0} maxValue={10} />
      <br />
      <Counter minValue={5} maxValue={8} />
      <br />
      <Counter minValue={2} maxValue={6} />
      <br />
      <Counter maxValue={4} />
    </>
  )
}

export default App
