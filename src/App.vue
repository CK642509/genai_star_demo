<script setup lang="ts">
import { RouterView } from "vue-router";

import { ref } from 'vue'

const drawer = ref<boolean>(false)
const isLogin = ref<boolean>(false)



</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      

      <v-toolbar-title to="/">GenAI Star Demo</v-toolbar-title>
      <v-btn to="/resource">學習資源</v-btn>
      <v-spacer />
      <v-btn v-if="!isLogin" @click="isLogin = true">登入</v-btn>
      <v-app-bar-nav-icon v-if="isLogin" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
    <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
            title="Jane Smith"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="帳號資訊" value="account" to="/profile"></v-list-item>
          <v-list-item prepend-icon="mdi-note-text-outline" title="筆記" value="notes" to="/notes"></v-list-item>
          <v-list-item prepend-icon="mdi-human-male-board" title="課程" value="courses" to="/courses"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="登出" @click="isLogin = false; drawer = false" to="/"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
