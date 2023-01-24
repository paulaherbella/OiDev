import PropTypes from "prop-types";

const Input = ({text, textPassword, onChange}) => {
    return (
        <>
           <label htmlFor= "input">{text}</label>
           <input name="input" onChange={onChange} /> 

           <label htmlFor= "input" >{textPassword}</label>
           <input name="input" type="password" /> 
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
};

export default Input