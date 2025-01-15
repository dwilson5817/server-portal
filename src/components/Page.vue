<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
import ProjectCard from "./ProjectCard.vue";
import { PROJECTS, SERVICES } from '../constants.ts';
</script>

<template>
  <div class="container my-3">
    <div class="accordion" id="accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Services
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div v-for="service in SERVICES.sort((a, b) => a.title.localeCompare(b.title))" class="col">
                <ServiceCard :service />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
            Projects
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div v-for="project in PROJECTS.sort((a, b) => a.title.localeCompare(b.title))" class="col">
                <ProjectCard :project />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
