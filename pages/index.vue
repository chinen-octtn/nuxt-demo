<script setup lang="ts">
const title: string = "Hello, Nuxt!";
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Sampleページです</p>
    <NuxtLink to="/about">Aboutページへ</NuxtLink>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
