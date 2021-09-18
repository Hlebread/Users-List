export default class RandomUser {
	static url = 'https://randomuser.me/api/'
	static params = [
		'?results=105',
		'&inc=name,location,email,phone,id,dob,picture',
	]

	static async getUsers(){
		const response = await fetch(this.url + this.params.join(''));
		const data = await response.json();
		const users = this.dataFilter(data);
		return users;
	}

	static dataFilter(data){
		return [...data.results].map((e, index) => ({...e, id: index + 1}));
	}

	static getStates(users){
		return [...new Set(users.map(user => user.location.state))];
	}
}