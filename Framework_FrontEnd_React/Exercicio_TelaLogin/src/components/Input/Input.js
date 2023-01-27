import PropTypes from "prop-types";

const Input = ({text, onChange, hideContent, color}) => {
    return (
        <>
           <label htmlFor= "input" style={{color: color}}>{text}</label>
           <input name="input" onChange={onChange} type={hideContent ? "password" : "text"} /> 
          
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
};

export default Input