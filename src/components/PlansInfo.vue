<template>
  <div class="steps-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form>

    <div class="form-group-select">

      <div class="form-group-select-radio" v-for="item in planList" :key="item.id">
        <input type="radio" class="form-group-select-radio-input" :id="item.inputID" name="promo" v-model="formPlan" :value="item">
          <label :for="item.inputID" class="form-group-select-radio-ui">
            <img :src="item.planImage" :alt="item.planName">
            
            <div class="form-group-select-radio-ui-text">
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
<style lang="scss">
@import "../styles/global/global.sass";

  .form-group-select{
    display:flex;
    justify-content: space-between;
    margin-bottom:30px;

    &-radio{
      position:relative;
      cursor:pointer;

      &-input{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        z-index:2;
        cursor:pointer;
        opacity:0;
      }

      &-ui{
        height:150px;
        width:130px;
        border:1px solid $beige;
        padding:12px;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        img{
          width:35px;
          height:35px;
        }

        &-text{
          p{
            font-weight:bold;
            color:$lapis-lazuli;
            margin-bottom:3px;
          }
          span{
            color:$turquoise;
            font-size:14px;
          }
        }
      }

      
    }

  }

  .form-group-select-radio-input:checked{
      border:1px solid $lapis-lazuli;
      background-color:$alice-blue;
    }

</style>