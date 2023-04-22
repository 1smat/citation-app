<script lang="ts" setup>
import QuoteCard from '@/components/QuoteCard.vue';
import { getAllQuotes } from '@/services/api';
import { onMounted, reactive } from 'vue';

const state = reactive({
	quotes: []
});

onMounted(async () => {
	state.quotes = await getAllQuotes();
});

</script>

<template>
	<h1>Quote List</h1>
	<QuoteCard v-for="quote in state.quotes" :quote="quote" :key="quote._id" />
</template>