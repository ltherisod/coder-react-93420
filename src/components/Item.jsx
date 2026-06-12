import React from 'react'

const Item = ({prod}) => {
  return (
    <div className="card" style={{width:'18rem'}}>
  {/* <img src="..." className="card-img-top" alt="..."></img> */}
   <img src={prod.img} className="card-img-top" alt={prod.name}/>
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">${prod.price}</p>
    <a href="#" className="btn btn-primary">Ver más</a>
  </div>
</div>
  )
}

export default Item