<script lang="ts" setup>
import QuoteCard from '@/components/QuoteCard.vue';
import { getAllQuotes } from '@/services/api';
import { onMounted, reactive } from 'vue';


const state = reactive({
	quotes: [],
	randomIndex: 0
});

onMounted(async () => {
	state.quotes = await getAllQuotes();

	state.randomIndex = (Math.floor(Math.random() * (state.quotes.length)))
});



</script>

<template>
	<QuoteCard :quote="Object.assign({}, state.quotes[state.randomIndex])" />
</template>