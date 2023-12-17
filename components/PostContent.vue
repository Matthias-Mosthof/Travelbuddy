<script setup lang="ts">
defineProps({
  postName: {
    type: String,
    default: '',
  },
  postAge: {
    type: Number,
    default: null,
  },
  postTitle: {
    type: String,
    default: '',
  },
  postText: {
    type: String,
    default: '',
  },
});

const postTextRef = ref();
const elHeight = ref(0);
const textIsLong = ref(true);
const toggleReadMore = ref(false);

function getTextHeight() {
  const el = postTextRef.value as HTMLElement;
  elHeight.value = el.clientHeight;

  if (elHeight.value < 200) {
    textIsLong.value = false;
  }
  el.style.maxHeight = '200px';
}

onMounted(() => {
  getTextHeight();
});

function shrinkOrExpand() {
  const el = postTextRef.value as HTMLElement;
  toggleReadMore.value = !toggleReadMore.value;
  if (toggleReadMore.value) {
    el.style.maxHeight = `${elHeight.value}px`;
  } else {
    el.style.maxHeight = '200px';
  }
}
</script>

<template>
  <q-card-section class="post">
    <div class="text-overline text-green-7">
      {{ `Von ${postName} (${postAge}) ` }}
    </div>
    <div class="text-h5 text-bold q-mt-sm q-mb-lg">
      {{ postTitle }}
    </div>
    <div
      id="post-text"
      ref="postTextRef"
      :class="`text-body1 text-white ${toggleReadMore ? 'post-long' : 'post-short'}`"
    >
      {{ postText }}
    </div>

    <q-btn
      v-if="textIsLong"
      class="text-bold"
      color="transparent"
      dense
      :icon="toggleReadMore ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      :label="toggleReadMore ? 'Weniger lesen' : 'Mehr lesen'"
      size="sm"
      @click="shrinkOrExpand"
    />
  </q-card-section>
</template>

<style scoped lang="scss">
   .post-short {
    overflow: hidden;
    transition: all 0.5s ease-in-out;
   }
  .post-long {
    overflow: hidden;

    transition: all 0.5s ease-in-out;
   }
</style>
