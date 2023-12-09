<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
});

const showMessageModal = ref(false);
const messageContent = ref('');
const messageEmail = ref('');

function sendMail(email: string) {
  console.log(email);
  showMessageModal.value = false;
}

function onReset() {
  console.log('closed');
}

</script>

<template>
  <q-btn
    class="q-ma-md"
    color="primary"
    dense
    icon="message"
    label="Nachricht senden"
    @click="showMessageModal = true"
  />
  <q-dialog
    v-model="showMessageModal"
    persistent
  >
    <div>
      <q-form
        class="q-gutter-md"
        @reset="onReset"
        @submit="sendMail(email)"
      >
        <q-input
          v-model="messageContent"
          class="rounded-borders bg-green-3"
          filled
          :label="`Deine Nachricht an ${name}`"
          required
          standout="bg-green-4 text-white"
          type="textarea"
        />

        <q-input
          v-model="messageEmail"
          class="rounded-borders bg-green-3"
          filled
          label="Deine Email Adresse"
          required
          standout="bg-green-4 text-white"
          type="email"
        />
        <q-btn
          color="primary"
          icon="check"
          label="Veröffentlichen"
          type="submit"
        />
        <q-btn
          v-close-popup
          color="secondary"
          icon="cancel"
          label="Abbrechen"
          type="cancel"
        />
      </q-form>
    </div>
  </q-dialog>
</template>
