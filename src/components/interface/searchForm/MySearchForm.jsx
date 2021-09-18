import React from 'react';
import classes from './MySearchForm.module.scss';
import SearchList from './SearchList';
import MyInput from '../input/MyInput';

const MySearchForm = ({ states, filter, setFilter }) => {
	return (
		<form className={classes.search_notes}>
			<MyInput
				type="text"
				placeholder="Search users..."
				value={filter.input}
				onChange={e => setFilter({ ...filter, input: e.target.value })}
			/>
			<SearchList
				states={states}
				filter={filter}
				setFilter={setFilter}
			/>
		</form>
	);
};

export default MySearchForm;