import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
    const navigate = useNavigate ();
    const location = useLocation ();

    const { listaDeUsuarios } = location.state;

   const volteParaLogin = () => {
        navigate("/");
    }

    return (
        <div className="home">
            <h1>bem-vinde a home</h1>
            <ul>
                {listaDeUsuarios.map((user) =>
                <li key={user.id}>
                    {user.email}
                </li>
                )
                }
            </ul>
            <Button 
                aoClicar={volteParaLogin} 
                title="voltar para o login" 
                color="#8e99c6" 
            />

            
        </div>
    )
}

export default Home;