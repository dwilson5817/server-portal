<script setup lang="ts">
import { Service } from '../types.ts';

const props = defineProps<{
  service: Service
}>()
</script>

<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ props.service.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ props.service.subtitle }}</h6>
      <p class="card-text">{{ props.service.description }}</p>
    </div>
    <div class="card-footer">
      <a v-for="link in props.service.links" :href="link.url" class="card-link text-decoration-none fw-semibold">{{ link.text }}</a>
    </div>
  </div>
</template>
