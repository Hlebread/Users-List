import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import HeaderForm from './components/HeaderForm';
import Table from './components/Table';
import PageNavigationBar from './components/PageNavigationBar';
import UserScreen from './components/UserScreen';
import { useSortedUsers } from './hooks/useSortedUsers';
import RandomUser from './api/RandomUser';
import MyPreloader from './components/interface/loader/MyPreloader';

const App = () => {
	const [users, setUsers] = useState('');
	const [states, setStates] = useState([]);
	const [filter, setFilter] = useState({ input: '', state: '', head: '', page: 1 });
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [userOnScreen, setUserOnScreen] = useState('');
	const sortedUsers = useSortedUsers(users, filter, setNumberOfPagesHandler);

	useEffect(async () => {
		const users = await RandomUser.getUsers();
		const states = await RandomUser.getStates(users);
		setUsers(users);
		setStates(states);
	}, []);

	function setNumberOfPagesHandler(number) {
		setNumberOfPages(number);
	};

	return (
		users
			?
			<div className="App">
				<HeaderForm
					filter={filter}
					setFilter={setFilter}
					states={states}
				/>

				<Table
					users={sortedUsers}
					userOnScreen={userOnScreen}
					openProfile={setUserOnScreen}
					filter={filter}
					setFilter={setFilter}
				/>

				{
					numberOfPages
						?
						<PageNavigationBar
							numberOfPages={numberOfPages}
							filter={filter}
							setFilter={setFilter}
						/>
						:
						''
				}


				{
					userOnScreen
						?
						<UserScreen
							profile={userOnScreen}
							close={() => setUserOnScreen('')}
						/>
						: ''
				}
			</div>
			:
			<MyPreloader />
	);
}

export default App;
