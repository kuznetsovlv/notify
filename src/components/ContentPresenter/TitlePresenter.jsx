import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.scss';


const TitlePresenter = ({children, open, onClick}) => (
	<div className="title-presenter" onClick={onClick}>
		<div className={cn('title', {title_open: open, title_closed: !open})}>{children}</div>
	</div>);

TitlePresenter.propTypes = {
	children: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default TitlePresenter;
