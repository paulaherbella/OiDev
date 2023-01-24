import PropTypes from "prop-types";

const Button = ({title, aoClicar, bgColor, color}) => {
    return (
        <div>           
          <button className="entrar-login" onClick={aoClicar} style={{ backgroundColor: bgColor, color: color }}>{title}</button>
                    
        </div>
    )
}

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "light grey",
  color: "black",
}

export default Button