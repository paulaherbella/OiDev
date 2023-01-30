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
  const [errorColor, setErrorColor] = useState('')
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [usuarios] = useState([
    {
      id: 1,
      email: "paula@gmail.com",
      password: "123",
    },
    {
      id: 2,
      email: "ju@gmail.com",
      password: "321",
    },
    {
      id: 3,
      email: "dory@gmail.com",
      password: "321",
    }
  ])
 
  
  const vaPraHome = () => {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === nomeDeUsuario && usuario.password === senha)
    
    if (usuarioEncontrado){
      navigate(
        "/home", 
        { state: { listaDeUsuarios: usuarios} }
      );
    } else {
      setShowError(true);
      setErrorColor("#ff4664");
    }
   
  }

  const mudarTitulo = () => {
    setTitle("Sucesso");
  }

  
  return (
    <div className="container">
      <div className="login">
        <Title text={title}/>
        {showError ? (<Subtitle text="Credenciais inválidas" color={errorColor}/> 
        ) : (
          <span>Digite seu e-mail e senha abaixo</span>
        )}

        <Input color={errorColor} type="text" value={nomeDeUsuario} onChange={(e) => setNomeDeUsuario(e.target.value)} text="usuário"  />
        <Input color={errorColor} type="text" onChange={(e) => setSenha(e.target.value)} text="senha" hideContent />
        <Button aoClicar={vaPraHome} title="entrar" bgColor="rgb(161, 56, 84)" color="white" />
        <Button aoClicar={mudarTitulo} title="trocar o título" />
        <Link />
        
        
      </div>
      
    </div>
  );
}

export default Login;




