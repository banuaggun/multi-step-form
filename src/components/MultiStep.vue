<template>
  <div class="card">
    <div class="card-steps-container container">
      <Steps v-for="step in steps" :key="step" :stepProp="step" />
    </div>
    <div class="card-form-details">
      <!--
      <PersonalInfo />
      -->
      <PlansInfo />
    </div>
  </div>
</template>
<script setup>
import PersonalInfo from './PersonalInfo.vue'
import PlansInfo from './PlansInfo.vue'
import Steps from './Steps.vue'

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
<style lang="scss">
@import "../styles/global/global.sass";
 // $bg-classroom: #ffd1fb;

//.classroom {
 // background: $bg-classroom;
//}

</style>