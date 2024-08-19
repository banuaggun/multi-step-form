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
<style lang="scss">
@import "../styles/global/global.sass";

.steps{
  background:$white-2;
  border-radius:12px;
  margin:16px 30px;
  display:flex;
  align-items:center;

  &-content{
    display:flex;
    align-items:center;
    padding:12px 16px;

    &-dot{
      width:40px;
      height:40px;
      border-radius:50%;
      border:1px solid $beige;
      display:flex;
      align-items:center;
      justify-content:center;
      color:$black;
      font-weight:bold;
      font-size:24px;
      margin-right:20px;

      &-number{
        width:32px;
        height:32px;
        border-radius:50%;
        background:$beige;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      &-details{
        text-transform:uppercase;

        span{
          color:$black;
          font-size:1rem;
        }

        p{
          color:$black;
          font-size:1rem;
          font-weight:600;
        }
      }
    }
  }
}
</style>
