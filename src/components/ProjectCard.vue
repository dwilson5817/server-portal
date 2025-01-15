<script setup lang="ts">
import { Project } from "../types.ts";

const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-2">
          <img :src="props.project.image" :alt="props.project.title + ' logo'" class="d-none d-lg-inline-block w-100 mb-2 mb-md-0">
        </div>
        <div class="col-lg-10">
          <h5 class="card-title">{{ props.project.title }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{{ props.project.subtitle }}</h6>
          <p class="card-text">{{ props.project.description }}</p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <a v-for="link in props.project.links" :href="link.url" class="card-link text-decoration-none fw-semibold">{{ link.text }}</a>
    </div>
  </div>
</template>
