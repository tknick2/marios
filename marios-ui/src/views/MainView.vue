<script setup lang="ts">
import { ref, computed } from 'vue'

const inputScores = ref('')
const showScoresSubmitted = ref(false)

function submitScores() {
  showScoresSubmitted.value = true
}

function scoresChanged() {
  showScoresSubmitted.value = false
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

    <p v-if="showScoresSubmitted">Scores Submitted!</p>
  </div>
</template>

<style scoped></style>
