import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from '../App';
import Accounts from './Accounts';

describe('Accounts', () => {
	let wrapper;
	let instance;
	const accountsProps = {
		accounts: [
			{id: 1, name: 'Account 1', balance: 1000000000, address: '123 Easy Street', phone_number: '123-456-7890'},
			{id: 2, name: 'Account 2', balance: 1000000000, address: '456 Cool Street', phone_number: '123-456-7890'}
		],
		updateAccount: jest.fn()
	};
	beforeEach(() => {
			wrapper = shallow(
					<Accounts
							{...accountsProps}
					/>
			);
			instance = wrapper.instance();
	});

	it('should render Accounts when isEditing1 & 2 are false', () => {
		expect(wrapper.find('CardBody').exists()).toEqual(true);
		expect(wrapper.find('Form').exists()).toEqual(false);
	});

	it('should render forms when isEditing1 & 2 are true', () => {
		instance.toggleState(1);
		instance.toggleState(2);
		expect(wrapper.find('Form').exists()).toEqual(true);
	});
})
