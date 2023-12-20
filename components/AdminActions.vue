<script setup lang="ts">
const props = defineProps({
  selected: {
    type: Array as () => Post[],
    required: true,
  },
});

// TODO: this is all proviosionally and needs refactoring
const store = usePostsStore();

const releaseSelection = ref(false);
const rejectSelection = ref(false);
const removeSelection = ref(false);

const openDialog = ref(false);

function setToFalse() {
  if (rejectSelection.value === true) rejectSelection.value = false;
  if (releaseSelection.value === true) releaseSelection.value = false;
  if (removeSelection.value === true) removeSelection.value = false;
}

function triggerSelectedAction() {
  if (rejectSelection.value) {
    props.selected.forEach((p: Post) => store.rejectPost(p.id));
  }
  if (releaseSelection.value) {
    props.selected.forEach((p: Post) => store.releasePost(p.id));
  }
  if (removeSelection.value) {
    props.selected.forEach((p: Post) => store.removePost(p.id));
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
            Sind Sie sicher, dass Sie diese {{ selected.length }} Posts {{ hintMessage }} möchten?
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
