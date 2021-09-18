import React from 'react';
import MySearchForm from './interface/searchForm/MySearchForm';
import '../scss/HeaderForm.scss';

const HeaderForm = ({filter, setFilter, states}) => {
	return (
		<header>
			<MySearchForm
				filter={filter}
				setFilter={setFilter}
				states={states}
			/>
		</header>
	);
};

export default HeaderForm;