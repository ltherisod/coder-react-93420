import { useState, useEffect } from "react"
import { getProducts } from "../mock/data"
import ItemList from "./ItemList"

const ItemListContainer = ({saludo})=> {
    const [data, setData]= useState([])
    // const {saludo}= props
    // console.log(props)

    useEffect(()=> {
        getProducts()
        .then((res)=>setData(res))
    },[])
 console.log(data)
    return(
        <div>
            <h1>{saludo}</h1>
            {/* {data.map((prod)=> <h1 key={prod.id}>{prod.name}</h1>)} */}
            {/* {data.map((prod)=> <Item key={prod.id} prod={prod}/>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer