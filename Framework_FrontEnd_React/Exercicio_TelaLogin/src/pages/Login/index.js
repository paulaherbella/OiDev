import './style.css';
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Subtitle from '../../components/Subtitle/Subtitle';

const Login = () => {
  const navigate = useNavigate ();
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState("");

  const vaPraHome = () => {
    navigate("/home");
  }

  const mudarTitulo = () => {
    setTitle("Sucesso");
  }

  
  return (
    <div className="container">
      <div className="login">
        <Title text={title}/>
        <Subtitle usuario={subtitle} />
        <Input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} text="usuário" textPassword="senha" />
        <Button aoClicar={vaPraHome} title="entrar" bgColor="rgb(161, 56, 84)" color="white" />
        <Button aoClicar={mudarTitulo} title="trocar o título" />
        <Link />
      </div>
    </div>
  );
}

export default Login;




