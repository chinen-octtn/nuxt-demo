<script setup lang="ts">
const pagePath: string = usePathName();
</script>

<template>
  <div>
    <h1>About</h1>
    <p>下層ページです</p>
    <p>このページのURL：{{ pagePath }}</p>
  </div>
</template>

<style></style>
