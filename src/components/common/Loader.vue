<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div class="loader" v-if="props.isLoading">
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="2"/>
    </svg>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.circular-loader {
  animation: rotate 2s linear infinite;
  height: 75px;
  width: 75px;
}

.loader-path {
  stroke: #0056b3;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
