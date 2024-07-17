<template>
  <div class="steps">
    <div class="steps-1 dot">
      {{stepProp.id}}
    </div>
      <div class="dot-details">
        <span>
          {{stepProp.title}}
        </span>
        <p>
          {{stepProp.stepTitle}}
        </p>
      </div>
  </div>
</template>
<script setup>
const props = defineProps({
  stepProp: Object
})
</script>
<style lang="">
  
</style>