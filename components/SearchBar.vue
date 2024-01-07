<template>
  <q-form
    class="q-pa-md q-ma-md fit row wrap justify-around filter-bar items-center"
    style="max-width: 45rem;"
  >
    <SearchInput placeholder="Dein Suchbegriff.." />

    <div class="column ">
      <div class="row items-center align-center">
        <SearchRange />
      </div>
      <div class="row items-center">
        <SearchRadio />
      </div>
    </div>
  </q-form>
</template>
