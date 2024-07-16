<template>
  <div class="card">
    <div class="card-steps-container container">
      <Steps />
    <span>alt baslık</span>
    </div>
    <div class="card-steps-form-details classroom">
      card
    </div>
  </div>
</template>
<script setup>
import Steps from './Steps.vue'

</script>
<style lang="scss">
//@import "../styles/global/global.sass";
  $bg-classroom: #ffd1fb;

.classroom {
  background: $bg-classroom;
}

</style>