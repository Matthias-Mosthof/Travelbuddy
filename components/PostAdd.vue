<script setup lang="ts">

const toggleCard = ref(false);
const postsStore = usePostsStore();
const { addPost } = postsStore;

const newPost = ref();
const genderOptions = ref(['männlich', 'weiblich', 'divers']);

const postTitle = ref('');
const postText = ref('');
const postEmail = ref('');
const postAge = ref(0);
const postGender = ref('');
const postName = ref('');
// const postCategory = ref();
const userInput = computed((): NewPost => ({
  title: postTitle.value,
  text: postText.value,
  name: postName.value,
  age: postAge.value,
  gender: postGender.value,
  email: postEmail.value,
  released: false,
  rejected: false,
}));

function onReset() {
  postTitle.value = '';
  postText.value = '';
  postEmail.value = '';
  postAge.value = 0;
  postGender.value = '';
  postName.value = '';
  newPost.value.focus();
}

function onSubmit() {
  addPost(userInput.value as NewPost);
  // newSheet.category = postCategory.value || "";
  onReset();
  toggleCard.value = false;
}

</script>

<template>
  <!-- <q-page-sticky
    :offset="[18, 18]"
    position="bottom-right"
  >
    <q-btn
      color="primary"
      fab
      icon="add"
      label="Add new Post"
      @click="toggleCard = true"
    />
  </q-page-sticky>

  <q-dialog
    v-model="toggleCard"
    persistent
  >
    <div> -->
  <q-form
    class="q-gutter-md"
    @reset="onReset"
    @submit="onSubmit"
  >
    <q-input
      v-model="postTitle"
      class="rounded-borders"
      filled
      label="Der Titel deiner Anzeige"
      required
      standout="bg-teal-1 text-black"
      type="text"
    />
    <q-input
      ref="newPost"
      v-model="postText"
      class="rounded-borders"
      filled
      label="Deine Beschreibung"
      outlined
      required
      standout="bg-teal-1"
      type="textarea"
    />

    <q-input
      ref="newPost"
      v-model="postName"
      class="rounded-borders"
      filled
      label="Dein Vorname oder Spitzname (dieser Name wird öffentlich angezeigt)"
      outlined
      required
      standout="bg-teal-1 text-black"
      type="text"
    />
    <q-input
      ref="newPost"
      v-model="postAge"
      class="rounded-borders  "
      filled
      label="Dein Alter"
      required
      standout="bg-teal-1 text-black"
      type="number"
    />
    <q-select
      v-model="postGender"
      class="rounded-borders"
      filled
      label="Geschlecht"
      :options="genderOptions"
      standout="bg-teal-1 text-black"
    />
    <q-input
      ref="newPost"
      v-model="postEmail"
      class="rounded-borders"
      filled
      label="Deine E-Mail (wird nicht veröffentlicht)"
      required
      standout="bg-teal-1 text-black"
      type="email"
    />
    <!-- <q-input
          filled
          v-model="sheetCategory"
          type="text"
          label="Kategorie (optional)"
          ref="newSheet"
        /> -->
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
    <!-- </q-form>
    </div>
  </q-dialog> -->
  </q-form>
</template>
