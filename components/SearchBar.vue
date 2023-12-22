<template>
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
        <SearchRange />
      </div>
    </div>
  </q-form>

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
      val="männlich"
      @click="triggerGenderFilter"
    />
    <q-radio
      v-model="gender"
      checked-icon="female"
      label="W"
      size="xs"
      unchecked-icon="panorama_fish_eye"
      val="weiblich"
      @click="triggerGenderFilter"
    />

    <q-radio
      v-model="gender"
      checked-icon="task_alt"
      label="egal"
      size="xs"
      unchecked-icon="panorama_fish_eye"
      val=""
      @click="triggerGenderFilter"
    />
  </div>
</template>
