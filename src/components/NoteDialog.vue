<template>
  <v-dialog v-model="dialog" max-width="80vw">
    <v-card>
      <v-card-title>
        <span class="text-h5">新增筆記</span>
      </v-card-title>
      <v-card-text>
        <v-textarea v-model="note" label="症狀描述" outlined rows="3"></v-textarea>
        哪一個說法，更精準描述你的狀況?
        <v-item-group mandatory v-model="ans1">
          <v-container>
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12">
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card :color="isSelected ? 'primary' : ''" class="d-flex align-center" dark @click="toggle">
                    <v-scroll-y-transition>
                      <div class="text-h6 flex-grow-1 text-center">
                        {{ selections[n - 1] }}
                      </div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
        是否也有以下症狀?
        <v-item-group mandatory v-model="ans2">
          <v-container>
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12">
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card :color="isSelected ? 'primary' : ''" class="d-flex align-center" dark @click="toggle">
                    <v-scroll-y-transition>
                      <div class="text-h6 flex-grow-1 text-center">
                        {{ selections[n - 1] }}
                      </div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = false">取消</v-btn>
        <v-btn color="primary" @click="addNote">新增</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const note = ref<string | null>(null);
const selections = ref<string[]>([
  "選項一",
  "選項二",
  "選項三",
]);
const ans1 = ref<string | null>(null);
const ans2 = ref<string | null>(null);

const dialog = defineModel<boolean>();

const emit = defineEmits(["addNote"]);

const addNote = () => {
  const newNote = {
    note: note.value,
    ans1: ans1.value,
    ans2: ans2.value,
  };
  emit("addNote", newNote);
  dialog.value = false;
};


</script>