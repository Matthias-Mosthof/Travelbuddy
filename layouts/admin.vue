<template>
  <q-layout
    class="shadow-2 rounded-borders"
    container
    style="height: 100vh"
    view="hhr lpr ffr"
  >
    <NavBars />
    <q-page-container>
      <q-page
        class="q-pa-md bg-secondary"
        padding
      >
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
