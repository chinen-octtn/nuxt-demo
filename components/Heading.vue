<script setup lang="ts">
const props = defineProps({
  titleText: String,
});
</script>

<template>
  <h1>
    {{ titleText }}
  </h1>
</template>
