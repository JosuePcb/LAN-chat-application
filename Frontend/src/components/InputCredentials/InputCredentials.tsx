import "./InputCredentials.css";

// ESTE COMPONENTE DEBE RECIBIR COMO PARAMETRO EL SETTER PARA TU USERNAME Y PASSWORD Y LA VARIABLE DE USERNAME Y PASSWORD 

interface props {
    usernameMethod: React.Dispatch<React.SetStateAction<string>>; // Esto dice que usernameMethod y passwordMethod van a ser setters de estados en react
    passwordMethod: React.Dispatch<React.SetStateAction<string>>; // holy typescript 
    valueUsername: string;
    valuePassword: string;
    
}

const handleChange = (setAny: React.Dispatch<React.SetStateAction<string>>) => // setAny va a ser un setter tambien

    (e: React.ChangeEvent<HTMLInputElement>) => { // El evento va a ser un change event
        setAny(e.target.value);
    };


const LoginUser = ({ usernameMethod, passwordMethod, valuePassword, valueUsername }: props) => { 
    
    const isValid:boolean = valuePassword.length >= 6 && valueUsername.length >= 4;// Verificar cantidad de caracteres de cada string, si se cumple: isValid = true 

    return (
        <>
            <label htmlFor="username">Username</label>

            <input
                type="text"
                id="username"
                onChange={handleChange(usernameMethod)}
                value={valueUsername}
                required
            />

            <label htmlFor="password">Password</label>

            <input
                type="password"
                id="password"
                onChange={handleChange(passwordMethod)}
                value={valuePassword}
                required
            />

            <button type="submit" disabled={!isValid}>
                Send
            </button>
        </>
    );
};



export default LoginUser;
