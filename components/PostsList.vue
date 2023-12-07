<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();
const { removePost } = store;

const state = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);
// const selectedCategories = computed(() => store.getSelectedCategories);

const filteredPosts = computed((): Post[] => state.value.filter((post: Post) => (
  post.text?.includes(filter.value) || post.title?.includes(filter.value)
)));

function triggerRemove(post: Post) {
  removePost(post.id);
}
</script>

<template>
  <div class="q-pa-md">
    <TransitionGroup
      appear
      class="row q-gutter-md"
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      tag="div"
    >
      <q-card
        v-for="post in filteredPosts"
        :key="post.id"
        bordered
        class="my-card q-pa-md"
        dark
        flat
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">
                {{ post.title }}
              </div>
            </div>

            <div
              class="col-auto"
            >
              <q-btn
                v-if="isAdmin"
                color="grey-7"
                flat
                icon="more_vert"
                round
              >
                <q-menu
                  auto-close
                  cover
                >
                  <q-list>
                    <q-item
                      v-close-popup
                      clickable
                      @click="triggerRemove(post)"
                    >
                      <q-item-section>Remove Card</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                      v-close-popup
                      clickable
                    >
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

        <q-card-section> Name: {{ post.name }} </q-card-section>
        <q-card-section> Alter: {{ post.age }} </q-card-section>
        <q-card-section> Geschlecht: {{ post.gender }} </q-card-section>

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

<style scoped>
.my-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  width: 20rem;
}
</style>
