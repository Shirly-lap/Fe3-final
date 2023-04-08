import React, { useState } from "react";
import doctor from "../images/doctor.jpg";
import Detail from "../Routes/Detail";
import { Link } from "react-router-dom";

const Card = ({name, username, id, email }) => {
  const [dato, setDato] = useState([]);
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

  };
  return (
    <div className="card">
      
      <img src={doctor} alt="doctor placeholder" style={{width:'15vw', height:'13vw' }}/>
    {/* En cada card deberan mostrar en name - username y el id */}
    
    <Link to={`/dentist/${id}`} style={{marginTop:'2vw'}}><h3>{name}</h3></Link>
    <h5>{username}</h5>
    <h5>{email}</h5>
    <button onClick={addFav} className="favButton">Add fav</button>
    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

   </div>
  );
};
export default Card;












/*import React from "react";
import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg";

const Card = (id,name, username,email) => {
  let favs = localStorage.getItem('favs') || []
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (favs == []) {
          
      
    } else {
      
    }
  }
  console.log(id);
  return (


    <div className="card">
      <img src={doctor} alt="doctor placeholder" style={{width:'18vw', height:'13vw'}}/>
    {/* En cada card deberan mostrar en name - username y el id *}/
    

    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle }*/

    /*{ Ademas deberan integrar la logica para guardar cada Card en el localStorage }*/
   /* <button onClick={addFav} className="favButton">Add fav</button>
   </div>
  );
};



export default Card;*/
