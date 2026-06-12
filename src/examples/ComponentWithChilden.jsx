import React from 'react';

const ComponenteWithChildren = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: '#c4faf8',
        width: '90%',
        height: '28rem',
        borderRadius: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 15,
        marginBottom: 15,
        textTransform: 'italic',
      }}
    >
      <h1>Holis</h1>
      
      {children}
    </div>
  );
};
export default ComponenteWithChildren;
