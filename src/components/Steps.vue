<template>
  <div class="steps">

    <div class="steps-content">
      <div class="steps-content-dot" :class="$store.state.currentStep === stepProp.id ? 'steps-content-dot-active' : ''">
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

  <div class="steps-mobile">
    <div class="steps-mobile-content" :class="$store.state.currentStep === stepProp.id ? 'active' : ''">
      <div class="steps-mobile-content-dot">
        <div class="steps-mobile-content-dot-number">
          <span>
            {{stepProp.id}}
          </span>
        </div>
      </div>
      <div class="steps-mobile-content-dot-details">
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

@media screen and (max-width:600px){
  .steps{
    display:none;
  }
  .steps-mobile{
    display:flex;

    &-content{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:4px;
      background-color:$white-2;
      border-radius:4px 4px 0 0;

      &-dot{
        width:32px;
        height:32px;
        border-radius:50%;
        border:1px solid $beige;
        display:flex;
        align-items:center;
        justify-content:center;
        color:$black;
        font-weight:bold;
        font-size:14px;

        

        &-number{
          width:24px;
          height:24px;
          border-radius:50%;
          background:$beige;
          display:flex;
          justify-content:center;
          align-items:center;
        }
        
        &-details{
        text-transform:uppercase;

        p{
          color:$text-color;
          font-size:12px;
          font-weight:500;
        }
      }
      }
    }
  }
}

.active{
  background-color:$ghost-white;

}

@media screen and (min-width:601px){

.steps-mobile{
  display:none;
}

.steps{
  width:calc(100% - 60px);
  background:$white-2;
  border-radius:12px;
  margin:8px 30px;
  justify-content:center;

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

      &-active{
        background-color:$cardinal;
        color:$white;
      }

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

}
</style>
