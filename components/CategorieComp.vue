<!-- <template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio
        v-for="item in categories"
        :key="item"
        v-model="selection"
        :label="item"
        :val="item"
        @click="addSelection"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const selection = ref([]);
const store = usePostsStore();
const categories = computed(() => store?.getCategories);

function addSelection() {
  store.addSelectedCategorie(selection.value);
}
</script> -->
<template></template>
