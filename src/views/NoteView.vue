<template>
  <span class="text-h3">我的筆記</span>
  <v-row>
    <v-col class="mt-2" cols="12">
      <v-card>
        <v-card-title>
          <strong>症狀紀錄總結</strong>
        </v-card-title>
        <v-card-text>
          1. 一定要配溫開水
          <br />
          2. 早睡早起
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-2" cols="12">
      <v-card>
        <v-card-title>
          <strong>醫生交代注意事項</strong>
        </v-card-title>
        <v-card-text>
          1. 一定要配溫開水
          <br />
          2. 早睡早起
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-2" cols="12">
      <v-card>
        <template v-slot:prepend>
          <v-card-title>
            <strong>筆記</strong>
          </v-card-title>
        </template>
        <template v-slot:append>
          <v-btn color="blue-darken-1" variant="outlined" @click="dialog = true">
            新增筆記
          </v-btn>
          <NoteDialog v-model="dialog" @add-note="addNewNote" />
        </template>
        <v-card-text>
          <v-row>
            <template v-for="note of notes">
              <v-col cols="3">
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-card v-bind="props" color="light-blue-lighten-5" class="mx-4">
                      <template v-slot:prepend>
                        <v-card-title>
                          <strong>日期</strong>
                        </v-card-title>
                      </template>
                      <template v-slot:append>
                        <v-btn v-show="isHovering" icon="mdi-eye" flat variant="text"
                        size="xs"></v-btn>
                        <v-btn v-show="isHovering" icon="mdi-pencil" flat variant="text"
                            size="xs"
                          class="ml-2"></v-btn>
                      </template>
                      <v-card-text>
                        {{ note.note }}
                      </v-card-text>
                      <v-card-title>
                        <strong>哪一個說法，更精準描述你的狀況?</strong>
                      </v-card-title>
                      <v-card-text>
                        {{ note.ans1 }}
                      </v-card-text>
                      <v-card-title>
                        <strong>是否也有以下症狀?</strong>
                      </v-card-title>
                      <v-card-text>
                        {{ note.ans2 }}
                      </v-card-text>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </template>

          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoteDialog from "@/components/NoteDialog.vue";

type Note = {
  note: string;
  ans1: number | null;
  ans2: number | null;
};

const dialog = ref<boolean>(false);
const notes = ref<Note[]>([]);

const addNewNote = (note: Note) => {
  console.log(note);
  notes.value.push(note);
};
</script>