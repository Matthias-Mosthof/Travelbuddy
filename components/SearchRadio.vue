<script setup lang="ts">
const store = usePostsStore();

const searchTermIsActive = computed(() => store.$state.filter.searchTerm.length > 0);

watch(searchTermIsActive, () => {
  store.filter.advancedSearch.gender = '';
});

</script>

<template>
  <div class="q-pr-sm">
    Geschlecht:
  </div>
  <q-radio
    v-model="store.filter.advancedSearch.gender"
    checked-icon="male"
    label="M"
    size="sm"
    unchecked-icon="panorama_fish_eye"
    val="m"
  />
  <q-radio
    v-model="store.filter.advancedSearch.gender"
    checked-icon="female"
    label="W"
    size="xs"
    unchecked-icon="panorama_fish_eye"
    val="w"
  />

  <q-radio
    v-model="store.filter.advancedSearch.gender"
    checked-icon="task_alt"
    label="egal"
    size="xs"
    unchecked-icon="panorama_fish_eye"
    val=""
  />
</template>
