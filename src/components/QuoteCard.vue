<script lang="ts" setup>
import { IQuote } from '@/types';

defineProps<{ quote: IQuote }>()

</script>

<template>
	<RouterLink :to="`quotes/${quote._id}`">
		<div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">

			<div class="flex items-center justify-between">
				<span class="text-sm font-light text-gray-800 dark:text-gray-400">
					{{ quote._id }}
				</span>
				<span
					class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
					{{ quote.genre }}
				</span>
			</div>
			<div>
				<h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
					{{ quote.author }}
				</h1>
				<p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
					{{ quote.content }}
				</p>
			</div>

			<div>
				<div class="flex items-center mt-2 text-gray-700 dark:text-gray-200">
					<a class="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabindex="0"
						role="link">
						{{ quote.author }}
					</a>
				</div>

			</div>
		</div>
	</RouterLink>
</template>