import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface player {
    name: string,
    pNumber: number,
    totalScore: number,    
}

export const useScoresStore = defineStore('scores', () => {
  const numberOfPlayers = ref(0);
  const playerScores: Ref<player[]> = ref([]);

  function setScores(scoresString: string) {
    const separatedScores = scoresString.split('');
    console.log(separatedScores);

    separatedScores.map((player, index) => {
        const pNum = parseFloat(player);

        if(!playerScores.value[pNum]){
            const newPlayer = {pNumber: pNum, totalScore: index + 1 }
        }
        else {
            playerScores.value[pNum].totalScore += (index+1);
        }
    });
  }

  return { playerScores, setScores }
})
