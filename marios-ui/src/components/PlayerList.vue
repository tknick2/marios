<script setup lang="ts">
import type { Scores } from '../../src/types'

const props = defineProps({
  scores: {
    type: Object as () => Scores,
    required: true
  }
})
</script>

<template>
  <p>P1 Total: {{ props.scores.p1.total }} Last Race: {{ props.scores.p1.lastRace }}</p>
  <p>P2 Total: {{ props.scores.p2.total }} Last Race: {{ props.scores.p2.lastRace }}</p>
  <p>P3 Total: {{ props.scores.p3.total }} Last Race: {{ props.scores.p3.lastRace }}</p>
  <p>P4 Total: {{ props.scores.p4.total }} Last Race: {{ props.scores.p4.lastRace }}</p>
  <p>P5 Total: {{ props.scores.p5.total }} Last Race: {{ props.scores.p5.lastRace }}</p>
  <p>P6 Total: {{ props.scores.p6.total }} Last Race: {{ props.scores.p6.lastRace }}</p>
  <p>P7 Total: {{ props.scores.p7.total }} Last Race: {{ props.scores.p7.lastRace }}</p>
  <p>P8 Total: {{ props.scores.p8.total }} Last Race: {{ props.scores.p8.lastRace }}</p>
</template>
