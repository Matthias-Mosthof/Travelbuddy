<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md">
      <q-card
        v-for="(entry, i) in state"
        :key="i"
        dark
        flat
        bordered
        class="text-white my-card"
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">
                {{ entry.title }}
              </div>
              <div class="text-subtitle2">
                {{ entry.createdAt }}
              </div>
            </div>

            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item
                      clickable
                      @click="triggerRemove(entry)"
                      v-close-popup
                    >
                      <q-item-section>Remove Card</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section>Edit Card</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          {{ entry.text }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";

const store = useCheatSheetStore();
const { removeSheet } = store;

const state = computed(() => {
  return store.getCheatSheets;
});

function triggerRemove(entry) {
  console.log(entry.id, "heeere");
  removeSheet(docId);
  console.log("remooove");
}
</script>

<style scoped>
.my-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  width: 20rem;
}
</style>
