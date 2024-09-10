<script setup lang="ts">
import { ref } from 'vue'
import { MAX_NUMBER_OF_PLAYERS } from '../constants'

const numberOfPlayers = ref(8)
</script>

<template>
  <h1>Add Players</h1>
  <label for="input-number-of-players">Number of players: </label>
  <select
    v-model.number="numberOfPlayers"
    id="input-number-of-players"
    data-test="number-of-players"
  >
    <option v-for="i in MAX_NUMBER_OF_PLAYERS" :key="i" :value="i">{{ i }}</option>
  </select>
  <ul>
    <li v-for="i in numberOfPlayers" :key="i">
      <label for="input-player-name">{{ `P${i}: ` }}</label>
      <input type="text" id="input-player-name" data-test="input-player-name" />
    </li>
  </ul>
</template>
