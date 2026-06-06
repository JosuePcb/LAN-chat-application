import "./inputUsername.css";

interface loginUserProps {
    parentMethod: () => void;
}

const LoginUser = ({parentMethod}: loginUserProps) => {
    return (
        <>
            <label htmlFor="username">Username</label>

            <input type="text" id="username" />

            <label htmlFor="password">Contraseña</label>

            <input type="password" id="password" />

            <button onClick={parentMethod}>Enviar</button>
        </>
    );
};

export default LoginUser;
