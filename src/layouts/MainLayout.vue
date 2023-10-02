<template>
  <q-layout
    view="hhr lpr ffr"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <NavBars />
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NavBars from "src/components/Nav/NavBars.vue";
</script>
