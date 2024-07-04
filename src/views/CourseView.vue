<template>
  <span class="text-h3">我的課程</span>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>醫生指定課程</strong>
    </v-col>

    <v-col v-for="j in 6" :key="`${j}`" cols="6" md="2">
      <v-sheet height="150"></v-sheet>
    </v-col>
  </v-row>
</template>