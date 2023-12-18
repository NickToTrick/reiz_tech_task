<script setup lang="ts">
import CustomIcon from "@/components/common/CustomIcon.vue";
import {ref} from "vue";

const searchIconColor = ref('#ADA7A7');

const onFocus = () => {
  searchIconColor.value = 'var(--blue)';
};

const onBlur = () => {
  searchIconColor.value = '#ADA7A7';
};
</script>

<template>
  <nav class="navbar">
    <div class="search-bar">
      <div class="custom-icon">
        <label for="searchInput">
          <CustomIcon icon="search" :color="searchIconColor"/>
        </label>
      </div>
      <input
          id="searchInput"
          type="text"
          placeholder="Search"
          @focus="onFocus"
          @blur="onBlur"
      />
    </div>
    <div class="actions">
      <button class="notifications-button">
        <span class="indicator"></span>
        <CustomIcon icon="notification" color="#ADA7A7"/>
      </button>
      <div class="profile">
        <img src="@/assets/images/profile.jpg" alt="Profile"/>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 3rem;
  @media (max-width: 479px) {
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
}

.search-bar {
  width: 100%;
  max-width: 655px;
  position: relative;
  margin-right: 1rem;

  @media (max-width: 1200px) {
    max-width: 500px;
  }

  @media (max-width: 479px) {
    margin-right: 0;
  }

  input {
    padding: 12px 24px 12px 59px;
    width: 100%;
  }
}

.actions {
  display: flex;
  @media (max-width: 479px) {
    order: -1;
    margin-left: auto;
    margin-bottom: 20px;
  }
}

.notifications-button, .profile {
  position: relative;
  background: #fff;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 51px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.profile {
  margin-left: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

.custom-icon {
  position: absolute;
  left: 20px;
  top: 0;
  transform: translate(0, 50%);
}

.indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #FFBC0F;
  position: absolute;
  right: -5px;
  top: -3px;
}
</style>
