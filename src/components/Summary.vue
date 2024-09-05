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
              <p>
                Arcade
                <span>(Monthly)</span>
              </p>
              <a role="button">Change</a>
            </div>
            <div class="bill-state-price">$9/mo</div>
          </div>
          
          <div class="add-ons">
            <p class="add-ons-name">
              Online Service
            </p>
            <p class="add-ons-price">
              +$1/mo
            </p>
          </div>

          <div class="storage">
            <p class="storage-name">
              Larger Storage
            </p>
            <p class="storage-price">
              +$2/mo
            </p>
          </div>

          
        </div>
        <div class="total">
            <span>Total (per month)</span>
            <p>+$12/mo</p>
          </div>
      </div>

      <div class="forms-buttons">
        <button class="forms-buttons-secondary forms-buttons-btn">
          Back
        </button>
        <button class="forms-buttons-primary forms-buttons-btn">
          Confirm
        </button>
      </div>
    </div>
  </form>
</template>
<script setup>
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