<script lang="ts" setup>
import { router } from '@/router'
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { addQuote } from '@/services/api'

const quote = reactive({
  title: '',
  author: '',
  genre: '',
  content: ''
})

const createDisabled = computed(() => {
  return !(quote.title && quote.author && quote.genre && quote.content)
})

const submitQuote = async () => {
  const newQuote = Object.assign({}, quote)
  await addQuote(newQuote)

  quote.title = ''
  quote.author = ''
  quote.genre = ''
  quote.content = ''

  router.push('/quotes')
}
</script>

<template>
  <section class="">
    <div class="px-6 mx-auto">
      <div class="flex justify-center">
        <div class="lg:w-1/2 lg:mt-0">
          <h1
            class="flex flex-col justify-center mt-4 text-2xl font-medium capitalize lg:text-3xl text-center"
          >
            Create Quote
          </h1>
          <br />
          <form class="w-full" @submit.prevent="submitQuote">
            <div class="relative flex items-center">
              <input
                id="quote-title"
                v-model="quote.title"
                type="text"
                class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Quote Title"
              />
            </div>

            <div class="relative flex items-center mt-4">
              <input
                id="quote-author"
                v-model="quote.author"
                type="text"
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Quote Author"
              />
            </div>
            <div class="relative flex items-center mt-4">
              <input
                id="quote-genre"
                v-model="quote.genre"
                type="text"
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Quote Genre"
              />
            </div>

            <div class="relative flex items-center mt-4">
              <textarea
                id="quote-content"
                v-model="quote.content"
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Quote Content"
                rows="4"
              />
            </div>

            <div class="mt-8 md:flex md:items-center justify-center">
              <button
                :class="[
                  'w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize rounded-lg transition-colors duration-300',
                  createDisabled
                    ? 'bg-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-blue-500 hover:bg-blue-400'
                ]"
                :disabled="createDisabled"
                type="submit"
              >
                {{ createDisabled ? 'Creating...' : 'Create' }}
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
