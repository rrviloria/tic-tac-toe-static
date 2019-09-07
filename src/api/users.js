import axios from 'axios';
import { API_HOST } from '../constants/index.js';

// mock users
// const mockUsers = [
//   {id: 1, name: 'Raymund'},
//   {id: 2, name: 'Jelly'},
// ];

export const getUsers = async() => {
	const request = axios.get(
	   `${API_HOST}players/`, {
			headers: { 'Content-Type': 'application/json'
		},
	});
	const { data } = await request;
	return data;
};

export const createUser = async(query) => {
	const request = axios.post(
	 	`${API_HOST}players/`, JSON.stringify(query), {
			headers: { 'Content-Type': 'application/json'
		},
	});
	const { data } = await request;
	return data;
};
