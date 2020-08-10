import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import getPresenter from './getPresenter';
import TitlePresenter from './TitlePresenter';
import './styles.scss';

const ContentPresenter = ({ data, label }) => {
	const [open, setOpen] = useState(false);
	const Presenter = getPresenter(label, data);

	return (
	<>
		<TitlePresenter open={open} onClick={() => setOpen(!open)}>{label}</TitlePresenter>
		{open && <div className="data">
			<Presenter label={label} data={data} />
		</div>}
	</>);

};

ContentPresenter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	isOdd: PropTypes.bool,
	label: PropTypes.string.isRequired,
};

export default ContentPresenter;
