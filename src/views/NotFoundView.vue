<script setup lang="ts">

</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  margin-top: 50px;
  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;

    @media (max-width: 1023px) {
      font-size: 40px;
    }

    @media (max-width: 767px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 24px;
    margin-bottom: 20px;

    @media (max-width: 1023px) {
      font-size: 22px;
    }

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
}
</style>
