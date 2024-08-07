<template>
  <div class="steps">

    <div class="steps-content">
      <div class="steps-content-dot">
        <div class="steps-content-dot-number">
          <span>
            {{stepProp.id}}
          </span>
        </div>
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
