<script setup lang="ts">
const title: string = "Hello, Nuxt!";
</script>

<template>
  <div>
    <TheHeader />

    <Heading :titleText="title" />

    <p>Sampleページです</p>
    <NuxtLink to="/about">Aboutページへ</NuxtLink>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
