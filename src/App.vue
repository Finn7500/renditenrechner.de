<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Footer from './components/footer.vue';
import Header from './components/header.vue';


</script>


<style>
@import "@/assets/styles/main.scss";

.content {
    margin-top: 100px;
}
</style>
