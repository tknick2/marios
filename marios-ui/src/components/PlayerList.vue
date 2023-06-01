<script setup lang="ts">
import PlayerComponent from './PlayerComponent.vue'
import InputText from './InputText.vue'
import { ref } from 'vue';
import type Player from '../../src/player'


let players: Player[] = [];

let p1Score = ref(0);
let p2Score = ref(0);
let p3Score = ref(0);
let p4Score = ref(0);
let p5Score = ref(0);
let p6Score = ref(0);
let p7Score = ref(0);
let p8Score = ref(0);
let teamMario = ref('');
let teamLuigi = ref('');
let teamMarioScore = ref(0);
let teamLuigiScore = ref(0);

let p1RaceScore = ref('');
let p2RaceScore = ref('');
let p3RaceScore = ref('');
let p4RaceScore = ref('');
let p5RaceScore = ref('');
let p6RaceScore = ref('');
let p7RaceScore = ref('');
let p8RaceScore = ref('');

function submitScores(){
  try{
    backupScores();
    if(parseFloat(p1RaceScore.value))
      p1Score.value += parseFloat(p1RaceScore.value);
    
    if(parseFloat(p2RaceScore.value))
      p2Score.value += parseFloat(p2RaceScore.value);
    
    if(parseFloat(p3RaceScore.value))
      p3Score.value += parseFloat(p3RaceScore.value);

    if(parseFloat(p4RaceScore.value))
      p4Score.value += parseFloat(p4RaceScore.value);

    if(parseFloat(p5RaceScore.value))
      p5Score.value += parseFloat(p5RaceScore.value);
      
    if(parseFloat(p6RaceScore.value))
      p6Score.value += parseFloat(p6RaceScore.value);

    if(parseFloat(p7RaceScore.value))
      p7Score.value += parseFloat(p7RaceScore.value);

    if(parseFloat(p8RaceScore.value))
      p8Score.value += parseFloat(p8RaceScore.value);

    teamMarioScore.value = p1Score.value + p2Score.value + p3Score.value + p4Score.value;
    teamLuigiScore.value = p5Score.value + p6Score.value + p7Score.value + p8Score.value;

    resetRaceScores();
  } catch(e){
    console.log(e);
  }    
}

function resetRaceScores(){
  p1RaceScore.value = '';
  p2RaceScore.value = '';
  p3RaceScore.value = '';
  p4RaceScore.value = '';
  p5RaceScore.value = '';
  p6RaceScore.value = '';
  p7RaceScore.value = '';
  p8RaceScore.value = '';
}

function backupScores(){
  const jsonString = JSON.stringify({
    p1: p1Score.value,
    p2: p2Score.value,
    p3: p3Score.value,
    p4: p4Score.value,
    p5: p5Score.value,
    p6: p6Score.value,
    p7: p7Score.value,
    p8: p8Score.value,
  })
  window.localStorage.setItem('backupScores', jsonString);
}
</script>

<template>
  <InputText>
    
  </InputText>
  <PlayerComponent>
    <label for="p1">P1: {{ p1Score }}</label> <br>
    <input id="p1" type="text" v-model="p1RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p1">P1: {{ p1Score }}</label> <br>
    <input id="p1" type="text" v-model="p1RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p2">P2: {{ p2Score }}</label> <br>
    <input id="p2" type="text" v-model="p2RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p3">P3: {{ p3Score }}</label> <br>
    <input id="p3" type="text" v-model="p3RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p4">P4: {{ p4Score }}</label> <br>
    <input id="p4" type="text" v-model="p4RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p5">P5: {{ p5Score }}</label> <br>
    <input id="p5" type="text" v-model="p5RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p6">P6: {{ p6Score }}</label> <br>
    <input id="p6" type="text" v-model="p6RaceScore">
  </PlayerComponent>
  <PlayerComponent>
    <label for="p7">P7: {{ p7Score }}</label>  <br>
    <input id="p7" type="text" v-model="p7RaceScore">
  </PlayerComponent>
  <PlayerComponent>  
    <label for="p7">P8: {{p8Score}}</label>  <br>
    <input id="p7" type="text" v-model="p8RaceScore" >    
  </PlayerComponent>
  
  <PlayerComponent>  
    <button @click="submitScores()">Submit scores</button>
  </PlayerComponent>

  <PlayerComponent>  
    <label for="teamMario">Low Numbers: {{teamMarioScore}}</label>  <br>
    <input id="teamMario" type="text" >    
  </PlayerComponent>
  <PlayerComponent>  
    <label for="teamLuigi">High Numbers: {{teamLuigiScore}}</label>  <br>
    <input id="teamLuigi" type="text" >    
  </PlayerComponent>

</template>

