<script setup lang="ts">
const store = usePostsStore();

const rangeLabel: Ref<AgeRange> = ref({ min: 18, max: 99 });

function triggerFilter() {
  setTimeout(() => {
    store.filter.advancedSearch.ageRange.min = rangeLabel.value.min;
    store.filter.advancedSearch.ageRange.max = rangeLabel.value.max;
  }, 200);
}
</script>

<template>
  <div class="q-pr-md ">
    Alter von/bis:
  </div>
  <q-range
    v-model="rangeLabel"
    class="q-pl-md"
    color="primary"
    label
    markers
    :max="99"
    :min="18"
    :step="1"
    style="width:120px"
    @change="triggerFilter"
  />
</template>
