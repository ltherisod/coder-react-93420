import './App.css'
import Item from './components/Item'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ComponenteWithChildren from './examples/ComponentWithChilden'
import DinamicComponent from './examples/DinamicComponent'
import ItemCount from './components/ItemCount'

function App() {


  return (
    <>
    <Navbar cart={8}/>
    <ItemListContainer saludo='Bienvenidos a mi shop!'/>
      {/* <DinamicComponent
      title='This is fine'
      description='sarasa sarasa'
      img='https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png'
      buttonText='Purchase'
      />
        <DinamicComponent
      title='Amsiedad'
      description='un monton'
      img='https://i.postimg.cc/B6DXgwsc/whatdoyoumeme-Deco1.png'
      buttonText='Shop!'
      />
      <ComponenteWithChildren/>
      <ComponenteWithChildren>
        <h2>Miren que linda estta children</h2>
      </ComponenteWithChildren>
      <ComponenteWithChildren>
        <h2>Miren que linda estta children</h2>
          <DinamicComponent
      title='Children!'
      description='un monton'
      img='https://i.postimg.cc/Y2JPJ0TM/success.png'
      buttonText='Shop!'
      />
    
      </ComponenteWithChildren>
      <ComponenteWithChildren
      >Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      <ItemCount stock={5}/>
      <ItemCount stock={5}/>
      <ItemCount stock={5}/>
      </ComponenteWithChildren> */}
      <ItemCount stock={5}/>
    </>
  )
}

export default App
