<script setup lang="ts">

const parentprops = defineProps({
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
});

const messageContent = ref('');
const messageEmail = ref('');
const messageName = ref('');
const showExpansion = ref();

function triggerSendMessage() {
  const message: Message = {
    text: messageContent.value,
    fromEmail: messageEmail.value,
    toEmail: parentprops.email,
    fromName: messageName.value,
    toName: parentprops.name,

  };
  sendMessage(message);
  showExpansion.value = false;
}

</script>

<template>
  <q-expansion-item
    dense
    dense-toggle
    :duration="1500"
    expand-separator
    header-class="text-secondary"
    icon="message"
    :label="`Nachricht an ${name} Senden`"
    :model-value="showExpansion"
    style="width: 300px"
  >
    <q-form
      class="q-gutter-md"
      @submit="triggerSendMessage"
    >
      <q-input
        v-model="messageContent"
        class="rounded-borders q-mt-xl bg-green-3"
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
      <q-input
        v-model="messageName"
        class="rounded-borders bg-green-3"
        filled
        label="Dein Nickname"
        required
        standout="bg-green-4 text-white"
        type="text"
      />
      <q-btn
        color="primary"
        icon="check"
        label="Senden"
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
  </q-expansion-item>
</template>
