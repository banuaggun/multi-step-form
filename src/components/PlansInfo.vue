<template>
  <div class="card-form-details-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form>

    <div class="forms">

      <div class="forms-area-select" v-for="item in planList" :key="item.id">

        <input type="radio" class="forms-area-select-input" :id="item.inputID" name="promo" v-model="formPlan" :value="item">
        <label :for="item.inputID" class="forms-area-select-label">

          <img :src="item.planImage" :alt="item.planName" class="forms-area-label-image">
            
          <div class="forms-area-select-label-text">
            <p>{{item.planName}}</p>
            <span>{{item.planPrice.monthly}}/mo</span>
          </div>
        </label>
  
      </div>

    </div>

    <div class="form-group-bill-plan forms-group">
      <div class="form-group-bill-plan-checkbox forms-group-checkbox">
        <p>Monthly</p>
        <div class="switch">
          <input id="switch-1" type="checkbox" class="switch-input" />
          <label for="switch-1" class="switch-label">Switch</label>
        </div>
        <p>Yearly</p>
      </div>
    </div>
      
    <div class="forms-buttons">
      <button class="forms-buttons-secondary forms-buttons-btn">
        Back
      </button>
      <button class="forms-buttons-primary forms-buttons-btn">
        Next
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

form{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom:0;
  height:100%;

  .forms{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:20px;
    margin-top:20px;

    &-area-select{
      border:1px solid $lapis-lazuli;
      position: relative;
      height:150px;
      width:130px;
      cursor:pointer;
      border-radius:8px;

      &-input{
        position:absolute;
        width:24px;
        height:24px;
        top:12px;
        right:12px;
        opacity:0;
      }

      &-label{
        border-radius:8px;
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        img{
          width:40px;
          height:40px;
          padding-top:8px;
          padding-left:8px;
        }

        &-text{
          color:$text-color;
          padding-left:8px;
          padding-bottom:8px;
          p{
            font-weight:600;
            margin-bottom:3px;
          }
          span{
            font-size:14px;
            font-weight:400;
          }
        }
      }
    }

    &-group{
      display:flex;
      justify-content:center;
      background-color:$alice-blue;
      //box-shadow: 0 2px 2px 1px $cool-gray;
      border-radius:8px;
      padding:10px 0;

      &-checkbox{
        display:flex;
        align-items:center;
        gap:16px;
        cursor:pointer;

        .switch {
          position: relative;
          display: inline-block;
        }
        
        .switch-input {
          display: none;
        }

        .switch-label {
          display: block;
          width: 48px;
          height: 24px;
          text-indent: -150%;
          clip: rect(0 0 0 0);
          color: transparent;
          user-select: none;
        }

        .switch-label::before,
        .switch-label::after {
          content: "";
          display: block;
          position: absolute;
          cursor: pointer;
        }

        .switch-label::before {
          width: 100%;
          height: 100%;
          background-color: $light-beige;
          border-radius: 9999em;
          -webkit-transition: background-color 0.25s ease;
          transition: background-color 0.25s ease;
        }

        .switch-label::after {
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: $ghost-white;
          border:0.5px solid $cool-gray;
          box-shadow: 0 0 2px $cool-gray;
          -webkit-transition: left 0.25s ease;
          transition: left 0.25s ease;
        }

        .switch-input:checked + .switch-label::before {
          background-color: $stone-1;
        }

        .switch-input:checked + .switch-label::after {
          left: 24px;
        }

      }
    }

    &-buttons{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-content:flex-end;
      align-items:center;
    }
  }
}

input:checked ~ .forms-area-select-label{
  background-color:$alice-blue;
  color:$white;
}
</style>