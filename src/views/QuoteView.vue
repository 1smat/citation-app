<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { IQuote } from '@/types';


const quotes = [
	{
		_id: "0", title: "string", author: "string", genre: "string", content: "string"
	},
	{
		_id: "1", title: "string", author: "string", genre: "string", content: "string"
	},
	{
		_id: "2", title: "string", author: "string", genre: "string", content: "string"
	}
]

const quote = ref<IQuote>({
	_id: '',
	title: '',
	author: '',
	genre: '',
	content: '',
	createDate: '',
	updateDate: '',
});
const { params } = useRoute();

const getQuote = async () => {

	// const response = await fetch(`/api/quotes/${params.id}`);
	// const data = await response.json();
	// quote.value = data;
};

onMounted(() => {
	getQuote();
});


</script>

<template>
	<h1>Single view</h1>
	<div>
		<h1>{{ quotes[Number(params.id)]._id }}</h1>
		<h2>{{ quotes[Number(params.id)].title }}</h2>
		<p>Author: {{ quotes[Number(params.id)].author }}</p>
		<p>Genre: {{ quotes[Number(params.id)].genre }}</p>
		<p>{{ quotes[Number(params.id)].content }}</p>
	</div>
</template>