<script setup lang="ts">
defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
  releasedPosts: {
    type: Array as () => Post[],
    required: true,
  },
  rejectedPosts: {
    type: Array as () => Post[],
    required: true,
  },
});

const selected = ref([] as Post[]);
const store = usePostsStore();
const openDialog = ref(false);

const releaseSelection = ref(false);
const rejectSelection = ref(false);
const removeSelection = ref(false);

function setToFalse() {
  if (rejectSelection.value === true) rejectSelection.value = false;
  if (releaseSelection.value === true) releaseSelection.value = false;
  if (removeSelection.value === true) removeSelection.value = false;
}
// TODO: this is all proviosionally and needs refactoring
function triggerSelectedAction() {
  if (rejectSelection.value) {
    selected.value.forEach((p: Post) => store.rejectPost(p.id));
  }
  if (releaseSelection.value) {
    selected.value.forEach((p: Post) => store.releasePost(p.id));
  }
  if (removeSelection.value) {
    selected.value.forEach((p: Post) => store.removePost(p.id));
  }
  setToFalse();
}

const hintMessage = computed(() => {
  if (rejectSelection.value) {
    return 'Ablehnen';
  }
  if (releaseSelection.value) {
    return 'Freigeben';
  }
  if (removeSelection.value) {
    return 'Löschen';
  }
  return '';
});

</script>

<template>
  <q-table
    v-model:selected="selected"
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat
    :rows="posts"
    :rows-per-page-options="[5, 10,0]"
    selection="multiple"
    title="Alle Posts"
    :wrap-cells="true"
  />

  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat

    :rows="releasedPosts"
    :rows-per-page-options="[5, 10,0]"
    title="Freigegebene Posts"
    :wrap-cells="true"
  />

  <q-table
    bordered
    class="q-my-lg"
    :columns="adminPostColumns"
    dense
    flat
    :rows="rejectedPosts"
    :rows-per-page-options="[5, 10,0]"
    title="Abgelehnte Posts"
    :wrap-cells="true"
  />

  <q-page-sticky
    :offset="[18, 18]"
    position="bottom-right"
  >
    <div class="q-gutter-md">
      <q-btn
        v-if="selected.length > 0"
        color="green"
        icon-right="check"
        label="Auswahl Freigeben"
        @click="releaseSelection = true, openDialog = true"
      />

      <q-btn
        v-if="selected.length > 0"
        color="orange-8"
        icon-right="delete"
        label="Auswahl Löschen"
        @click="removeSelection = true, openDialog = true"
      />

      <q-btn
        v-if="selected.length > 0"
        color="red"
        icon-right="cancel"
        label="Auswahl Ablehnen"
        @click="rejectSelection = true, openDialog = true"
      />
    </div>
  </q-page-sticky>

  <q-dialog
    v-model="openDialog"
    icon="check"
    persistent
  >
    <div>
      <q-card
        class="bg-red-6 text-white q-pa-md"
        style="width: 400px"
      >
        <q-card-section>
          <div class="text-h6">
            Sind Sie sicher diese {{ selected.length }} Posts {{ hintMessage }} möchten?
          </div>
        </q-card-section>

        <q-card-section
          v-for="selectedPost in selected"
          :key="selectedPost.id"
          class="q-ma-xs q-pa-xs"
        >
          - "{{ selectedPost.title }}"" von "{{ selectedPost.name }}"
        </q-card-section>

        <q-card-actions
          align="right"
          class="bg-black text-teal"
        >
          <q-btn
            v-close-popup
            color="blue"
            flat
            label="Abbrechen"
            @click="setToFalse"
          />
          <q-btn
            v-close-popup
            color="red"
            flat
            icon-right="check"
            :label="`Endgültig ${hintMessage}`"
            @click="triggerSelectedAction"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-dialog>
</template>
