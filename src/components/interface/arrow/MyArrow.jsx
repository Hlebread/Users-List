import React, { useState } from 'react';
import classes from './MyArrow.module.scss';

const MyArrow = ({isOpen}) => {
	const rootClasses = [classes.arrow];
	if (isOpen) {
		rootClasses.push(classes.open);
	}

	return (
		<div className={rootClasses.join(' ')}>
			<span className={classes.left}></span>
			<span className={classes.right}></span>
		</div>
	);

};

export default MyArrow;