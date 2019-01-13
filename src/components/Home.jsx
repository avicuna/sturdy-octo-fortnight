import React from 'react';
import Accounts from './Accounts';
import { Jumbotron, Button } from 'reactstrap';


class Home extends React.Component {
	render() {
		const {user, updateAccount, onClick} = this.props;

		return (
			<div>
				<Jumbotron>
					<h1 className="display-3">Welcome, {user.name}</h1>
					<hr className="my-2" />
					<p>Phone Number: {user.phone_number}</p>
					<p>Address: {user.address}</p>
					<p>Zip Code: {user.zip_code}</p>
					<p className="lead">
						<Button onClick={onClick} color="primary">Edit Info</Button>
					</p>
				</Jumbotron>
				<Accounts
				 	accounts={user.accounts.map((account) => { return account })}
					updateAccount={updateAccount}
				/>
			</div>
		)
	}
}

export default Home;
