<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getQuote } from '@/services/api'
import { router } from '@/router'
import { updateQuote } from '@/services/api'

const quote = reactive({
    _uuid: '',
    title: '',
    author: '',
    genre: '',
    content: '',
})

const { params } = useRoute()

const fetchQuote = async () => {
    const response = await getQuote(String(params.id))
    console.log(response)
    const data = await response.data
    Object.assign(quote, data)
}

onMounted(() => {
    fetchQuote()
})

const editQuote = async () => {
    const editedQuote = Object.assign({}, quote)
    await updateQuote(editedQuote)

    router.push(`/quotes/${quote._uuid}`)
}
</script>

<template>
    <section
        class="mt-4 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >
        <h2
            class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
        >
            Account settings
        </h2>

        <form @submit.prevent="editQuote">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="title"
                        >Title</label
                    >
                    <input
                        id="title"
                        type="text"
                        v-model="quote.title"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="author"
                        >Author</label
                    >
                    <input
                        id="author"
                        type="text"
                        v-model="quote.author"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="content"
                        >Content</label
                    >

                    <textarea
                        id="content"
                        type="content"
                        v-model="quote.content"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    ></textarea>
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="genre"
                        >Genre</label
                    >
                    <input
                        id="genre"
                        type="genre"
                        v-model="quote.genre"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    <div class="flex justify-end mt-6">
                        <button
                            type="submit"
                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>
