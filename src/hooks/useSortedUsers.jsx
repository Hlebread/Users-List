import { useMemo } from 'react';

export const useSortedUsers = (users, filter, setNumberOfPages) => {

	const sortedByInput = useMemo(() => {
		if (filter.input) {
			return [...users].filter(user =>
				(user.id + user.name.first + user.name.last + user.email + user.phone + user.location.state)
					.toLowerCase()
					.includes(filter.input.toLowerCase())
			);
		}
		return users;
	}, [filter.input, users]);


	const sortedBySelect = useMemo(() => {
		if (filter.state) {
			return sortedByInput.filter(user => user.location.state === filter.state);
		};
		return sortedByInput;
	}, [filter.state, sortedByInput]);


	const sortedByField = useMemo(() => {
		let sortFunction = (field_1, field_2) => sortedBySelect.slice().sort((a, b) => {
			if (field_1 === 'id') {
				return b[field_1] - a[field_1];
			};

			const valueA = a?.[field_1]?.[field_2] ?? a[field_1];
			const valueB = b?.[field_1]?.[field_2] ?? b[field_1];

			return valueA < valueB ? -1 : valueA > valueB ? 1 : 0
		});

		switch (filter.head.toLowerCase()) {
			case 'id':
				return sortFunction('id');

			case 'first name':
				return sortFunction('name', 'first');

			case 'last name':
				return sortFunction('name', 'last');

			case 'email':
				return sortFunction('email');

			case 'phone':
				return sortFunction('phone');

			case 'state':
				return sortFunction('location', 'state');

			default: return sortedBySelect;
		}
	}, [filter.head, sortedBySelect]);

	const sortedByPage = useMemo(() => {
		setNumberOfPages(Math.ceil(+(sortedByField.length / 20)));
		const index = filter.page === 1 ? 0 
												  : +(String(filter.page * 2) + 0) - 20;
		const pagedUsers = [...sortedByField].splice(index, 20);
		return pagedUsers;
	}, [filter.page, sortedByField]);

	return sortedByPage;
}