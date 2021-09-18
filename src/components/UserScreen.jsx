import React from 'react';
import '../scss/UserScreen.scss';

const UserScreen = ({profile, close}) => {
	return (
		<div className='profileScreen'>
			<span className='close' onClick={() => close()}></span>
			<img src={profile.picture.large} alt="" />
			<div className='name'>
				{`${profile.name.title} ${profile.name.first} ${profile.name.last}`}
			</div>
			<div className='address card'>{profile.location.city}, {profile.location.country}</div>
			<div className='card'><span>Age:</span> {profile.dob.age}</div>
			<div className='card'><span>Address:</span> {`${profile.location.street.number}, 
								${profile.location.street.name}`} 
			</div>
			<div className='card'><span>State:</span> {profile.location.state}</div>
			<div className='card'><span>Postcode:</span> {profile.location.postcode}</div>
			<div className='card'><span>Phone:</span> {profile.phone}</div>
			<div className='card'><span>Email:</span> {profile.email}</div>
		</div>
	);
};

export default UserScreen;
