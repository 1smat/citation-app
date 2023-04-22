<script lang="ts" setup>
import { routes } from '@/router'
import { reactive } from 'vue'

const state = reactive({
    isOpen: false,
})
</script>
<template>
    <nav
        x-data="{ isOpen: false }"
        class="relative bg-white shadow dark:bg-gray-800"
    >
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <!-- Mobile menu button -->
                <div class="flex lg:hidden md:hidden">
                    <button
                        x-cloak
                        @click="state.isOpen = !state.isOpen"
                        type="button"
                        class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                        aria-label="toggle menu"
                    >
                        <svg
                            v-show="!state.isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 8h16M4 16h16"
                            />
                        </svg>

                        <svg
                            v-show="state.isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div
                x-cloak
                :class="[
                    state.isOpen
                        ? 'translate-x-0 opacity-100 '
                        : 'opacity-0 -translate-x-full',
                ]"
                class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between"
            >
                <div
                    class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0"
                >
                    <RouterLink
                        to="/"
                        class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 flex items-center justify-between"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                            />
                        </svg>
                    </RouterLink>

                    <RouterLink
                        v-for="route in routes"
                        :to="route.path"
                        v-show="
                            route.name !== 'Home' &&
                            route.name !== 'QuoteView' &&
                            route.name !== 'RandomQuote' &&
                            route.name !== 'QuoteEdit'
                        "
                        class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 flex items-center justify-between"
                    >
                        {{ route.name }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
