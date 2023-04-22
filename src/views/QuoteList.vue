<script lang="ts" setup>
import QuoteCard from '@/components/QuoteCard.vue';

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
</script>

<template>
	<h1>Quote List</h1>
	<QuoteCard v-for="quote in quotes" :quote="quote" />
</template>