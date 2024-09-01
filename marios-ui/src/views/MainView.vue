<script setup lang="ts">
import PlayerList from '@/components/PlayerList.vue'
import { ref, reactive, computed } from 'vue'
import type { Scores } from '../types'

// todo: these can all be extracted into a constants file
const scoresSubmittedSuccess = 'Scores Submitted!'
const scoresMustBeNumbers = 'Please enter only numbers'
// todo: this number can be created dynamically based on the number of players
const tooManyScoresEntered = 'Too many scores entered, the maximum is 8'

const inputScores = ref('')
const scoreInputFeedback = ref('')
const promptClearScores = ref(false)

const lowNumberScoresTotal = computed(
  () => scores.p1.total + scores.p2.total + scores.p3.total + scores.p4.total
)
const highNumberScoresTotal = computed(
  () => scores.p5.total + scores.p6.total + scores.p7.total + scores.p8.total
)

let startingScoreObject = {
  p1: { total: 0, lastRace: 0 },
  p2: { total: 0, lastRace: 0 },
  p3: { total: 0, lastRace: 0 },
  p4: { total: 0, lastRace: 0 },
  p5: { total: 0, lastRace: 0 },
  p6: { total: 0, lastRace: 0 },
  p7: { total: 0, lastRace: 0 },
  p8: { total: 0, lastRace: 0 }
}

const stringLoadedFromLocalStorage = window.localStorage.getItem('backupScores')
if (stringLoadedFromLocalStorage) {
  startingScoreObject = JSON.parse(stringLoadedFromLocalStorage)
}

const scores: Scores = reactive(startingScoreObject)

function submitScores() {
  const numbersOnlyRegex = /^[0-9]+$/

  if (!numbersOnlyRegex.test(inputScores.value)) {
    scoreInputFeedback.value = scoresMustBeNumbers
    return
  }

  if (inputScores.value.length > 8) {
    scoreInputFeedback.value = tooManyScoresEntered
    return
  }

  if (inputScores.value.length > [...new Set(inputScores.value.split(''))].length) {
    scoreInputFeedback.value = 'Scores list can not contain duplicate numbers!'
    return
  }

  const scoreInputArray = inputScores.value.split('')

  for (let i = 1; i < scoreInputArray.length + 1; i++) {
    const playerFinishPosition = parseFloat(scoreInputArray[i - 1])

    scores[`p${i}`].total += playerFinishPosition
    scores[`p${i}`].lastRace = playerFinishPosition
  }

  backupScores()
  scoreInputFeedback.value = scoresSubmittedSuccess

  if (scoresSubmittedSuccess) {
    inputScores.value = ''
  }
}

function scoresChanged() {
  scoreInputFeedback.value = ''
}

function clearScores() {
  scores.p1.total = 0
  scores.p2.total = 0
  scores.p3.total = 0
  scores.p4.total = 0
  scores.p5.total = 0
  scores.p6.total = 0
  scores.p7.total = 0
  scores.p8.total = 0

  scores.p1.lastRace = 0
  scores.p2.lastRace = 0
  scores.p3.lastRace = 0
  scores.p4.lastRace = 0
  scores.p5.lastRace = 0
  scores.p6.lastRace = 0
  scores.p7.lastRace = 0
  scores.p8.lastRace = 0

  backupScores()

  promptClearScores.value = false
}

function backupScores() {
  const jsonString = JSON.stringify(scores)
  window.localStorage.setItem('backupScores', jsonString)
}
</script>

<template>
  <div>
    <div v-if="lowNumberScoresTotal < highNumberScoresTotal">
      <h2 data-test="low-numbers">
        Low number score:
        {{ lowNumberScoresTotal }}
      </h2>
      <h2 data-test="high-numbers">
        High number score:
        {{ highNumberScoresTotal }}
      </h2>
    </div>
    <div v-else>
      <h2 data-test="high-numbers">
        High number score:
        {{ highNumberScoresTotal }}
      </h2>
      <h2 data-test="low-numbers">
        Low number score:
        {{ lowNumberScoresTotal }}
      </h2>
    </div>

    <PlayerList :scores="scores" />

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
      <p>{{ scoreInputFeedback }}</p>
    </div>

    <button data-test="clear-scores" @click="promptClearScores = true">Clear scores</button>
    <div v-if="promptClearScores">
      <p>Are you sure you want to clear all scores?</p>
      <button data-test="confirm-clear-scores" @click="clearScores">Yes</button>
      <button data-test="cancel-clear-scores" @click="promptClearScores = false">No</button>
    </div>
  </div>
</template>

<style scoped></style>
