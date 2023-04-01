<template>
  <v-alert border="start" :border-color="answers[index] ? 'success' : 'error'"
    :class="index != 0 && 'mt-4'">
    <v-alert-title>
      {{ answeredValue.question }}
    </v-alert-title>
    <v-card>
      <v-list>
        <v-list-item v-for="(option, optionIndex) in options" :key="optionIndex"
          :value="option" :title="option">
          <template v-if="option == answeredValue.answered">
            <v-list-item-subtitle
              :class="`${$style.listItemSubtitle} ${answers[index] ? 'text-green-lighten-2' : 'text-red-lighten-1'}`">
              {{ answers[index] ? 'Correct!' : 'Incorrect.' }}
            </v-list-item-subtitle>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-card>
    <template v-if="!answers[index]">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>Show Answer</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item :link="true" :title="answeredValue.answer">
                <v-list-item-subtitle class="text-green-lighten-2">
                  Answer
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-alert>
</template>

<script setup>
defineProps({
  answers: Array,
  index: Number,
  answeredValue: Object,
  options: Array,
});
</script>

<script>
export default {
  methods: {
    testFunction(answeredValue, option) {
      console.log(answeredValue, option);
    }
  },
}
</script>

<style module>
.vCardReveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.listItemSubtitle {
  font-size: 1rem;
}

.spoiler {
  display: inline-block;
  user-select: none;
  position: relative;
}

.spoiler::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  margin-block: auto;
  background-color: #0a0a0a;
  width: 100%;
  height: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: opacity 0.1s;
}

.spoilerShowed::before {
  content: '';
  opacity: 0.1;
}
</style>