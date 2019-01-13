import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from '../App';
import Home from './Home';
import Accounts from './Accounts';

describe('Home', () => {
	it('should render a <div />', () => {
		const user = {
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
		const updateAccount = jest.fn();
			let wrapper = shallow(<Home user={user} updateAccount={updateAccount}/>);
			expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render <Accounts/>', () => {
		const homeProps = {
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
			},
			updateAccount: jest.fn()
		}
		const accountsProps = {
			accounts: [
				{id: 1, name: 'Account 1', balance: 1000000000, address: '123 Easy Street', phone_number: '123-456-7890'},
				{id: 2, name: 'Account 2', balance: 1000000000, address: '456 Cool Street', phone_number: '123-456-7890'}
			],
			updateAccount: jest.fn()
		};
		const div = document.createElement('div');
		document.body.appendChild(div);
	  ReactDOM.render(<App />, div);
		let wrapper = mount(<Home {...homeProps}/>);
		expect(wrapper.containsMatchingElement(<Accounts {...accountsProps}/>));
	});

	it('should call editProfile on button click', () => {
		const onClick = jest.fn();
		const updateAccount = jest.fn();
		const props = {
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
			},
			onClick,
			updateAccount,
		}
		const div = document.createElement('div');
		document.body.appendChild(div);
	  ReactDOM.render(<App />, div);
		let wrapper = mount(<Home {...props}/>);
		wrapper.find('Button').first().simulate('click');
		expect(onClick).toBeCalled();
	})
})
