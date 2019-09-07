import axios from 'axios';
import { API_HOST } from '../constants/index.js';


export const getGames = async(params) => {
	const request = axios.get(
		`${API_HOST}games/`, {
			params: params,
			headers: { 'Content-Type': 'application/json'
		},
	});
	const { data } = await request;
	return data;
};


export const createGame = (query) => {
	const request = axios.post(
		`${API_HOST}games/`, JSON.stringify(query), {
			headers: { 'Content-Type': 'application/json'
		},
	});
	return request;
};


export const updateGame = (id, query) => {
	const request = axios.patch(
		`${API_HOST}games/${id}/`, JSON.stringify(query), {
			headers: { 'Content-Type': 'application/json'
		},
	});
	return request;
};
