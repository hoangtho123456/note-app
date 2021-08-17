import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, valClass, onClick}) => {
    let classCss = valClass? "hover:bg-blue-700 font-bold py-2 px-8 rounded "+valClass:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded "+valClass;
    return (
        <button className={classCss} onClick={onClick}>
            {title}
        </button>
    );
}

Button.defaultProps = {
    title: 'Test Button'
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;
