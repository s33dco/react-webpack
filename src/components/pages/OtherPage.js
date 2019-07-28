import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
	return (
		<Fragment>
			<p>this is the other page</p>
			<p>
				<Link to="/">Head on home</Link>
			</p>
		</Fragment>
	);
};

export default OtherPage;
