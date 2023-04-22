<template>
	<RouterLink v-for="route in routes" :to="route.path" class="text-blue-600 bg-white p-4">
		{{ route.name }}
	</RouterLink>
</template>

<script lang="ts" setup>
import { routes } from '@/router';

</script>



<style scoped></style>