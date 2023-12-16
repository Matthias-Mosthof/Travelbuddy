<script setup lang="ts">

import { type QTableProps } from 'quasar';

defineProps({
  posts: {
    type: Array as () => Post[],
    required: true,
  },
});

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
  <div class="q-pa-md">
    <q-table
      bordered
      :columns="columns"
      flat
      :rows="posts"
      :rows-per-page-options="[10,0]"
      :wrap-cells="true"
    />
  </div>
</template>
