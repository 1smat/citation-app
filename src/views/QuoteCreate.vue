<template>
	<section class="bg-white dark:bg-gray-900">
		<div class="container px-6 py-24 mx-auto lg:py-32">
			<div class="lg:flex">
				<div class="lg:w-1/2">
					<!-- <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""> -->

					<!-- <h1 class="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Welcome back</h1> -->

					<h1 class="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
						Create Quote
					</h1>
				</div>

				<div class="mt-8 lg:w-1/2 lg:mt-0">
					<form class="w-full lg:max-w-xl">
						<div class="relative flex items-center">
							<input type="text"
								class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Quote Title">
						</div>

						<div class="relative flex items-center mt-4">
							<input type="text"
								class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Quote Author">
						</div>
						<div class="relative flex items-center mt-4">
							<input type="text"
								class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Quote Genre">
						</div>

						<div class="relative flex items-center mt-4">
							<textarea
								class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Quote Content" rows="4" />
						</div>



						<div class="mt-8 md:flex md:items-center">
							<button
								class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
								Create
							</button>
						</div>
					</form>
				</div>
			</div>

			<div class="mt-8 md:mt-24 sm:flex sm:items-center">
				<!-- <h3 class="text-blue-500 dark:text-blue-400 sm:w-1/2">Social networks</h3> -->


			</div>
		</div>
	</section>
</template>


<script lang="ts" setup>
// import { IQuote } from '@/interfaces';
// const t: IQuote = 
</script>