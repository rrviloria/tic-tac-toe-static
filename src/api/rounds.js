import axios from 'axios';
import { API_HOST } from '../constants/index.js';


export const createGameRound = async(query) => {
	const request = axios.post(
	 	`${API_HOST}game-rounds/`, JSON.stringify(query), {
			headers: { 'Content-Type': 'application/json'
		},
	});
	return request;
};