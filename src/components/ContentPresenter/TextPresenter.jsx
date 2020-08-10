import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const TextPresenter = ({ data, isOdd }) => <div className={cn('presenter', {presenter__odd: isOdd, presenter__even: !isOdd})}>{data}</div>;

TextPresenter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	isOdd: PropTypes.bool
};

TextPresenter.defaultProps = {
	isOdd: false
};

export default TextPresenter;
