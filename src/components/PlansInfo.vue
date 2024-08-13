<template>
  <div class="steps-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form class="form-group-plans">
      <div class="form-group-plans-radio" v-for="item in planList" :key="item.id">
        <div class="form-group-plans-radio-ui">
          <label :for="item.inputID">
          <img :src="item.planImage" :alt="item.planName">
        </label>
        <input type="radio" class="form-group-plans-radio-input" :id="item.inputID" name="promo" v-model="formPlan" :value="item">
        </div>
        
        
        <div class="form-group-plans-text">
            <p>{{item.planName}}</p>
            <span>{{item.planPrice.monthly}}/mo</span>
          </div>
      </div>
  </form>
</template>
<script setup>
import { ref } from "vue";


const planList = ref([
  {
    id:1,
    planName:'Arcade',
    planPrice:{
      monthly:9,
      yearly:9*(12-2)
    },
    planImage:'src/assets/vue.svg',
    inputID:'arcade'
  },
  {
    id:2,
    planName:'Advanced',
    planPrice:{
      monthly:12,
      yearly:9*(12-2)
    },
    planImage:'src/assets/vue.svg',
    inputID:'advanced'
  },
  {
    id:3,
    planName:'Pro',
    planPrice:{
      monthly:15,
      yearly:9*(12-2)
    },
    planImage:'src/assets/vue.svg',
    inputID:'pro'
  }
])
</script>
<style lang="scss">
@import "../styles/global/global.sass";

  .form-group-plans{
    display:flex;
    justify-content: space-between;
    border:1px solid $cardinal;

    &-radio{
      border:1px solid $black;
      display:flex;
      flex-direction:column;
      width:30%;
    }
  }

</style>