import { createContext, useContext, useState, useEffect,  } from "react";
export const ContextGlobal = createContext();

const changeTheme = () => {
  const body = document.querySelector("body")
      body.classList.toggle("dark")
}
export const ContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error(error))
  }, []);

  console.log(datos);
  return (
    <ContextGlobal.Provider value={{ datos,changeTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal)
