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
	<div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-1 px-2">
		<QuoteCard v-for="quote in state.quotes " :quote="quote" />
	</div>
</template>