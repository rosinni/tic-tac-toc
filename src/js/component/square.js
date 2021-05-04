import React from "react";
import PropTypes from "prop-types";

export const Square = ({ index, handleClick }) => {
	return (
		<div
			className="col-sm-4 col-lg-4"
			onClick={() => handleClick(index)}></div>
	);
};

Square.propTypes = {
	index: PropTypes.number,
	handleClick: PropTypes.func
};
