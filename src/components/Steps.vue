<template>
  <div class="steps" v-for="step in steps" :key="step">
    <div class="steps-1 dot">
      {{step.id}}
    </div>
      <div class="dot-details">
        <span>
          {{step.title}}
        </span>
        <p>
          {{step.stepTitle}}
        </p>
      </div>
  </div>
</template>
<script setup>
const steps = [
  {
    id:1,
    title:"Step 1",
    stepTitle:"Your Info"
  },
  {
    id:2,
    title:"Step 2",
    stepTitle:"Select Plan"
  },
  {
    id:3,
    title:"Step 3",
    stepTitle:"Add Ons"
  },
  {
    id:4,
    title:"Step 4",
    stepTitle:"Summary"
  },
]
</script>
<style lang="">
  
</style>