<script setup lang="ts">
import { ref, computed } from 'vue'

const inputScores = ref('')
const scoresSubmitted = ref(false)

function submitScores() {
  scoresSubmitted.value = true
}
</script>

<template>
  <div>
    <div>
      <label for="input-scores">Enter scores:</label>
      <input v-model="inputScores" id="input-scores" type="text" data-test="input-scores" />
      <button data-test="submit-scores" @click="submitScores">Submit scores</button>
    </div>

    <p v-if="scoresSubmitted">Scores Submitted!</p>
  </div>
</template>

<style scoped></style>
