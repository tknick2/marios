<script setup lang="ts">
import PlayerList from '@/components/PlayerList.vue'
import { ref, reactive } from 'vue'
// todo: these can all be extracted into a constants file
const scoresSubmittedSuccess = 'Scores Submitted!'
const scoresMustBeNumbers = 'Please enter only numbers'
// todo: this number can be created dynamically based on the number of players
const tooManyScoresEntered = 'Too many scores entered, the maximum is 8'

const inputScores = ref('')
const scoreInputFeedback = ref('')
// todo: the number of players can be determined dynamically based on the number of players
const scores = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])

function submitScores() {
  const numbersOnlyRegex = /^[0-9]+$/

  if (!numbersOnlyRegex.test(inputScores.value)) {
    scoreInputFeedback.value = scoresMustBeNumbers
    return
  }

  if (inputScores.value.length > 8) {
    scoreInputFeedback.value = tooManyScoresEntered
  }

  const playersArray = inputScores.value.split('')

  for (let i = 0; i < playersArray.length; i++) {
    const indexOfPlayer = playersArray.indexOf(i.toString())

    scores.value[i] += indexOfPlayer + 1
  }

  //TODO: set the scores here....

  scoreInputFeedback.value = scoresSubmittedSuccess
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
