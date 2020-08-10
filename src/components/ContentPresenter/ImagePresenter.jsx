import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const ImagePresenter = ({ data, isOdd }) => (
	<div className={cn('presenter', {presenter__odd: isOdd, presenter__even: !isOdd})}>
		<img src={data} />
	</div>);

ImagePresenter.propTypes = {
	data: PropTypes.string.isRequired,
	isOdd: PropTypes.bool
};

ImagePresenter.defaultProps = {
	isOdd: false
};

export default ImagePresenter;
