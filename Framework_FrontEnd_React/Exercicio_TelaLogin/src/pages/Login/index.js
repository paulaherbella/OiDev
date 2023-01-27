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
  const [showError, setShowError] = useState(false);
  const [inputColor, setinputColor] = useState('white')
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [users, setUsers] = useState([
    {
      email: "paula@gmail.com",
      password: "123",
    },
    {
      email: "judory@gmail.com",
      password: "321",
    }
  ])
  

  const vaPraHome = () => {
    const usuarioEncontrado = users.find(usuario => usuario.email === nomeDeUsuario && usuario.password === senha)
    
    if (usuarioEncontrado){
      navigate("/home");
    } else {
      setShowError(true);
      setinputColor(inputColor);
    }
   
  }

  const mudarTitulo = () => {
    setTitle("Sucesso");
  }

  
  return (
    <div className="container">
      <div className="login">
        <Title text={title}/>
        {showError && <Subtitle text="Credenciais inválidas" color="#ff4664"/>}
        {/* <Subtitle usuario={nomeDeUsuario} /> */}
        <Input type="text" value={nomeDeUsuario} onChange={(e) => setNomeDeUsuario(e.target.value)} text="usuário"  />
        <Input type="text" onChange={(e) => setSenha(e.target.value)} text="senha" hideContent />
        <Button aoClicar={vaPraHome} title="entrar" bgColor="rgb(161, 56, 84)" color="white" />
        <Button aoClicar={mudarTitulo} title="trocar o título" />
        <Link />
      </div>
    </div>
  );
}

export default Login;




