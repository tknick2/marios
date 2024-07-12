<script setup lang="ts">
import PlayerList from '@/components/PlayerList.vue'
import { ref, reactive } from 'vue'
import type { Scores } from '../types'

// todo: these can all be extracted into a constants file
const scoresSubmittedSuccess = 'Scores Submitted!'
const scoresMustBeNumbers = 'Please enter only numbers'
// todo: this number can be created dynamically based on the number of players
const tooManyScoresEntered = 'Too many scores entered, the maximum is 8'

const inputScores = ref('')
const scoreInputFeedback = ref('')

const scores: Scores = reactive({ p1: 0, p2: 0, p3: 0, p4: 0, p5: 0, p6: 0, p7: 0, p8: 0 })

function submitScores() {
  const numbersOnlyRegex = /^[0-9]+$/

  if (!numbersOnlyRegex.test(inputScores.value)) {
    scoreInputFeedback.value = scoresMustBeNumbers
    return
  }

  if (inputScores.value.length > 8) {
    scoreInputFeedback.value = tooManyScoresEntered
  }

  const scoreInputArray = inputScores.value.split('')

  for (let i = 1; i < scoreInputArray.length + 1; i++) {
    // the position that a player finished the race in will be their index in the scoreInputArray + 1
    // ex: player 1 finished in position 3, so the value at index 2 in the array will be 1
    const playerFinishPosition = scoreInputArray.indexOf(i.toString()) + 1

    scores[`p${i}`] += playerFinishPosition
  }

  scoreInputFeedback.value = scoresSubmittedSuccess
}

function scoresChanged() {
  scoreInputFeedback.value = ''
}

// function backupScores() {
//   const jsonString = JSON.stringify({
//     p1: p1Score.value,
//     p2: p2Score.value,
//     p3: p3Score.value,
//     p4: p4Score.value,
//     p5: p5Score.value,
//     p6: p6Score.value,
//     p7: p7Score.value,
//     p8: p8Score.value
//   })
//   window.localStorage.setItem('backupScores', jsonString)
// }
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

    <p data-test="low-numbers">
      Low number score: {{ scores.p1 + scores.p2 + scores.p3 + scores.p4 }}
    </p>
    <p data-test="high-numbers">
      High number score: {{ scores.p5 + scores.p6 + scores.p7 + scores.p8 }}
    </p>
    <PlayerList :scores="scores" />
  </div>
</template>

<style scoped></style>
