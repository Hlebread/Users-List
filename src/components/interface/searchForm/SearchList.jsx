import React, { useState } from 'react';
import classes from './MySearchForm.module.scss';
import MyArrow from '../arrow/MyArrow';

const SearchList = ({ states, filter, setFilter }) => {

	const [open, setOpen] = useState(false);

	const chooseTag = (stateName) => {
		setFilter({ ...filter, state: stateName })
		setOpen(!open);
	}

	const clearStateFilter = e => {
		e.stopPropagation();
		setFilter({ ...filter, state: '' });
		setOpen(false);
	}

	if (!states) {
		return (
			<ul className={classes.search_list}>
			</ul>
		);
	}

	const SearchItem = ({ children }) => {
		return (
			<li className={classes.search_list_item}
				onClick={e => chooseTag(e.target.textContent)}
			>
				{children}
			</li>
		);
	}

	return (
		<div className={classes.search_list_container} onClick={() => setOpen(!open)}>
			<h2>
				{
					filter.state
						?
						<span className={classes.clear} onClick={e => clearStateFilter(e)}></span>
						: ''
				}

				{filter.state ? `${filter.state}`
					: 'Choose state:'}
				<MyArrow
					isOpen={open}
				/>
			</h2>

			{open
				?
				<ul className={classes.search_list}>
					{states.sort().map((state, index) =>
						<SearchItem key={index}>{state}</SearchItem>
					)}
				</ul>
				:
				''
			}
		</div>
	);
}

export default SearchList;
