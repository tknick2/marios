<script setup lang="ts">
import PlayerList from '@/components/PlayerList.vue'
import { ref } from 'vue'
const scoresSubmittedSuccess = 'Scores Submitted!'
const scoresMustBeNumbers = 'Please enter only numbers'

const inputScores = ref('')
const scoreInputFeedback = ref('')

function submitScores() {
  // validate that the scores are numbers
  const numbersOnlyRegex = /^[0-9]+$/

  if (!numbersOnlyRegex.test(inputScores.value)) {
    scoreInputFeedback.value = scoresMustBeNumbers
  } else {
    scoreInputFeedback.value = scoresSubmittedSuccess
  }
}

function scoresChanged() {
  scoreInputFeedback.value = ''
}
</script>

<template>
  <div>
    <div>
      <label for="input-scores">Enter scores:</label>
      <input
        v-model="inputScores"
        id="input-scores"
        type="text"
        data-test="input-scores"
        @input="scoresChanged"
      />
      <button data-test="submit-scores" @click="submitScores">Submit scores</button>
    </div>

    <p>{{ scoreInputFeedback }}</p>

    <PlayerList />
  </div>
</template>

<style scoped></style>
