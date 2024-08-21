<template>
  <div class="steps-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form>

    <div class="form-group-select">

      <div class="form-group-select-radio" v-for="item in planList" :key="item.id">
        <input type="radio" class="form-group-select-radio-input selected" :id="item.inputID" name="promo" v-model="formPlan" :value="item">
          <label :for="item.inputID" class="form-group-select-radio-ui">
            <img :src="item.planImage" :alt="item.planName">
            
            <div class="form-group-select-radio-ui-text">
              <p>{{item.planName}}</p>
              <span>{{item.planPrice.monthly}}/mo</span>
            </div>
          </label>

        
        
      </div>

    </div>

    <div class="form-group-bill-plan">
      <div class="form-group-bill-plan-checkbox">
        <p>Monthly</p>
        <input type="checkbox" class="check trigger">
        <span class="checkbox"></span>
        <p>Yearly</p>
      </div>
    </div>
      
    <div class="form-buttons">
      <button class="form-buttons-btn-secondary">
        Go Back
      </button>
      <button class="form-buttons-btn form-buttons-btn-primary">
        Next step
      </button>
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
    planImage:'src/assets/images/arcade.svg',
    inputID:'arcade'
  },
  {
    id:2,
    planName:'Advanced',
    planPrice:{
      monthly:12,
      yearly:9*(12-2)
    },
    planImage:'src/assets/images/advanced.svg',
    inputID:'advanced'
  },
  {
    id:3,
    planName:'Pro',
    planPrice:{
      monthly:15,
      yearly:9*(12-2)
    },
    planImage:'src/assets/images/pro.svg',
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
        width:24px;
        height:24px;
        right:12px;
        top:12px;
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
        cursor:pointer;

        img{
          width:40px;
          height:40px;
        }

        &-text{
          color:$lapis-lazuli;
          p{
            font-weight:bold;
            margin-bottom:3px;
          }
          span{
            font-size:14px;
            font-weight:400;
          }
        }
      }

      
    }

  }

  input:checked ~ .form-group-select-radio-ui{
    background-color:$alice-blue;
    border:1px solid $lapis-lazuli;
    color:$white;
  }

  .form-group-bill-plan{
    display:flex;
    justify-content:center;
    padding:10px 0;
    background:$lavender-web;
    border-radius: 8px;
    box-shadow: 0 2px 2px 1px $cool-gray;

    &-checkbox{
      display:flex;
      gap:15px;
      cursor:pointer;

      .checkbox{
        position:relative;
        height:20px;
        width:35px;
        background:$lapis-lazuli;
        border-radius:20px;

        &:before{
          content:'';
          position:absolute;
          height:12px;
          width:12px;
          border-radius:100%;
          background:$white;
          left:3px;
          top:50%;
          transform:translateY(-50%);
          transition:0.2s ease;
        }
      }

      .check{
        opacity:0;
        height:1px;
        width:1px;
        position:absolute;
        top:0;
        left:0;
      }
    }
  }

  input.check:checked ~ .checkbox{
    transform: translate(17px, -50%);
  }

</style>