<script setup lang="ts">
const store = usePostsStore();
const loadingState = computed(() => store.getLoadingState);
</script>

<template>
  <q-card
    bordered
    class="relative-position no-border"
    flat
    no-outline
  >
    <q-card-section
      class="q-pb-xl "
      no-outline
    >
      <q-inner-loading :showing="loadingState">
        <q-spinner-gears
          color="primary"
          size="xl"
        />
      </q-inner-loading>
    </q-card-section>
  </q-card>
</template>
