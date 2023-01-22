import './style.css';
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate ();

  function vaPraHome() {
    navigate("/home");
  }

  return (
    <div className="container">
      <div className="login">
        <Title />
        <Input />
        <Button redirecionar={vaPraHome} title="entrar" />
        <Link />
      </div>
    </div>
  );
}

export default Login;




