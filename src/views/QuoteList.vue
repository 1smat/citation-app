<template>
	<nav x-data="{ isOpen: false }" class="relative bg-white">
		<div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<!-- Mobile menu button -->
				<div class="flex lg:hidden md:hidden">
					<button x-cloak @click="state.isOpen = !state.isOpen" type="button"
						class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="toggle menu">
						<svg v-show="!state.isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
							viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						<svg v-show="state.isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
							viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->

			<div x-cloak :class="[state.isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
				class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
				<div class="flex flex-col md:flex-row md:mx-6">
					<div class="relative mr-2">
						<input type="text"
							class="w-full px-3 py-2 text-gray-700 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Filter by author" v-model="state.authorFilter">
					</div>
					<div class="relative mr-2">
						<input type="text"
							class="w-full px-3 py-2 text-gray-700 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Filter by genre" v-model="state.genreFilter">
					</div>
					<div class="relative">
						<input type="text"
							class="w-full px-3 py-2 text-gray-700 border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Filter by content" v-model="state.contentFilter">
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- gird -->
	<div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-1 px-2">
		<QuoteCard v-for="quote in filteredQuotes" :key="quote._uuid" :quote="quote" />
	</div>
</template>
  
<script lang="ts" setup>
import QuoteCard from "@/components/QuoteCard.vue";
import { getAllQuotes } from "@/services/api";
import { IQuote } from "@/types";
import { computed, onMounted, reactive } from "vue";

interface State {
	quotes: IQuote[];
	authorFilter: string;
	genreFilter: string;
	contentFilter: string;
	isOpen: boolean
}


const state = reactive<State>({
	isOpen: false,
	quotes: [],
	authorFilter: "",
	contentFilter: "",
	genreFilter: ""
});

onMounted(async () => {
	state.quotes = await getAllQuotes();
});

const filteredQuotes = computed(() => {
	return state.quotes.filter(
		(quote) =>
			quote.author.toLowerCase().includes(state.authorFilter.toLowerCase()) &&
			quote.genre.toLowerCase().includes(state.genreFilter.toLowerCase()) &&
			quote.content.toLowerCase().includes(state.contentFilter.toLowerCase())

	);
});


</script>
  