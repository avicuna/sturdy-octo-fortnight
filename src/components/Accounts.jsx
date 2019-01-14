import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Form, Input } from 'reactstrap';

class Accounts extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing1: false,
			isEditing2: false,
			currentId: 0,
			currentNumber: '',
			currentAddress: ''
		}
	}

	renderForm = (account) => {
		return(
			<Form>
					<Input
							type="text"
							id="phone_number"
							onChange={this.updateNumber}
							defaultValue={account.phone_number}
					/>
					<Input
							type="text"
							id="address"
							onChange={this.updateAddress}
							defaultValue={account.address}
					/>
					<Button onClick={() => this.editAccount(account.id)} type="button">Update Contact</Button>
			</Form>
		);
	}

	renderAccount = (account) => {
		return(
			<>
			<CardBody>
				<h4>Balance: ${account.balance}</h4>
				<h4>Phone Number: {account.phone_number}</h4>
				<h4>Address: {account.address}</h4>
				<Button id="edit-account-button" value={account.id} onClick={() => this.toggleState(account.id)} color="primary" type="button">Edit Info</Button>
			</CardBody>
			</>
		);
	}

	toggleState = (nr) => {
		let editingNumber = 'isEditing' + nr;
		this.setState({[editingNumber]: !this.state[editingNumber]})
	}

	updateNumber = (e) => {
		this.setState({currentNumber: e.target.value});
	}

	updateAddress = (e) => {
		this.setState({currentAddress: e.target.value});
	}

	editAccount = (id) => {
			const numberInput = document.getElementById('phone_number').value;
			const addressInput = document.getElementById('address').value;
			this.props.updateAccount(id, numberInput, addressInput);
			this.toggleState(id);
	}

	render() {
    return (
      <div>
        {this.props.accounts.map((account, index) => {
					let toggler = `toggler${index}`;
					let editingNumber = `isEditing${index+1}`
					return (
						<Card key={index}>
	            <CardBody>
	            	<h3>{account.name}</h3>
								<Button color="primary" id={toggler} style={{ marginBottom: '1rem' }}>
      						Toggle Account Details
						    </Button>
						    <UncontrolledCollapse toggler={toggler}>
						      <Card>
						        {this.state[editingNumber] ? this.renderForm(account): this.renderAccount(account)}
						      </Card>
						    </UncontrolledCollapse>
	            </CardBody>
          	</Card>
					)
				})}
      </div>
    );
  }

}

export default Accounts;
