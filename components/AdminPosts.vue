<script setup lang="ts">

import { type QTableProps } from 'quasar';

const props = defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});

const releasedPostsAmount = computed(() => props.posts.filter((p) => p.released === true));

const rejectedPostsAmount = computed(() => props.posts.filter((p) => p.rejected === true));

const columns: QTableProps['columns'] = [
  {
    name: 'id',
    label: 'id',
    align: 'left',
    field: 'id',
    required: true,
  },
  {
    name: 'created_at',
    label: 'Erstellt am',
    align: 'left',
    field: 'created_at',
    sortable: true,
  },
  {
    name: 'title',
    label: 'Post Titel',
    field: 'title',
    align: 'left',
    sortable: true,
  },
  {
    name: 'text',
    align: 'left',
    label: 'Post Text',
    field: 'text',
    sortable: true,
  },
  {
    name: 'name',
    align: 'left',
    label: 'Ersteller',
    field: 'name',

  },
  {
    name: 'age',
    align: 'left',
    label: 'Alter',
    field: 'age',
    sortable: true,

  },
  {
    name: 'gender',
    align: 'left',
    label: 'Geschlecht',
    field: 'gender',
    sortable: true,
  },
  {
    name: 'email',
    align: 'left',
    label: 'Email',
    field: 'email',
    sortable: true,
  },
  {
    name: 'released',
    align: 'left',
    label: 'Freigegeben',
    field: 'released',
    sortable: true,
  },
  {
    name: 'rejected',
    align: 'left',
    label: 'Abgelehnt',
    field: 'rejected',
    sortable: true,
  },
];
</script>

<template>
  <div class="q-px-xl">
    <div class="q-gutter-md q-my-md">
      <q-badge color="black">
        {{ `${posts.length} Posts ingesesamt` }}<q-icon
          class="q-ml-xs q-px-sm"
          color="white"
          label="test"
          name="check"
        />
      </q-badge>

      <q-badge color="orange-9">
        {{ `${posts.length - releasedPostsAmount.length} Prüfung erforderlich` }}<q-icon
          class="q-ml-xs q-px-sm"
          color="white"
          label="test"
          name="warning"
        />
      </q-badge>

      <q-badge color="green-9">
        {{ `${releasedPostsAmount.length} freigebene Posts` }}<q-icon
          class="q-ml-xs q-px-sm"
          color="white"
          label="test"
          name="check"
        />
      </q-badge>

      <q-badge color="red">
        {{ `${rejectedPostsAmount.length} abgelehnte Posts` }}<q-icon
          class="q-ml-xs q-px-sm"
          color="white"
          label="test"
          name="warning"
        />
      </q-badge>
    </div>

    <q-table
      bordered
      :columns="columns"
      flat
      :rows="posts"
      :rows-per-page-options="[5, 10,0]"
      title="Alle Posts"
      :wrap-cells="true"
    />
  </div>
</template>
