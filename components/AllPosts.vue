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
        v-for="(post, i) in filteredPosts"
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
                {{ post.title }}
              </div>
            </div>

            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item
                      clickable
                      @click="triggerRemove(post)"
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
          {{ post.text }}
        </q-card-section>
        <!-- TODO: Use JS Date Entry for every new sheet instead of firebase timestamp to consume it more conviently -->
        <div class="text-subtitle3 text-grey-6 q-pl-md">
          Created at
          {{
            post.createdAt.toDate().toDateString() +
            ", " +
            post.createdAt.toDate().toLocaleTimeString("de-DE")
          }}
        </div>
        <!-- <div>{{ post.category }}</div> -->
      </q-card>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const store = usePostsStore();
const { removePost } = store;

const state = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);
// const selectedCategories = computed(() => store.getSelectedCategories);

const filteredPosts = computed(() => {
  return state.value.filter((post) => {
    return (
      post.text?.includes(filter.value) || post.title?.includes(filter.value)
    );
  });
});

function triggerRemove(post: Post) {
  removePost(post.id);
}
</script>

<style scoped>
.my-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  width: 20rem;
}
</style>
