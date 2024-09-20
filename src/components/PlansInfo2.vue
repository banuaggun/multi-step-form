<template>
  <div class="card-form-details-description">
    <h1>Select Your Plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <form @submit.prevent="validateForm">

    <div class="plansinfo-web">
      <div class="plansinfo-web-area">
        <div class="plansinfo-web-area-select" v-for="item in planList" :key="item.id">
          <input type="radio" :id="item.inputID" name="promo" v-model="formPlan" :value="item" class="plansinfo-web-area-select-input">
          <label for="item.inputID" class="plansinfo-web-area-select-label">
            <img :src="item.planImage" :alt="item.planName" class="plansinfo-web-area-select-label-image">

            <div class="plansinfo-web-area-select-label-text">
              <p>
                {{item.planName}}
              </p>

              <span v-if="!$store.state.newUser.formBill">
                ${{item.planPrice.monthly}}/mo
              </span>
            
              <span v-if="$store.state.newUser.formBill">
                ${{item.planPrice.yearly}}
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="plansinfo-mobile">
      <div class="plansinfo-mobile-area">
        <div class="plansinfo-mobile-area-select" v-for="item in planList" :key="item.id">
          <input type="radio" :id="item.inputID" name="promo" v-model="formPlan" :value="item" class="plansinfo-mobile-area-select-input">
          <label for="item.inputID" class="plansinfo-mobile-area-select-label">
            <img :src="item.planImage" :alt="item.planName" class="plansinfo-mobile-area-select-label-image">

            <div class="plansinfo-mobile-area-select-label-text">
              <p>
                {{item.planName}}
              </p>

              <span v-if="!$store.state.newUser.formBill">
                ${{item.planPrice.monthly}}/mo
              </span>
            
              <span v-if="$store.state.newUser.formBill">
                ${{item.planPrice.yearly}}
              </span>
            </div>
          </label>
        </div>
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
.plansinfo-web{
  display:flex;
  border:1px solid green;

  &-area{
    display:flex;
    justify-content:space-between;
    gap:10px;

    &-select{
      width:140px;
      height:140px;
      cursor:pointer;
      border:1px solid $beige;
      border-radius:8px;

      &-input{
        width:140px;
        height:140px;
        opacity:0;
        position:absolute;
      }

      &-label{
        width:140px;
        height:140px;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        justify-content: space-between;

        img{
          width:44px;
          height:44px;
          padding-top:6px;
          padding-left:8px;
        }

        &-text{
          padding-left:12px;
          padding-bottom:12px;

          p{
            font-size:1rem;
            font-weight:500;
            color:$lapis-lazuli;
          }

          span{
            font-size:1.03rem;
            font-weight: 600;
            color:$text-color;
          }
        }
      }
    }
  }
}

.plansinfo-mobile{
  display:none;
}

@media screen and (max-width:600px){
  .plansinfo-web{
    display:none;
  }
  .plansinfo-mobile{
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    position:relative;
    width:100%;
    height:100%;
    margin-top:20px;
    margin-bottom:20px;
    border:1px solid green;

    &-area{
      display:flex;
      flex-direction:column;
      border:1px solid blue;

      &-select{
        width:calc(100% - 20px);
        margin:5px auto;
        border-radius:8px;
        cursor:pointer;
        position:relative;
        background:lightgreen;

        &-input{
          width:100%;
          height:100%;
          position:absolute;
          opacity:0;
        }

        &-label{
          width:100%;
          height:60px;
          display: flex;
          justify-content: space-between;
          align-items:center;
          border-radius:8px;

          img{
            width: 40px;
            height:40px;
            margin-left:12px;
          }

          &-text{
            margin-right:12px;
            text-align:left;
            width:35%;

            p{
              font-size:14px;
              font-weight:500;
              color:$lapis-lazuli;
            }

            span{
              font-size:16px;
              font-weight: 600;
              color:$text-color;
            }
          }
        }
      }
    }
  }
}

input:checked ~ .plansinfo-web-area-select-label{
  background-color:$beige;
}

</style>