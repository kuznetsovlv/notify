import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const LinkPresenter = ({ data, isOdd }) => (
	<div className={cn('presenter', {presenter__odd: isOdd, presenter__even: !isOdd})}>
		<a href={data} target="__blank">{data}</a>
	</div>);

LinkPresenter.propTypes = {
	data: PropTypes.string.isRequired,
	isOdd: PropTypes.bool
};

LinkPresenter.defaultProps = {
	isOdd: false
};

export default LinkPresenter;
