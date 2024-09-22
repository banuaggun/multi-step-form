<template>
  <div class="card-form-details-description">
    <h1>Finishing Up</h1>
    <p>Double check everything looks OK before confirming.</p>
  </div>
  <form>
    <div class="summary-mobile">
      <div class="summary-mobile-area">
        <div class="summary-mobile-area-select">

          <div class="summary-mobile-area-select-bill-state">
            <div>
              <p class="bill">
                {{$store.state.newUser.formPlan.planName}}

                <span v-if="!$store.state.newUser.formBill">
                  (Monthly)
                </span>
                <span v-if="$store.state.newUser.formBill">
                  (Yearly)
                </span>
              </p>

              <a role="button" class="change-link" @click="goStep2">
                Change
              </a>

            </div>

            <div class="price" v-if="!$store.state.newUser.formBill">
              ${{$store.state.newUser.formPlan.planPrice.monthly}}/mo
            </div>

            <div class="price" v-if="$store.state.newUser.formBill">
              ${{$store.state.newUser.formPlan.planPrice.yearly}}/yr
            </div>
          </div>

          <div class="summary-mobile-area-select-add">
            <div class="summary-mobile-area-select-add-ons" v-for="item in $store.state.newUser.addOns" :key="item.id">
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
          

        </div>

        <div class="summary-mobile-area-total">
          <p>
            Total
          </p>
          <div class="summary-mobile-area-total-price">
          <span v-if="!$store.state.newUser.formBill">
              (per month)
            </span>
            <span v-if="$store.state.newUser.formBill">
              (per year)
            </span>
            <p v-if="!$store.state.newUser.formBill">
              +${{overallMonth}}/mo
            </p>
            <p v-if="$store.state.newUser.formBill">
              +${{overallYear}}/yr
            </p>
          </div>
          </div>
        <div class="summary-mobile-area-buttons">
          <button class="forms-buttons-secondary forms-buttons-btn" @click.self="handleReturn">
            Back
          </button>
          <button class="forms-buttons-primary forms-buttons-btn" @click="handleMessage">
            Confirm
          </button>
        </div>
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

const goStep3 = () => {
  store.state.currentStep = 3
  storestate.isFinished = false
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
  store.state.isFinished = false
}

const handleMessage = () => {
  store.state.isConfirm = true
  store.state.isFinished = false
}
</script>
<style lang="scss">
@import '../styles/global/global.sass';

.summary-mobile{
  display:flex;
  flex-direction: column;
  margin-top:10px;

  &-area{
    display:flex;
    flex-direction: column;

    &-select{
      background-color:$ghost-white;
      display: flex;
      flex-direction: column;
      border:1px solid $stone-2;
      padding:8px 24px;
      border-radius:8px;

      &-bill-state{
        border-bottom:3px solid $beige;
        padding:8px;
        margin-bottom:20px;
        display:flex;
        justify-content: space-between;

        .change-link{
          color:$cardinal;
          font-weight:500;
        }
      }

      &-add{
        display:flex;
        flex-direction: column;
        height:150px;
        justify-content: flex-start;
        margin-bottom:10px;

        &-ons{
          display:flex;
          justify-content: space-between;
          padding:8px;
          margin-bottom:10px;
          border-bottom:1px solid $beige;
        }
      }

    }

    &-total{
      background: $ghost-white;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      padding:8px 16px;
      position:relative;
      margin-top:20px;

      p{
        font-weight:700;
        font-size:1.2rem;
        color:$black;
      }

      &-price{
        display:flex;
        justify-content: space-between;
        align-items:center;
        text-transform: capitalize;
      }
    }

    &-buttons{
      display:flex;
      justify-content: space-between;
      margin-top:25px;
     
    }
  }
}
</style>