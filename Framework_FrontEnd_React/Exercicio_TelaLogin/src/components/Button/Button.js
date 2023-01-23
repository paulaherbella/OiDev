const Button = ({title, redirecionar}) => {
    return (
        <div>           
          <button className="entrar-login" onClick={redirecionar}>{title}</button>
        </div>
    )
}

export default Button