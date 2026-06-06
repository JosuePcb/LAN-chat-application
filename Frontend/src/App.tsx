import "./App.css";
import { useState } from "react";

// Componentes
import { LoginUser } from "./components";

function App() {

  const [showLoginInput, setShowLoginInput] = useState<boolean>(true); // Se debe conectar con el boton de logearse

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username enviado");  // POST a la base de datos para guardar el nombre de usuario 
  };

  // handleSubmit DEBE CONECTARSE con handleInput, si hay un error al loggearse, no se debe cambiar el boolean para el estado del Input.

  const handleInput = () => {
    setShowLoginInput(!showLoginInput);
    return;
  };

  if (showLoginInput) { 
    return (
      <form onSubmit={handleSubmit}>
        <LoginUser parentMethod={handleInput} />
      </form>
    );
  };



}



export default App;
