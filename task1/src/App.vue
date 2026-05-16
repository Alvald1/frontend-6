<template>
  <div class="page">
    <RegisterForm />
  </div>
</template>

<script setup>
import RegisterForm from './components/RegisterForm.vue'
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  background: #f5f5f5;
}

.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
