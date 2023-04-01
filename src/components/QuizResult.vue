<template>
  <div :class="$style.quizResultWrapper">
    <div class="text-center mb-4">
      <p class="text-h6">You scored</p>
      <div class="mt-4">
        <v-progress-circular :model-value="Math.round(correctRatio * 100)" size="100"
          width="10"
          :color="`rgb(${255 - Math.round(correctRatio * 100 * 2.55)}, ${Math.round(correctRatio * 100 * 2.55)}, 0`"
          style="font-weight: 700">
          {{ Math.round(correctRatio * 100) }}%
        </v-progress-circular>
      </div>
      <v-btn color="teal-lighten-1" class="mt-4">
        Retry
        <v-dialog v-model="dialog" activator="parent" :width="300">
          <v-card class="text-center">
            <v-card-text>
              Are you sure retry?
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn @click="handleRetry()">Sure</v-btn>
              <v-btn @click="dialog = false" color="indigo-darken-1">Nope</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
    <v-expansion-panels :class="lgAndUp ? 'w-50 mx-auto' : 'w-100'">
      <v-expansion-panel>
        <v-expansion-panel-title>
          See answers
          <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div v-for="(answeredValue, index) in answeredValues"
            :key="answeredValue.question">
            <QuizResultCard :answers="answers" :index="index"
              :answered-value="answeredValue" :options="quizzes[index].options">
            </QuizResultCard>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import QuizResultCard from '@/components/QuizResultCard.vue';
import { useDisplay } from 'vuetify';

defineProps({
  answers: Array,
  answeredValues: Array,
  quizzes: Array,
});

const { lgAndUp } = useDisplay();
</script>

<script>
export default {
  data() {
    return {
      correctRatio: this.answers.filter(isCorrect => isCorrect == true).length / this.answers.length,
      dialog: false,
    }
  },
  methods: {
    handleRetry: function () {
      this.dialog = false;
      location.reload();
    }
  },
  computed() {
    console.log(this.answers);
  }
}
</script>

<style module>
  .quizResultWrapper {
    width: 100%;
    max-height: 70%;
    margin-inline: auto;
    padding-inline: 2rem;
  }
</style>