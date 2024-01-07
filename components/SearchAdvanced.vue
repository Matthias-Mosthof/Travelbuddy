<script setup lang="ts">
const store = usePostsStore();

function triggerAdvancedSearch() {
  store.$state.filter.advancedSearch.isActive = true;
  store.resetPagination();
  store.fetchLimitedPosts();
}
</script>

<template>
  <q-form
    class="q-gutter-md"
    @submit="triggerAdvancedSearch"
  >
    <div class="column ">
      <div />
      <div class="row items-center align-center">
        <SearchRange />
      </div>
      <div class="row items-center">
        <SearchRadio />
      </div>
      <q-btn
        color="primary"
        label="Suchen"
        type="submit"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        flat
        label="Abbrechen"
        type="reset"
      />
    </div>
  </q-form>
</template>
