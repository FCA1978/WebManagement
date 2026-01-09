<template>
  <div class="page-wrapper">
    <IntroSection />
    <BannerSection />
  </div>
</template>

<script setup lang="ts">
import IntroSection from './components/IntroSection.vue'

import BannerSection from './components/BannerSection.vue'
</script>


<style scoped lang="scss">
.page-wrapper {
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.page-wrapper::-webkit-scrollbar {
  display: none;
}
</style>