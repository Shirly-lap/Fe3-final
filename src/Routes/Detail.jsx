import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const style = { position: 'relative', top: '5vw'}
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
 
  return (
    <>
     <h1 style={style} >Detail Dentist id </h1>
    {/* <div style={{ position: 'relative', top:'10vw'}}>
    <h1>Detail Dentist id {dato.id} </h1>
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{dato.name}</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>{dato.email}</td>
        </tr>

        <tr>
              <td>Phone:</td>
              <td>{dato.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{dato.website}</td>
            </tr>
      </tbody>
    </table>
    
      aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico 
      </div>*/}
      
    </>
    
      
  )
}

export default Detail