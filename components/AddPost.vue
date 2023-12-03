<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      icon="add"
      label="Add new Post"
      color="primary"
      @click="toggleCard = true"
    />
  </q-page-sticky>

  <q-dialog v-model="toggleCard" persistent>
    <div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          class="rounded-borders bg-green-3"
          v-model="postTitle"
          type="text"
          label="Überschrift"
          filled
          required
          standout="bg-green-4 text-white"
        />
        <q-input
          class="rounded-borders bg-green-3"
          filled
          v-model="postText"
          type="textarea"
          label="Deine Beschreibung"
          ref="newPost"
          standout="bg-green-4 text-white"
          required
        />

        <q-input
          class="rounded-borders bg-green-3"
          filled
          v-model="postName"
          type="text"
          label="Dein Vorname"
          ref="newPost"
          standout="bg-green-4 text-white"
          required
        />
        <q-input
          class="rounded-borders bg-green-3"
          filled
          v-model="postAge"
          type="number"
          label="Dein Alter"
          ref="newPost"
          standout="bg-green-4 text-white"
          required
        />
        <q-select
          class="rounded-borders bg-green-3"
          v-model="postGender"
          :options="genderOptions"
          label="Geschlecht"
          filled
          standout="bg-green-4 text-white"
        />
        <q-input
          class="rounded-borders bg-green-3"
          filled
          v-model="postEmail"
          type="email"
          label="Deine E-Mail (wird nicht veröffentlicht)"
          ref="newPost"
          required
          standout="bg-green-4 text-white"
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
          color="secondary"
          icon="cancel"
          label="Abbrechen"
          type="cancel"
          v-close-popup
        />
      </q-form>
    </div>
  </q-dialog>
</template>

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
const userInput = computed((): NewPost => {
	return {
		title: postTitle.value,
		text: postText.value,
		name: postName.value,
		age: postAge.value,
		gender: postGender.value,
		email: postEmail.value,
	};
});

const inputRule = computed(() => [
	(val: string) =>
		(val && val.length > 0) || val === null || 'Bitte schreibe etwas',
]);

function onSubmit() {
	addPost(userInput.value as NewPost);
	// newSheet.category = postCategory.value || "";
	onReset();
	toggleCard.value = false;
}

function onReset() {
	postTitle.value = '';
	postText.value = '';
	postEmail.value = '';
	postAge.value = 0;
	postGender.value = '';
	postName.value = '';
	newPost.value.focus();
}
</script>
