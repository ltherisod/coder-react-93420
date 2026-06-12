import React from 'react'
//1. Se importa de react
import {useState, useEffect} from 'react'


const ItemCount = ({stock}) => {
    //declaro
    const[count, setCount ]= useState(1) 
     const[compra, setCompra ]= useState(false) 
//const [variableDeEstado, FuncionModificadora]= useState(ValorInicial)

const sumar = ()=> {
    if(count < stock){
        //modifico
        setCount(count + 1)
    }
}
const restar= ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}

const purchase = ()=> {
    setCompra(!compra)
}

// useEffect(()=>{
//     //codigo
// }, [array de dependencias])


//1. SIN EL ARRAY DE DEPENDENCIAS
//USO: NUNCA/CASI NUNCA
useEffect(()=>{
    console.log('ME EJECUTO SIEMPRE')
})

//2. CON EL ARRAY DE DEPENDENCIAS
//USO: CASI SIEMPRE/SIEMPRE
useEffect(()=>{
    console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE, UNA SOLA VEZ')
},[])

//3. CON EL ARRAY DE DEPENDENCIAS, ESCUCHANDO ALGO
//USO: CASI SIEMPRE/SIEMPRE
useEffect(()=>{
    console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE LO QUE ESCUCHO CAMBIA', 'compra:', compra)
},[compra])





console.log('ItemCount')
  return (
    <div>
        <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
        <button className='btn btn-primary' disabled={count === 0 || stock === 0} onClick={purchase}>Comprar</button>
    </div>
  )
}

export default ItemCount