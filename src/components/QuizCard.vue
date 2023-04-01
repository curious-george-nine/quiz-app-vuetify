<template>
  <div class="text-center">
    <p class="text-h5">Quiz {{ index + 1 }}</p>
    <v-card :max-width="mdAndUp ? 500 : 300" class="text-left mt-6">
      <v-card-item>
        <v-card-title class="d-flex justify-space-between">
          <div style="font-size: 1rem;" class="me-4">
            {{ quiz.question }}
          </div>
          <div style="font-size: 0.9rem; font-weight: 400; color: #6a6a6a">
            {{ index + 1 }}/{{ quizLength }}
          </div>
        </v-card-title>
      </v-card-item>
      <v-card-text>
        <v-radio-group>
          <v-radio v-for="option in quiz.options" :key="option" :label="option"
            :value="option" @change="e => handleRadioChange(e)">
          </v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <v-btn class="mt-6" :disabled="!isRadioSelected ? '' : null" color="primary"
      size="large" @click="handleGoNext()">
      Next
    </v-btn>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify';

defineProps({
  quiz: Object,
  index: Number,
  quizLength: Number,
});

const { mdAndUp } = useDisplay();
</script>

<script>
export default {
  data() {
    return {
      isRadioSelected: false,
      selectedRadio: null,
    }
  },
  methods: {
    handleRadioChange: function (e) {
      this.selectedRadio = e.currentTarget;

      if (e.currentTarget.value) {
        this.isRadioSelected = true;
        console.log(this.isRadioSelected);
      } else {
        this.isRadioSelected = false;
      }
    },
    emitAnswer: function (isCorrect, input) {
      this.$emit('go-next', [isCorrect, {
        question: this.quiz.question,
        answered: input.value,
        answer: this.quiz.answer,
      }]);
    },
    handleGoNext: function () {
      if (this.selectedRadio.value == this.quiz.answer) {
        this.emitAnswer(true, this.selectedRadio);
      } else {
        this.emitAnswer(false, this.selectedRadio);
      }
    }
  },
}
</script>