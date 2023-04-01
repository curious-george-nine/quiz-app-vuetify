<template>
  <div class="contents">
    <Transition key="quizProgress" name="start">
      <template v-if="quizProgress == 0">
        <v-btn color="primary" @click="() => quizProgress++" size="x-large">Start</v-btn>
      </template>
    </Transition>
    <div v-for="(quiz, index) in quizzes" :key="quiz.question">
      <Transition key="quizProgress" name="next-quiz">
        <template v-if="quizProgress - 1 == index && quizProgress - 1 < quizzes.length">
          <QuizCard :quiz="quiz" :index="index" :quiz-length="quizzes.length"
            @go-next="(e) => handleGetAnswer(e)" />
        </template>
      </Transition>
    </div>
    <Transition key="quizProgress" name="quiz-result">
      <template v-if="quizProgress - 1 == quizzes.length">
        <QuizResult :answers="quizAnswers" :answered-values="quizAnsweredValues"
          :quizzes="quizzes">
          {{ quizzes }}
        </QuizResult>
      </template>
    </Transition>
  </div>
</template>

<script setup>
import QuizCard from "@/components/QuizCard.vue";
import QuizResult from '@/components/QuizResult.vue';

import qs from "@/assets/quizzes.js";
</script>

<script>
export default {
  data() {
    return {
      quizzes: qs,
      quizProgress: 0,
      quizAnswers: [],
      quizAnsweredValues: []
    }
  },
  methods: {
    handleGetAnswer: function (e) {
      this.quizProgress++;
      console.log(e);
      this.quizAnswers.push(e[0]);
      this.quizAnsweredValues.push(e[1]);
    },
  },
  // created() {
  //   function shuffle(array) {
  //     let currentIndex = array.length, randomIndex;

  //     // While there remain elements to shuffle.
  //     while (currentIndex != 0) {

  //       // Pick a remaining element.
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex--;

  //       // And swap it with the current element.
  //       [array[currentIndex], array[randomIndex]] = [
  //         array[randomIndex], array[currentIndex]];
  //     }

  //     const random = Math.floor(Math.random() * array.length);

  //     array = array.filter(element => {
  //       return element != element[random];
  //     });

  //     return array.filter(element => {
  //       return element != element[random];
  //     });
  //   }

  //   this.quizzes = shuffle(this.quizzes);

  //   let emptyArrayForQuizzes = [];

  //   for (let i = 0; i < 5; i++) {
  //     emptyArrayForQuizzes.push(this.quizzes[i]);
  //   }

  //   this.quizzes = emptyArrayForQuizzes;
  // }
}
</script>

<style scoped>
[class$="-active"],
[class$="-from"],
[class$="-to"] {
  --scale-transition-duration: 0.15s;
  --scale-transition-delay: 0.5s;
}

.start-enter-active,
.start-leave-active,
.next-quiz-leave-active,
.quiz-result-leave-active {
  transition: transform var(--scale-transition-duration) ease-out;
}

.start-enter-from,
.start-leave-to,
.next-quiz-enter-from,
.next-quiz-leave-to,
.quiz-result-enter-from,
.quiz-result-leave-to {
  transform: scale(0);
}

.next-quiz-enter-active,
.quiz-result-enter-active {
  transition: transform var(--scale-transition-duration) ease-out var(--scale-transition-delay);
}
</style>