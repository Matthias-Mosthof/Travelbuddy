<script setup lang="ts">

const toggleCard = ref(false);
const postsStore = usePostsStore();
const { addPost } = postsStore;

const fieldRef = ref(null);
const newPost = ref();

const themeOptions = ref(
  ['Standard',
    'Winter',
    'Sommer',
    'Herbst',
    'Frühling',
    'Weltreise'],
);

const postTitle = ref('');
const postText = ref('');
const postEmail = ref('');
const postAge = ref(0);
const postGender = ref('');
const postName = ref('');
const postTheme = ref('');

const userInput = computed((): NewPost => ({
  title: postTitle.value,
  text: postText.value,
  name: postName.value,
  age: postAge.value,
  gender: postGender.value,
  email: postEmail.value,
  theme: postTheme.value,
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
    <div class="row q-gutter-md q-ml-none">
      <q-input
        ref="newPost"
        v-model="postName"
        class="rounded-borders"
        filled
        hint="Dieser Name wird öffentlich angezeigt"
        label="Dein Vorname oder Spitzname"
        outlined
        required
        standout="bg-teal-1 text-black"
        style="min-width: 20rem;"
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
    </div>

    <div class="row items-center content-center">
      Du bist:
      <q-field
        ref="fieldRef"
        v-model="postGender"
        filled
        :rules="[value => !!value || 'Field is required']"
        stack-label
      >
        <q-radio
          v-model="postGender"
          checked-icon="female"
          label="Weiblich"
          size="xs"
          val="w"
        />

        <q-radio
          v-model="postGender"
          checked-icon="male"
          label="Männlich"
          size="xs"
          unchecked-icon="panorama_fish_eye"
          val="m"
        />
      </q-field>
    </div>
    <q-input
      ref="newPost"
      v-model="postEmail"
      class="rounded-borders"
      filled
      label="Deine E-Mail (wird nicht öffentlich angezeigt)"
      required
      standout="bg-teal-1 text-black"
      type="email"
    />
    <q-select
      ref="newPost"
      v-model="postTheme"
      class="rounded-borders"
      filled
      label="Das Aussehen deines Posts"
      :options="themeOptions"
      required
      standout="bg-teal-1 text-black"
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
</template>
