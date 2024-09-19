<template>
  <div class="card-form-details-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form @submit.prevent="validateForm">
    <div class="plans-info-mobile">

        <div class="plans-info-mobile-area" v-for="item in planList" :key="item.id">

          <input type="radio" class="plans-info-mobile-area-input" :id="item.inputID" name="promo" v-model="formPlan" :value="item">

          <label for="item.inputID" class="plans-info-mobile-area-label">

            <img :src="item.planImage" :alt="item.planName" class="plans-info-mobile-area-label-image">
            
            <div class="plans-info-mobile-area-label-text">
              <p>
                {{item.planName}}
              </p>
         
              <span v-if="!$store.state.newUser.formBill">
                ${{item.planPrice.monthly}}/mo
              </span>
            
              <span v-if="$store.state.newUser.formBill">
                ${{item.planPrice.yearly}}/yr
              </span>
            </div>

          </label>

        </div>

        <div class="plans-info-mobile-switch">
          <div class="plans-info-mobile-switch-checkbox">
            
            <p>Monthly</p>

            <div class="switch">
              <input type="checkbox" id="switch-1" v-model="formBill" class="switch-input">

              <label for="switch-1" class="switch-label"></label>

            </div>

            <p>Yearly</p>

          </div>
        </div>

        <div class="plans-info-mobile-buttons">
          <button class="forms-buttons-secondary forms-buttons-btn" @click.self="goBack">
            Back
          </button>
          <button class="forms-buttons-primary forms-buttons-btn" @click="validateForm">
            Next
          </button>
        </div>
    </div>
  </form>
</template>
<script setup>
import store from '../store';
import { computed, ref } from "vue";

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

const formPlan = computed({
  get(){
    return store.state.newUser.formPlan
  },
  set(newPlan){
    return store.commit('setPlan', newPlan)
  }
})

const formBill = computed({
  get(){
    return store.state.newUser.formBill
  },
  set(newFormBill){
    return store.commit('setFormBill', newFormBill)
  }
})

const goBack = () => {
  store.state.currentStep--
}

const validateForm = () => {
  store.state.currentStep++
}

</script>

<style lang="scss">
@import "../styles/global/global.sass";

.plans-info-mobile{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  margin-top:20px;
  margin-bottom: 20px;
  gap:8px;

  &-area{
    display: flex;
    flex-direction: row;
    position:relative;
    justify-content: space-between;
    margin-bottom:40px;

    &-input{
      position:absolute;
      width:130px;
      height:130px;
      opacity:0;
    }

    &-label{
      border:1px solid red; 
      width:120px;
      height:120px;
      border:1px solid $beige;
      border-radius:8px;
      padding:8px;
      display:flex;
      flex-direction:column;
      justify-content: space-between;

      img{
        width:44px;
        height:44px;
      }

      &-text{
        text-align:left;

        p{
          color:$lapis-lazuli;
          font-size:1rem;
          font-weight:500;
        }

        span{
          color:$text-color;
          font-size:1.03rem;
          font-weight:600;
        }
      }
    }
  }

  &-switch{
    display:flex;
    justify-content:center;
    padding: 10px 0;
    margin:10px auto;

    &-checkbox{
      display:flex;
      align-items:center;
      gap:16px;
      cursor:pointer;

      .switch{
        position:relative;
        display: inline-block;
      }

      .switch-input{
        display:none;
      }

      .switch-label{
        display:block;
        width:48px;
        height:24px;
        text-indent: -150%;
        clip:rect(0 0 0 0);
        color:transparent;
        user-select:none;
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
    display:flex;
    justify-content:space-between;
    margin-top:40px;
    width:100%;
  }
}



@media screen and (max-width:600px){
  .plans-info-mobile{
    margin-top:20px;
    margin-bottom:20px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    position:relative;
    
    &-area{
      display:flex;
      flex-direction: row;
      align-items:center;
      justify-content:space-between;
      width:calc(100% - 20px);
      margin:5px auto;
      position:relative;
      cursor:pointer;


        &-input{
          position:absolute;
          width:100%;
          height:100%;
          right:0px;
          top:0px;
          opacity:0;
        }


        &-label{
          display:flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          text-align:left;
          width:100%;
          height:60px;
          padding:10px;
          cursor:pointer;
          border-radius:8px;
          border:1px solid $beige;

          img{
            width:36px;
            height:36px;
          }

          &-text{
            color:$text-color;
            text-align:left;
            width:35%;

            p{
              font-size:14px;
              font-weight:500;
            }

            span{
              font-size:14px;
              font-weight:600;
            }
          }

        }
    }

    &-switch{
      display:flex;
      justify-content:center;
      padding: 10px 0;
      margin:10px auto;

      &-checkbox{
        display:flex;
        align-items:center;
        gap:16px;
        cursor:pointer;

        .switch{
          position:relative;
          display: inline-block;
        }

        .switch-input{
          display:none;
        }

        .switch-label{
          display:block;
          width:48px;
          height:24px;
          text-indent: -150%;
          clip:rect(0 0 0 0);
          color:transparent;
          user-select:none;
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
      display:flex;
      justify-content:space-between;
      margin-top:40px;
    }
  }
}


input:checked ~ .plans-info-mobile-area-label, 
input:checked ~ .plans-info-web-select-area-label{
  background-color: $beige;
}
</style>