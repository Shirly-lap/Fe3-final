import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const style = { position: 'relative', top: '7vw'}

  return (
    <>
      <h1 style={style}>Dentists Favs</h1>
      <div className="card-grid">
        
       
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
