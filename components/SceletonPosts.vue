<template>
  <div class="q-pa-md q-gutter-md">
    <q-card
      v-for="n in 10"
      :key="n"
      style="width: 100%"
    >
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton
        height="200px"
      />

      <q-card-actions
        align="right"
        class="q-gutter-md"
      >
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </div>
</template>
