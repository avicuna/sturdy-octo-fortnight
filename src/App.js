import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route, Switch} from "react-router-dom";
import './App.css';
import history from './history';
import Home from './components/Home';
import EditProfile from './components/EditProfile';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: {
				id: 1,
				name: 'Sample User',
				phone_number: '123-456-7890',
				address: '123 Easy Street',
				zip_code: '12345',
				accounts: [
					{id: 1, name: 'Account 1', balance: 1000000000, address: '123 Easy Street', phone_number: '123-456-7890'},
					{id: 2, name: 'Account 2', balance: 1000000000, address: '456 Cool Street', phone_number: '123-456-7890'}
				]
			}
		}
	}

	updateUser = (newName, newNumber, newAddress, newZipCode) => {
		let {user} = this.state;
		user.name = newName;
		user.phone_number = newNumber;
		user.address = newAddress;
		user.zip_code = newZipCode;
		this.setState({
			user: user
		});
	}

	updateAccount = (id, newNumber, newAddress) => {
		const url = `http://localhost:5000/`
		let {user} = this.state;
		let updatedAccounts = [];
		user.accounts.map((account, index) => {
			if(account.id === id){
				updatedAccounts.push({...account, address: newAddress, phone_number: newNumber});
			}
			else {
				updatedAccounts.push(account);
			}
			return account;
		})

		this.setState({user: {...user, accounts: updatedAccounts}}, () => {axios.post(`${url}user`, this.state.user)});

	}

  render() {
    return (
			<div>
				<Router history={history}>
					<div className="App">
						<Switch>
							<Route
								path="/home"
								render={(props) =>
									<Home {...props}
												user={this.state.user}
												updateAccount={this.updateAccount}
									/>
								}
							/>
							<Route
								path="/edit-profile"
								render={(props) =>
									<EditProfile {...props}
												user={this.state.user}
												updateUser={this.updateUser}
									/>
								}
							/>
							<Route
								render={(props) =>
									<Home {...props}
												user={this.state.user}
												updateAccount={this.updateAccount}
									/>
								}
							/>
						</Switch>
					</div>
				</Router>
			</div>
    );
  }
}

export default App;
