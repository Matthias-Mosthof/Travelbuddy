<script setup lang="ts">

defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});
const gender = ref('mä');
const rangeLabel = ref({ min: 18, max: 99 });

function triggerFilter() {
  console.log(rangeLabel.value);
}
</script>

<template>
  <div
    class="q-pa-md  justify-content column  items-center"
  >
    <h1
      id="heading"
    >
      Postübersicht
    </h1>
    <q-form
      class="q-pa-md q-ma-md fit row wrap justify-around filter-bar items-center"
      style="max-width: 45rem;"
    >
      <SearchInput placeholder="Dein Suchbegriff.." />

      <div class="column ">
        <div class="row items-center align-center">
          <div class="q-pr-md ">
            Alter von/bis:
          </div>

          <q-range
            v-model="rangeLabel"
            class="q-pl-md"
            color="primary"
            label-always
            markers
            :max="99"
            :min="18"
            :step="1"
            style="width:120px"
            @change="triggerFilter"
          />
        </div>

        <div class="row items-center">
          <div class="q-pr-sm">
            Geschlecht:
          </div>
          <q-radio
            v-model="gender"
            checked-icon="male"
            label="M"
            size="sm"
            unchecked-icon="panorama_fish_eye"
            val="m"
          />
          <q-radio
            v-model="gender"
            checked-icon="female"
            label="W"
            size="xs"
            unchecked-icon="panorama_fish_eye"
            val="w"
          />

          <q-radio
            v-model="gender"
            checked-icon="task_alt"
            label="egal"
            size="xs"
            unchecked-icon="panorama_fish_eye"
            val="egal"
          />
        </div>
      </div>
    </q-form>

    <TransitionGroup
      appear
      class="column q-gutter-md q-mx-xl items-center"
      enter-active-class="animated fadeIn"
      enter-leave-class="animated fadeOut"
      tag="div"
    >
      <PublicSceletonPosts
        v-if="posts.length < 1"
        key="2"
        class="one-post"
      />

      <p
        v-if="posts.length < 1"
        key="3"
      >
        Du siehst keine Daten, weil du kein Zugriff auf die Datenbank hast.
        <!-- Nur im development -->
      </p>

      <q-card
        v-for="post in posts"
        :key="post.id"
        bordered
        class="q-pa-md one-post status-released"
        dark
        flat
      >
        <PostContent
          :post-age="post.age"
          :post-name="post.name"
          :post-text="post.text"
          :post-title="post.title"
        />

        <PublicMessageForm
          :email="post.email"
          :name="post.name"
        />

        <PostAdd />
      </q-card>
      <PublicPostPagination key="5" />
    </TransitionGroup>
  </div>
</template>

<style scoped>

.post-container {
  max-width: 100em;
}
.status-released {
    background: radial-gradient(ellipse at bottom left, #003f15e3 0%, #011300 100%);
}
.one-post {
    width: 50rem;
}

.filter-bar {
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
}
</style>
