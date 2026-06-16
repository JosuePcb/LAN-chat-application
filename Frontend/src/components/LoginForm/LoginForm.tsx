import { useState, useEffect } from "react";

// Componentes
import { LoginUser, ErrorMessage } from "../index";

function LoginForm() {
    const [showLoginInput, setShowLoginInput] = useState<boolean>(true); // Para ocultar/mostrar el boton de loggearse
    const [username, setUsername] = useState<string>(""); // Para controlar todo el tiempo el valor del username utilizando el onChange() en el input
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>(""); // Para mostrar mensajes de error

    // Limpiar el error automáticamente después de 4 segundos
    useEffect(() => {
        if (!error) return;

        const timer = setTimeout(() => setError(""), 6000);
        return () => clearTimeout(timer); // Limpia el timer si el error cambia antes de los 4s
    }, [error]);

    const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
        // POST a la base de datos para guardar el nombre de usuario
        e.preventDefault();
        setError(""); // Limpiar error anterior al intentar de nuevo

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

            if (response.status === 401) {
                // Credenciales incorrectas — mostramos el error y limpiamos los campos
                setError("Credenciales inválidas");
                setUsername("");
                setPassword("");
                return;
            }

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json(); // Respuesta del servidor, devuelve user: { id: id_user, username: username }


            setShowLoginInput(false); // Se cambia el estado del componente para que no se muestre

        } catch (err: any) {
            setError(err.message);
            console.error(err.message);
        }
    };


    if (showLoginInput) {
        return (
            <>
                <form onSubmit={handleLogin}>
                    <ErrorMessage message={error} />
                    <LoginUser
                        valueUsername={username}
                        valuePassword={password}
                        usernameMethod={setUsername}
                        passwordMethod={setPassword}
                    />
                </form>
            </>
        );
    } else return;
}

export default LoginForm;
