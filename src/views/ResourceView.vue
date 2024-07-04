<template>
  <span class="text-h3">資源</span>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>所有課程</strong>
    </v-col>

    <v-col v-for="j in 6" :key="`${j}`" cols="6" md="2">
      <v-sheet height="150"></v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>案例故事</strong>
    </v-col>

    <v-col v-for="j in 6" :key="`${j}`" cols="6" md="2">
      <v-sheet height="150"></v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>統計資料</strong>
    </v-col>

    <v-col v-for="j in 6" :key="`${j}`" cols="6" md="2">
      <v-sheet height="150"></v-sheet>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>FAQ</strong>
    </v-col>

    <v-col v-for="j in 6" :key="`${j}`" cols="6" md="2">
      <v-sheet height="150"></v-sheet>
    </v-col>
  </v-row>
</template>