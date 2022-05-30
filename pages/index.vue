<template>
  <div>
    <select v-model="degreeOfDifficulty">
      <option v-for="(option, index) in degreeOfDifficultyOptions" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div>{{ degreeOfDifficulty }}</div>
    <input type="range" v-model="interval" min="1" max="3000"/>
    <div>{{ interval }}ms</div>
    <v-btn elevation="2" @click="switchingValue">
      スタート
    </v-btn>
    <div>{{ value }}</div>
    <input type="text" v-model="ans" :disabled="disabled" @change="checkAnswer"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'

const Page = defineComponent({
  setup() {
    const interval = ref(1000)
    const degreeOfDifficulty = ref(1)
    const degreeOfDifficultyOptions = [
      {label: '1桁', value: 1},
      {label: '2桁', value: 2},
      {label: '3桁', value: 3}
    ]
    const ans = ref('')
    let disabled = ref(false)
    let resolve = 0
    let value = ref(0)
    let count = 0

    const switchingValue = () => {
      disabled.value = true
      count++
      value.value = Math.floor( Math.random() * (Math.pow(10, degreeOfDifficulty.value) - Math.pow(10, degreeOfDifficulty.value-1))) + Math.pow(10, degreeOfDifficulty.value-1)
      resolve += value.value
      if (count != 10) setTimeout(switchingValue, interval.value)
      else {
        count = 0
        disabled.value = false
      }
      console.log(resolve)
    }

    const checkAnswer = () => {
      console.log(resolve, ans)
      if(resolve.toString() === ans.value) alert('正解!!!')
      else alert('不正解!?')
      resolve = 0
    }

    return {
      interval,
      degreeOfDifficulty,
      degreeOfDifficultyOptions,
      switchingValue,
      checkAnswer,
      value,
      ans,
      disabled
    }
  }
})
export default Page
</script>
