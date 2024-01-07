<script setup lang="ts">
const store = usePostsStore();

function triggerAdvancedSearch() {
  store.filter.advancedSearch.isActive = true;
  store.resetPagination();
  store.fetchLimitedPosts();
}
</script>

<template>
  <q-expansion-item
    v-model="store.filter.advancedSearch.isActive"
    :disable="store.filter.searchTerm.length > 0"
    icon="manage_search"
    label="Erweiterte Suche"
  >
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
        >
          <q-icon
            name="search"
            right
            size="xs"
          />
        </q-btn>
      </div>
    </q-form>
  </q-expansion-item>
</template>
