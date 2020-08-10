import React from 'react';
import PropTypes from 'prop-types';
import ContentManagerContainer from '../containers/ContentManagerContainer';
import Errors from './Errors';

const Root = ({ errors }) => {
	if (errors.length > 0) {
		return <Errors errors={errors} />;
	}

	return (
		<>
			<ContentManagerContainer label="First content manager" dataName="JSON1"/>
			<ContentManagerContainer label="Second one" dataName="JSON2"/>
			<ContentManagerContainer label="Third one" dataName="JSON1"/>

		</>
	);
};

Root.propTypes = {
	errors: PropTypes.arrayOf(PropTypes.instanceOf(Error))
};

Root.defaultProps = {
	errors: []
};

export default Root;