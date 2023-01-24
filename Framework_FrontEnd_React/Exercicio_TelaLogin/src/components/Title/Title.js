import PropTypes from "prop-types";

const Title = ({text}) => {

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )

}

Title.propTypes = {
    title: PropTypes.string,
};

export default Title