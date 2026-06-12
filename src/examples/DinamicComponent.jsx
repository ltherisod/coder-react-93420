import React from 'react';

const DinamicComponent = (props) => {
  
  return (
    <div className="card" style={{ width: '18rem', marginTop: 15 }}>
      <img src={props.img} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">{props.buttonText}</button>
      </div>
    </div>
  );
};
export default DinamicComponent;
