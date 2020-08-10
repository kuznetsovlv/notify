import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

import ContentPresenter from './ContentPresenter';

const ContentManager = ({ label, dataName, data, onInit }) => {
	useEffect(onInit(dataName), [null]);

	if (data === null) {
		return <Loader />;
	}

	return <ContentPresenter label={label} data={data} />;
};

ContentManager.propTypes = {
	label: PropTypes.string.isRequired,
	dataName: PropTypes.string.isRequired,
	data: PropTypes.object,
	onInit: PropTypes.func.isRequired
};

ContentManager.defaultProps = {
	data: null
};

export default memo(ContentManager);
