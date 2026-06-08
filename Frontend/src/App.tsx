import "./App.css";
import { useState } from "react";

// Componentes
import { LoginUser } from "./components";

function App() {

  const [showLoginInput, setShowLoginInput] = useState<boolean>(true); // Para ocultar/mostrar el boton de loggearse

  const [username, setUsername] = useState<string>(""); // Para controlar todo el tiempo el valor utilizando el onChange() en el input
  const [password, setPassword] = useState<string>("");


  const handleLogin = async (e:React.SubmitEvent) => { // POST a la base de datos para guardar el nombre de usuario 
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username: username,
              password: password,
          }),
      });

      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json() // Esto transforma la respuesta del fetch a la API en un objeto JavaScript



      setShowLoginInput(false)

    } catch (err:any) {
      console.error(err.message)
    };

  };



  if (showLoginInput) { 
    return (
      <form onSubmit={handleLogin}>
        <LoginUser usernameMethod={setUsername} passwordMethod={setPassword} />
      </form>
    );
  };

}


export default App;
