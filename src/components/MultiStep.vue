<template>
  <div class="card">
    <div class="card-steps-container">
      <Steps v-for="step in steps" :key="step" :stepProp="step" />
    </div>

    <div class="card-steps-mobile">
      <Steps v-for="step in steps" :key="step" :stepProp="step" />
    </div>
    <div class="card-form-details">
    
      <PersonalInfo v-if="$store.state.currentStep === 1" />

      <PlansInfo v-if="$store.state.currentStep === 2" />

      <AddOnsInfo v-if="$store.state.currentStep === 3" />

      <Summary v-if="$store.state.isFinished" />

      <Message v-if="$store.state.isConfirm" />

    </div>

  </div>
</template>
<script setup>
import PersonalInfo from './PersonalInfo.vue'
import PlansInfo from './PlansInfo.vue'
import AddOnsInfo from './AddOnsInfo.vue'
import Steps from './Steps.vue'
import Summary from './Summary.vue'
import Message from './Message.vue'

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

.card{
  height:550px;
  width:800px;
  background-color: $white-2;
  border-radius: 16px;
  box-shadow: 0 4px 30px 5px hsla(0, 0%, 0%, 0.08);
  padding:10px;
  display: grid;
  grid-template-columns: 260px 1fr;

  &-steps-mobile{
    display:none;
  }

  &-steps-container{
    width:260px;
    height:100%;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items: center;
    align-content:center;
    justify-content:center;
  }

  &-form-details{
    position:relative;
    display: flex;
    flex-direction:column;
    padding:0 50px 0px 50px;
    &-description{
      padding-top:20px;

      h1{
        margin-bottom:10px;
      }

      p{
        color:$black;
        font-size:1rem;
        margin-bottom:10px;
      }
    }
  }
}

//mobile 

@media screen and (max-width:600px){
  .card{
    width:100%;
    grid-template-columns: 1fr;
    margin:0;
    padding:0;
    box-shadow: none;
    
    &-steps-container{
      display:none;
    }

    &-steps-mobile{
      width:100%;
      height:150px;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      gap:4px;
      position:absolute;
      left:0;
      top:0;
      z-index:2;
    }

    &-form-details{
      z-index:1;
      margin-top:150px;
      margin-bottom:30px;
      padding:0 20px 50px 20px;

      &-description{
        padding-top:20px;

        h1{
          margin-bottom:5px;
        }

        p{
          margin-bottom:5px;
          font-size:14px;
        }
      }
    }
  }
}
</style>