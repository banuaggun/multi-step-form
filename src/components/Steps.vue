<template>
  <div class="steps">

    <div class="steps-content">
      <div class="steps-content-dot">
        {{stepProp.id}}
      </div>
      <div class="steps-content-dot-details">
        <span>
          {{stepProp.title}}
        </span>
        <p>
          {{stepProp.stepTitle}}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  stepProp: Object
})
</script>
