import React, { useEffect, useState } from "react";
import doctor from "../images/doctor.jpg";
import detail from "../Routes/Detail";
import { Link } from "react-router-dom";

const Card = ({name, username, id, email }) => {
  
  const [dentistState, setDentistState] = useState({});
 // const [isFavorited, setIsFavorited] = useState(false);

  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentistState(data))
  }, [])

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const existingFav = favs.findIndex(fav => fav.id === dentistState.id);
    
    if (existingFav === -1) {
      const favsNew =[...favs,dentistState]
      localStorage.setItem('favs', JSON.stringify(favsNew))
    } else {
      const favsNew = favs.filter((fav) => fav.id !== dentistState.id);
      localStorage.setItem('favs', JSON.stringify(favsNew));
    }
    console.log(existingFav);
  };
  return (
    <div className="card">
      
      <img src={doctor} alt="doctor placeholder" style={{width:'15vw', height:'13vw' }}/>
    {/* En cada card deberan mostrar en name - username y el id */}
    
    <Link to={`/details/${id}`} style={{marginTop:'2vw'}}><h3>{name}</h3></Link>
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
