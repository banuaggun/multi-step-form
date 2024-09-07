<template>
  <div class="card-form-details-description">
    <h1>Finishing Up</h1>
    <p>Double check everything looks OK before confirming.</p>
  </div>
  <form>
    <div class="forms">
      <div class="forms-area-summary">
        <div class="forms-area-summary-select">
          <div class="bill-state">
            <div>
              <p class="bill">
                {{$store.state.newUser.formPlan.planName}}
                <span v-if="!$store.state.newUser.formBill">(Monthly)</span>
                <span v-if="$store.state.newUser.formBill">(Yearly)</span>
              </p>
              <a role="button" @click="goStep2">Change</a>
            </div>
            <div class="bill-state-price" v-if="!$store.state.newUser.formBill">
              ${{$store.state.newUser.formPlan.planPrice.monthly}}/mo
            </div>
            <div class="bill-state-price" v-if="$store.state.newUser.formBill">
              ${{$store.state.newUser.formPlan.planPrice.yearly}}
            </div>
          </div>
          
          <div class="add-ons" v-for="item in $store.state.newUser.addOns" :key="item.id">
            <p class="add-ons-name">
              {{item.addName}}
            </p>
            <p class="add-ons-price" v-if="!$store.state.newUser.formBill">
              ${{item.planPrice.monthly}}/mo
            </p>
            <p class="add-ons-price" v-if="$store.state.newUser.formBill">
              ${{item.planPrice.yearly}}/yr
            </p>
          </div>
          
        </div>
        <div class="total">
          <span v-if="!$store.state.newUser.formBill">Total (per month)</span>
          <span v-if="$store.state.newUser.formBill">Total (per year)</span>
          <p v-if="!$store.state.newUser.formBill">
            +${{overallMonth}}/mo
          </p>
          <p v-if="$store.state.newUser.formBill">
            +${{overallYear}}/yr
          </p>
        </div>
      </div>

      <div class="forms-buttons">
        <button class="forms-buttons-secondary forms-buttons-btn" @click="handleReturn">
          Back
        </button>
        <button class="forms-buttons-primary forms-buttons-btn" @click="handleMessage">
          Confirm
        </button>
      </div>
    </div>
  </form>
</template>
<script setup>
import store from "../store"


const goStep2 = () => {
  store.state.currentStep = 2
  store.state.isFinished = false
}

let totalSumMonth = store.state.newUser.addOns.map(item => item.planPrice.monthly)
let totalSumYear = store.state.newUser.addOns.map(item => item.planPrice.yearly)

const totalMonth = totalSumMonth.reduce((a, b) => {
  return (a + b)
}, 0)

const totalYear = totalSumYear.reduce((a, b) => {
  return (a + b)
})

const overallMonth = totalMonth + store.state.newUser.formPlan.planPrice.monthly
const overallYear = totalYear + store.state.newUser.formPlan.planPrice.yearly

const handleReturn = () => {
  store.state.currentStep--
  store.state.isConfirm = false
}

const handleMessage = () => {
  store.state.isConfirm = true
  store.state.isFinished = false
}
</script>

<style lang="scss">
@import '../styles/global/global.sass';

form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:relative;
  margin-bottom:0;
  height:100%;

  .forms{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom:20px;
    margin-top:20px;

    &-area-summary{

      &-select{
        background-color:$alice-blue;
        padding:20px;
        border-radius:8px;
        border:1px solid $cool-gray;
        box-shadow:0 2px 2px 1px $cool-gray;

        .bill-state{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding-block:20px;
          border-bottom:1px solid $cool-gray;
          margin-bottom:20px;

          p{
            font-weight:500;
            color:$lapis-lazuli;
          }

          a{
            text-decoration:underline;
            color:$cool-gray;
            margin-top:5px;
            display:block;
            cursor:pointer;
            font-size:14px;
            transition:all 0.2s;

            &:hover{
              color:$cardinal;
            }
          }

          &-price{
            font-weight: 600;
            color:$text-color;
          }
        }

        .add-ons{
          display:flex;
          justify-content: space-between;
          align-items:center;
          margin-bottom:20px;

          &-name{
            color:$lapis-lazuli;
          }

          &-price{
            color:$text-color;
            font-weight:600;
          }
        }

        .storage{
          display:flex;
          justify-content: space-between;
          align-items:center;
          margin-bottom:20px;

          &-name{
            color:$lapis-lazuli;
          }

          &-price{
            color:$text-color;
            font-weight:600;
          }
        }

      }

      .total{
          display:flex;
          justify-content:space-between;
          padding:20px;

          span{
            font-size:14px;
            color:$stone-2;
          }

          p{
            font-size:18px;
            font-weight:600;
            color:$text-color;
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
</style>