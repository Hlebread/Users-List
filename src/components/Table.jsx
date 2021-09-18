import React from 'react';
import '../scss/Table.scss';
import MyArrow from './interface/arrow/MyArrow';

const Table = ({ users, userOnScreen, openProfile, setFilter, filter }) => {
	const tableHeadTitles = ['ID', 'First name', 'Last name', 'Email', 'Phone', 'State'];

	const TableHead = field => {
		return (
			<thead>
				<tr>
					{
						tableHeadTitles.map(title =>
							<th
								key={title}
								onClick={e => chooseField(e.target.closest('TH').textContent)}
								className={title === filter.head ? 'selected' : ''}
							>
								{title}
								<MyArrow
									isOpen={title === filter.head ? true : false}
								/>
							</th>
						)
					}
				</tr>
			</thead>
		);
	}

	const chooseField = field => {
		if (field === filter.head) {
			setFilter({ ...filter, head: '' });
			return;
		}
		setFilter({ ...filter, head: field });
	};

	return (
		<table>
			<TableHead />
			<tbody>
				{
					users.map((user, index) =>
						<tr key={index}
							onClick={() => openProfile(user)}
							className={userOnScreen.id === user.id ? 'selected' : ''}
						>
							<td>{user.id}</td>
							<td>{user.name.first}</td>
							<td>{user.name.last}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
							<td>{user.location.state}</td>
						</tr>
					)
				}
			</tbody>
		</table>
	);
};

export default Table
