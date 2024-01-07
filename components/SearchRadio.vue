<script setup lang="ts">
const store = usePostsStore();

const gender = ref('');
function triggerGenderFilter() {
  setTimeout(() => {
    store.filter.advancedSearch.gender = gender.value;
  }, 200);
}
</script>

<template>
  <div class="q-pr-sm">
    Geschlecht:
  </div>
  <q-radio
    v-model="gender"
    checked-icon="male"
    label="M"
    size="sm"
    unchecked-icon="panorama_fish_eye"
    val="m"
    @click="triggerGenderFilter"
  />
  <q-radio
    v-model="gender"
    checked-icon="female"
    label="W"
    size="xs"
    unchecked-icon="panorama_fish_eye"
    val="w"
    @click="triggerGenderFilter"
  />

  <q-radio
    v-model="gender"
    checked-icon="task_alt"
    label="egal"
    size="xs"
    unchecked-icon="panorama_fish_eye"
    val=""
    @click="triggerGenderFilter"
  />
</template>
