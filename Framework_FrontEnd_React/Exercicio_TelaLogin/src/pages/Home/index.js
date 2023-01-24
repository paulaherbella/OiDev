import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Home = () => {
    const navigate = useNavigate ();

   const volteParaLogin = () => {
        navigate("/");
    }

    return (
        <div className="home">
            <h1>bem-vinde a home</h1>
            <Button aoClicar={volteParaLogin} title="voltar para o login" color="#8e99c6" />
        </div>
    )
}

export default Home;