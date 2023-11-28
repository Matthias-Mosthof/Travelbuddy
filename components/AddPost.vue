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

  <q-dialog v-model="toggleCard">
    <div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          v-model="postTitle"
          bg-color="indigo-2"
          type="text"
          label="Überschrift"
          filled
          required
        />
        <q-input
          filled
          v-model="postText"
          type="textarea"
          label="Deine Beschreibung"
          ref="newPost"
          :rules="inputRule"
          required
        />
        <q-input
          filled
          v-model="postEmail"
          type="email"
          label="Deine E-Mail"
          ref="newPost"
          :rules="inputRule"
          required
        />
        <!-- <q-input
          filled
          v-model="sheetCategory"
          type="text"
          label="Kategorie (optional)"
          ref="newSheet"
        /> -->
        <q-btn color="primary" icon="check" label="Fire" type="submit" />
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
const toggleCard = ref(false);

const postsStore = usePostsStore();
const { addPost } = postsStore;

const newPost = ref();

const postTitle = ref();
const postText = ref();
const postEmail = ref();

// const postCategory = ref();

const inputRule = computed(() => [
  (val: string) =>
    (val && val.length > 0) || val === null || "Bitte schreibe etwas",
]);

function onSubmit() {
  addPost(postTitle.value, postText.value);
  // newSheet.category = postCategory.value || "";
  onReset();
  toggleCard.value = false;
}

function onReset() {
  postTitle.value = null;
  postTitle.value = null;
  newPost.value.focus();
}
</script>
