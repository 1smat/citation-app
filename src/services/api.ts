import api from '@/constants/api';
import { IQuote } from '@/types';

export const getAllQuotes = async () => {
	try {
		const response = await api.get(`/quotes`);
		return response.data.items;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch quote');
	}
};

export const getQuote = async (id: string) => {
	try {
		const response = await api.get(`/quotes/${id}`);
		return response;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch quote');
	}
};

export const addQuote = async (quote: IQuote) => {
	try {
		const response = await api.post(`/quotes`, [quote]);
		return response;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to add quote');
	}
};


export const updateQuote = async (quote: IQuote) => {
	try {
		const response = await api.put(`/quotes`, [quote]);
		return response;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to add quote');
	}
};


