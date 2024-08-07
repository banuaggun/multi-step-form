<template>
  <div class="steps-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form>
    <div class="form-group-select">
      <div class="form-group-select-radio" v-for="item in planList" :key="item.id">
        <input type="radio" class="radio" :id="item.inputID" name="promo" v-model="formPlan" :value="item">
        <label :for="item.inputID" class="radio-ui">
          <img :src="planImage" :alt="item.planName">

          <div>
            <p>{{item.planName}}</p>
            <span>{{item.planPrice.monthly}}/mo</span>
          </div>
        </label>
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
