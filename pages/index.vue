<script setup lang="ts">
const title: string = "Hello, Nuxt!";
const pagePath: string = usePathName();
</script>

<template>
  <div>
    <TheHeader />

    <Heading :titleText="title" />

    <p>Sampleページです</p>
    <p>このページのURL：{{ pagePath }}</p>

    <NuxtLink to="/about">Aboutページへ</NuxtLink>
  </div>
</template>

<style>
h1 {
  color: red;
}
</style>
