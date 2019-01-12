import React from 'react';
import history from '../history';
import Accounts from './Accounts';
import { Jumbotron, Button } from 'reactstrap';


const Home = (props) => {
	const {user, updateAccount} = props;
	const editProfile = () => {
		history.push("/edit-profile");
	};
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">Welcome, {user.name}</h1>
				<hr className="my-2" />
				<p>Phone Number: {user.phone_number}</p>
				<p>Address: {user.address}</p>
				<p>Zip Code: {user.zip_code}</p>

				<p className="lead">
					<Button onClick={editProfile} color="primary">Edit Info</Button>
				</p>
			</Jumbotron>
			<Accounts
			 	accounts={user.accounts.map((account) => { return account })}
				updateAccount={updateAccount}
			/>

		</div>
	)
}

export default Home;
