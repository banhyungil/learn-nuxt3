<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}))
</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="About" to="/about" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Course" to="/course/123" />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
