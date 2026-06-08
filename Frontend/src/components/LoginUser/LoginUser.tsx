import "./inputUsername.css";

// ESTE COMPONENTE DEBE RECIBIR COMO PARAMETRO EL SETTER PARA TU USERNAME Y PASSWORD


interface loginUserProps {
    usernameMethod: React.Dispatch<React.SetStateAction<string>>; // Esto dice que usernameMethod y passwordMethod van a ser setters de estados en react
    passwordMethod: React.Dispatch<React.SetStateAction<string>>; // holy typescript 
}

const handleChange = (setAny: React.Dispatch<React.SetStateAction<string>>) => // setAny va a ser un setter tambien

    (e: React.ChangeEvent<HTMLInputElement>) => { // El evento va a ser un change event
        setAny(e.target.value);
    };


const LoginUser = ({usernameMethod, passwordMethod}: loginUserProps) => { 
    return (
        <>
            <label htmlFor="username">Username</label>

            <input type="text" id="username" onChange={handleChange(usernameMethod)} required/>

            <label htmlFor="password">Password</label>

            <input type="password" id="password" onChange={handleChange(passwordMethod)} required/>

            <button type="submit">Send</button>
        </>
    );
};

export default LoginUser;
