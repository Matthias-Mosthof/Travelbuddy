<script setup lang="ts">

defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const store = usePostsStore();

const state = computed(() => store.getPosts);

const filter = computed(() => store.getFilter);

const filteredPosts = computed((): Post[] => state.value.filter((post: Post) => (
  post.text?.includes(filter.value) || post.title?.includes(filter.value)
)));

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
                <AdminPostSettings />
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          {{ post.text }}
        </q-card-section>

        <q-card-section>
          Name: {{ post.name }}
        </q-card-section>
        <q-card-section>
          Alter: {{ post.age }}
        </q-card-section>
        <q-card-section>
          Geschlecht: {{ post.gender }}
        </q-card-section>

        <div class="text-subtitle3 text-grey-6 q-pl-md">
          Created at
          {{
            post.created_at
          }}
        </div>
        <MessageDialog
          :email="post.email"
          :name="post.name"
        />
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
