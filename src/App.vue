<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Layout/Header.vue'
import Container from '@/components/Layout/Container.vue'
</script>

<template>
  <div>
    <Header />
    <Container>
      <router-view />
    </Container>
  </div>
</template>
