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
