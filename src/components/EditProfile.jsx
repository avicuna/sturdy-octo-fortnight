import React from 'react';
import history from '../history';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const EditProfile = (props) => {
	const {user, updateUser} = props;
	let nameInput, numberInput, addressInput, zipCodeInput;

	const update = (e) => {
		if(!nameInput || !numberInput || !addressInput || !zipCodeInput){
			nameInput = document.getElementById('name').value;
			numberInput = document.getElementById('phone_number').value;
			addressInput = document.getElementById('address').value;
			zipCodeInput = document.getElementById('zip_code').value;
		}
		switch(e.target.id){
			case "name":
				nameInput = e.target.value;
				break;
			case "phone_number":
				numberInput = e.target.value;
				break;
			case "address":
				addressInput = e.target.value;
				break;
			case "zip_code":
				zipCodeInput = e.target.value;
				break;
			default:
				break;
		}
	}

	const submit = (e) => {
		e.preventDefault();
		if(!nameInput || !numberInput || !addressInput || !zipCodeInput){
			nameInput = document.getElementById('name').value;
			numberInput = document.getElementById('phone_number').value;
			addressInput = document.getElementById('address').value;
			zipCodeInput = document.getElementById('zip_code').value;
		}
		updateUser(nameInput, numberInput, addressInput, zipCodeInput);
		history.push("/home");
	}
	return (
		<div>
			<h1>Edit Profile Info</h1>
			<Form onChange={update} onSubmit={submit}>
				<FormGroup>
					<Label for="name">Name</Label>
					<Input type="text" id="name" defaultValue={user.name} />
				</FormGroup>
				<FormGroup>
					<Label for="phone_number">Phone Number</Label>
					<Input type="text" id="phone_number" defaultValue={user.phone_number} />
				</FormGroup>
				<FormGroup>
					<Label for="address">Address</Label>
					<Input type="text" id="address" defaultValue={user.address} />
				</FormGroup>
				<FormGroup>
					<Label for="zip_code">Zip Code</Label>
					<Input type="text" id="zip_code" defaultValue={user.zip_code} />
				</FormGroup>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	)
};

export default EditProfile;
