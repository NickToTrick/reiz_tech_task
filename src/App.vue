<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

const route = useRoute();
</script>

<template>
  <div class="wrapper">
    <Sidebar/>
    <main :class="{ 'full-height': route.name !== 'ProductDetail' }">
      <Navbar/>
      <div class="page-content">
        <RouterView/>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">

.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 230px;

  @media (max-width: 1023px) {
    padding-left: 0;
  }
}

main {
  width: 100%;
  padding: 56px 41px 41px;
  overflow: auto;
  background-color: var(--color-background-custom);

  &.full-height {
    min-height: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    padding: 56px 30px 30px;
  }
  @media (max-width: 767px) {
    padding: 56px 20px 20px;
  }
  @media (max-width: 479px) {
    padding: 20px 20px 20px;
  }
}

.page-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
</style>
