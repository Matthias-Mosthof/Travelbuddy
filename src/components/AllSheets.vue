<template>
  <div class="q-pa-md">
    <TransitionGroup
      tag="div"
      appear
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      class="row q-gutter-md"
    >
      <q-card
        v-for="(entry, i) in filteredState"
        :key="i"
        dark
        flat
        bordered
        class="my-card q-pa-md"
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">
                {{ entry.title }}
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
        <!-- TODO: Use JS Date Entry for every new sheet instead of firebase timestamp to consume it more conviently -->
        <div class="text-subtitle3 text-grey-6 q-pl-md">
          Created at
          {{
            entry.createdAt.toDate().toDateString() +
            ", " +
            entry.createdAt.toDate().toLocaleTimeString("de-DE")
          }}
        </div>
      </q-card>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCheatSheetStore } from "stores/cheatsheetStore.js";

const store = useCheatSheetStore();
const { removeSheet } = store;

const state = computed(() => store.getCheatSheets);

const filter = computed(() => store.getFilter);

const filteredState = computed(() => {
  return state.value.filter((sheet) => {
    return (
      sheet.text.includes(filter.value) || sheet.title.includes(filter.value)
    );
  });
});

function triggerRemove(entry) {
  removeSheet(entry.id);
}
</script>

<style scoped>
.my-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  width: 20rem;
}
</style>
