<script setup lang="ts">

</script>

<template>
  <div class="under-construction">
    <h1>Page under construction</h1>
    <p>This page is not ready yet. Please come back later.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<style scoped>
.under-construction {
  text-align: center;
  margin-top: 50px;
}

.under-construction h1 {
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 40px;
  }
  @media (max-width: 767px) {
    font-size: 32px;
  }
}

.under-construction p {
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
}
</style>
