<script setup lang="ts">
import {ref} from 'vue';
import {RouterLink, useRoute} from 'vue-router';
import CustomIcon from "@/components/common/CustomIcon.vue";

const route = useRoute();

const menuItems = ref([
  {icon: 'dashboard', text: 'Dashboard', path: '/'},
  {icon: 'lab-test', text: 'Lab Test', path: '/lab-test'},
  {icon: 'appointment', text: 'Appointment', path: '/appointment'},
  {icon: 'medicine-order', text: 'Medicine Order', path: '/medicine-order'},
  {icon: 'message', text: 'Message', path: '/message'},
  {icon: 'payment', text: 'Payment', path: '/payment'},
  {icon: 'settings', text: 'Settings', path: '/settings'},
]);

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const onMenuItemClick = () => {
  if (window.innerWidth <= 1023) {
    isSidebarOpen.value = false;
  }
};
</script>

<template>
  <span class="burger-btn" @click="toggleSidebar"><CustomIcon color="var(--blue)" icon="burger"/></span>
  <aside class="sidebar" :class="{ 'is-open': isSidebarOpen }">
    <span class="close-btn" @click="toggleSidebar"><CustomIcon color="var(--blue)" icon="close"/></span>
    <router-link to="/" class="logo">Sales.</router-link>
    <ul class="menu">
      <li class="menu-item" v-for="item in menuItems" :key="item.text">
        <router-link :to="item.path" @click="onMenuItemClick">
          <span class="custom-icon">
            <CustomIcon :icon="item.icon" :is-filled="route.path === item.path"/>
          </span>
          <span>{{ item.text }}</span>
        </router-link>
      </li>
    </ul>
    <div class="menu-item">
      <router-link to="/help" @click="onMenuItemClick">
        <span class="custom-icon">
          <CustomIcon icon="question" :is-filled="route.path === 'help'"/>
        </span>
        <span>Help</span>
      </router-link>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  width: 230px;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #fff;
  height: 100%;
  z-index: 10;

  &.is-open {
    transform: translateX(0);
  }

  @media (max-width: 1023px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.menu-item {
  margin-bottom: 26px;

  > a {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--color-text-custom);
    padding: 7px 10px 7px 41px;

    @media (max-width: 1023px) {
      padding: 7px 10px 7px 20px;
    }
  }

  .router-link-active {
    color: var(--blue);

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: var(--blue);
    }
  }
}

.custom-icon {
  display: inline-block;
  margin-right: 15px;
}

.logo {
  display: inline-block;
  color: #013CC6;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 52px 0 56px 26px;

  @media (max-width: 1023px) {
    margin: 25px 0 20px 25px;
  }
}

.burger-btn, .close-btn {
  z-index: 1;
  display: none;
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 3px;

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.burger-btn {
  top: 13px;
  left: 30px;

  @media (max-width: 767px) {
    left: 20px;
  }
  @media (max-width: 479px) {
    top: 30px;
  }
}

.close-btn {
  right: 15px;
  top: 15px;
}
</style>
