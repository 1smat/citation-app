import { render, screen } from '@testing-library/vue';
import QuoteCard from './QuoteCard.vue';

test('Render QuoteCard', () => {
	const quote = {
		_uuid: '1234',
		title: 'Example Quote',
		author: 'John Doe',
		genre: 'Inspirational',
		content: 'This is an example quote.',
		_created: 1234567890,
		_modified: 1234567890
	};

	render(QuoteCard, {
		props: { quote }
	});
})





