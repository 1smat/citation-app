<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { IQuote } from '@/types'
import { deleteQuote, getQuote } from '@/services/api'
import { router } from '@/router'
import { format } from '@/services/utils'

const quote = ref<IQuote>({
  _uuid: '',
  title: '',
  author: '',
  genre: '',
  content: '',
  _created: 0,
  _modified: 0
})
const { params } = useRoute()

const fetchQuote = async () => {
  const response = await getQuote(String(params.id))
  const data = await response.data
  quote.value = data
}

const removeQuote = async () => {
  if (confirm('Are you sure delete quote?')) {
    await deleteQuote(String(params.id))
    router.push('/quotes')
  }
}

onMounted(() => {
  fetchQuote()
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            {{ quote.title }}
          </h1>
          <h6 class="text-white">
            <span class="text-blue-500">Created:</span>
            {{ format(quote._created) }}
          </h6>
          <h6 class="text-white">
            <span class="text-blue-500">Modified: </span>
            {{ format(quote._modified) }}
          </h6>
        </div>
        <div class="flex gap-2">
          <RouterLink
            :to="`/quotes/edit/${quote._uuid}`"
            class="text-white px-6 py-2 bg-blue-600 rounded-md"
          >
            Edit
          </RouterLink>
          <button
            type="button"
            @click="removeQuote"
            class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span class="mx-1">Delete</span>
          </button>
        </div>
      </div>
      <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <p class="text-lg text-blue-500 uppercase">
            Genre : {{ quote.genre }}
          </p>

          <p class="mt-3 text-2xl text-gray-300">
            {{ quote.content }}
          </p>

          <!-- <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a> -->

          <div class="flex items-center mt-6">
            <img
              class="object-cover object-center w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />

            <div class="mx-4">
              <h1 class="text-2xl text-gray-200">
                {{ quote.author }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
