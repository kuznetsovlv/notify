import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ errors }) => (<>{errors.map((error, i) => <div key={i} className="error">{error.message}</div>)}</>);

Errors.propTypes = {
	errors: PropTypes.arrayOf(PropTypes.instanceOf(Error)).isRequired
};

export default Errors;
