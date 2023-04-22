import api from '@/constants/api';

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
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch quote');
	}
};


