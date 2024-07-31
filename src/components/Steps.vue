<template>
  <div class="steps">
    <div class="steps-content steps-dot">
      {{stepProp.id}}
    </div>
      <div class="steps-dot-details">
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
