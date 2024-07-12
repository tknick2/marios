<script setup lang="ts">
import { ref } from 'vue'
import type Player from '../../src/player'
import type { Scores } from '../../src/types'

const props = defineProps({
  scores: {
    type: Object as () => Scores,
    required: true
  }
})

function submitScores() {
  try {
    //backupScores();

    if (parseFloat(p1RaceScore.value)) p1Score.value += parseFloat(p1RaceScore.value)

    if (parseFloat(p2RaceScore.value)) p2Score.value += parseFloat(p2RaceScore.value)

    if (parseFloat(p3RaceScore.value)) p3Score.value += parseFloat(p3RaceScore.value)

    if (parseFloat(p4RaceScore.value)) p4Score.value += parseFloat(p4RaceScore.value)

    if (parseFloat(p5RaceScore.value)) p5Score.value += parseFloat(p5RaceScore.value)

    if (parseFloat(p6RaceScore.value)) p6Score.value += parseFloat(p6RaceScore.value)

    if (parseFloat(p7RaceScore.value)) p7Score.value += parseFloat(p7RaceScore.value)

    if (parseFloat(p8RaceScore.value)) p8Score.value += parseFloat(p8RaceScore.value)

    teamMarioScore.value = p1Score.value + p2Score.value + p3Score.value + p4Score.value
    teamLuigiScore.value = p5Score.value + p6Score.value + p7Score.value + p8Score.value

    resetRaceScores()
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <p>P1: {{ props.scores.p1 }}</p>
  <p>P2: {{ props.scores.p2 }}</p>
  <p>P3: {{ props.scores.p3 }}</p>
  <p>P4: {{ props.scores.p4 }}</p>
  <p>P5: {{ props.scores.p5 }}</p>
  <p>P6: {{ props.scores.p6 }}</p>
  <p>P7: {{ props.scores.p7 }}</p>
  <p>P8: {{ props.scores.p8 }}</p>
</template>
