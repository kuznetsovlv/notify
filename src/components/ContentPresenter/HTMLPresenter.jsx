import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const HTMLPresenter = ({ data, isOdd }) => (
	<div
		className={cn('presenter', {presenter__odd: isOdd, presenter__even: !isOdd})}
		dangerouslySetInnerHTML={{ __html: data }}
	></div>
);

HTMLPresenter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	isOdd: PropTypes.bool
};

HTMLPresenter.defaultProps = {
	isOdd: false
};

export default HTMLPresenter;
