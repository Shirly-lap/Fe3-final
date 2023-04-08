import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contac, setcontac] =useState({
    nombre: "",
    email:   ""
})

const [Esperado, setEsperado] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    if(contac.nombre.length >= 5) {
        setEsperado(true)
        setErr(false)
    } 
    else {
        setErr(true)
    }

}

  return (
    <div className="form">
       <form className="" onSubmit={handleSubmit} style={{width:'30vw', height:'20vw'}}>
            <input type="text" style={{ height:'30px'}} placeholder='Nombre de tu nombre' value={contac.nombre} onChange={(e) => setcontac({...contac, nombre: e.target.value})}/>
            <input type="email" style={{ height:'30px'}} placeholder='Ingresa tu email' value={contac.email} onChange={(e) => setcontac({...contac, email: e.target.value})}/>
            <input type="submit" style={{background:'#eb3131', border:'none', borderRadius:'100px', height:'30px', color:'white'}}/>
            {err && "Por favor verifique su información nuevamente"}
      </form>

      {Esperado && "Gracias " + contac.nombre + ", te contactaremos cuando antes vía mail "} 
    </div>
  );
};

export default Form;
