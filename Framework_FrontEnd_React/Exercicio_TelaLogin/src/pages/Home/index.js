import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function Home() {
    const navigate = useNavigate ();

    function volteParaLogin() {
        navigate("/");
    }

    return (
        <div className="home">
            <h1>bem-vinde a home</h1>
            <Button redirecionar={volteParaLogin} title="sair" />
        </div>
    )
}

export default Home;