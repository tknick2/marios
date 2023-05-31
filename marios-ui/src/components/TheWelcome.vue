<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <label for="p1">P1: {{ p1Score }}</label> <br>
    <input id="p1" type="text" v-model="p1RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p2">P2: {{ p2Score }}</label> <br>
    <input id="p2" type="text" v-model="p2RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p3">P3: {{ p3Score }}</label> <br>
    <input id="p3" type="text" v-model="p3RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p4">P4: {{ p4Score }}</label> <br>
    <input id="p4" type="text" v-model="p4RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p5">P5: {{ p5Score }}</label> <br>
    <input id="p5" type="text" v-model="p5RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p6">P6: {{ p6Score }}</label> <br>
    <input id="p6" type="text" v-model="p6RaceScore">
  </WelcomeItem>
  <WelcomeItem>
    <label for="p7">P7: {{ p7Score }}</label>  <br>
    <input id="p7" type="text" v-model="p7RaceScore">
  </WelcomeItem>
  <WelcomeItem>  
    <label for="p7">P8: {{p8Score}}</label>  <br>
    <input id="p7" type="text" v-model="p8RaceScore" >
    
  </WelcomeItem>
  
  <button @click="submitScores()">Submit scores</button>
</template>

<script lang="ts">
export default{

  data() {
    return {
      p1Score: 0,
      p2Score: 0,
      p3Score: 0,
      p4Score: 0,
      p5Score: 0,
      p6Score: 0,
      p7Score: 0,
      p8Score: 0,
      p1RaceScore: '',
      p2RaceScore: '',
      p3RaceScore: '',
      p4RaceScore: '',
      p5RaceScore: '',
      p6RaceScore: '',
      p7RaceScore: '',
      p8RaceScore: '',
    }
  },
  methods: {
    submitScores(){
      // for(let i = 1; i < 8; i++){
      //   const input = document.getElementById(`p${i}`);  
      //   if(input?.nodeValue)    
      // }

      try{
        this.p1Score += parseFloat(this.p1RaceScore);
        this.p2Score += parseFloat(this.p2RaceScore);
        this.p3Score += parseFloat(this.p3RaceScore);
        this.p4Score += parseFloat(this.p4RaceScore);
        this.p5Score += parseFloat(this.p5RaceScore);
        this.p6Score += parseFloat(this.p6RaceScore);
        this.p7Score += parseFloat(this.p7RaceScore);
        this.p8Score += parseFloat(this.p8RaceScore);
        // const p2Input = document.getElementById("p2");
        // if(p2Input?.nodeValue) {
        //   p2Score += parseFloat(p2Input?.nodeValue);
        // }

        // const p3Input = document.getElementById("p3");
        // if(p3Input?.nodeValue) {
        //   p3Score += parseFloat(p3Input?.nodeValue);
        // }

        // const p4Input = document.getElementById("p4");
        // if(p4Input?.nodeValue) {
        //   p4Score += parseFloat(p4Input?.nodeValue);
        // }

        // const p5Input = document.getElementById("p5");
        // if(p5Input?.nodeValue) {
        //   p5Score += parseFloat(p5Input?.nodeValue);
        // }

        // const p6Input = document.getElementById("p6");
        // if(p6Input?.nodeValue) {
        //   p6Score += parseFloat(p6Input?.nodeValue);
        // }

        // const p7Input = document.getElementById("p7");
        // if(p7Input?.nodeValue) {
        //   p7Score += parseFloat(p7Input?.nodeValue);
        // }

        // const p8Input = document.getElementById("p8");
        // if(p8Input?.nodeValue) {
        //   p8Score += parseFloat(p8Input?.nodeValue);
        // }
      } catch(e){
        console.log(e);
      }
    
    }
  }


}
</script>
