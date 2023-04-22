<script lang="ts" setup>
import { IQuote } from '@/types'

defineProps<{ quote: IQuote }>()
</script>

<template>
    <div
        class="max-w-md px-8 py-4 mt-4 bg-white rounded-lg shadow-lg dark:bg-gray-800"
    >
        <RouterLink :to="`quotes/${quote._uuid}`">
            <h2
                class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"
            >
                {{ quote.title }}
            </h2>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
                {{ quote.content }}
            </p>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
                Genre : {{ quote.genre }}
            </p>
            <div class="flex justify-end mt-4">
                <a
                    href="#"
                    class="text-lg font-medium text-blue-600 dark:text-blue-300"
                    tabindex="0"
                    role="link"
                >
                    {{ quote.author }}
                </a>
            </div>
        </RouterLink>
    </div>
</template>
