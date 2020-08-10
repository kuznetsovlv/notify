import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import getPresenter from './getPresenter';
import TitlePresenter from './TitlePresenter';
import './styles.scss';

const DataPresenter = ({ data, isOdd, label }) => {
	const isEven = !isOdd;

	const [openKeys, setOpenKeys] = useState(() => Object.keys(data).reduce((res, key) => {res[key] = false; return res;}, {}));

return (
	<div className={cn('presenter', {presenter__odd: isOdd, presenter__even: !isOdd})}>
		{Object.entries(data).map(([key, value]) => {
			const newLabel = `${label}_${key}_${value}_${isOdd}`
			const Presenter = getPresenter(newLabel, value);
			const open = openKeys[key];

			return (<div key={newLabel}>
				<TitlePresenter
					open={open}
					onClick={() => setOpenKeys(openKeys => ({ ...openKeys, [key]: !open}))}
				>
					{key}
				</TitlePresenter>
				{open && <div className="data">
					<Presenter label={newLabel} data={value} isOdd={isEven} />
				</div>}
			</div>);
		})}
	</div>);
}

DataPresenter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	isOdd: PropTypes.bool,
	label: PropTypes.string.isRequired,
};

DataPresenter.defaultProps = {
	isOdd: false
};

export default DataPresenter;
