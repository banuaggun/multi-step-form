<template>
  <div class="card-form-details-description">
    <h1>Personal Info</h1>
    <p>Please, provide your name, email and phone number</p>
  </div>
  <form>
    <div class="forms">
      <div class="forms-area">
        <label for="name">Name</label>
        <input class="forms-area-input" type="text" id="name" v-model="name" placeholder="Aria Doe">
      </div>
      <div class="forms-area">
        <label for="name">Email Address</label>
        <input class="form-group-input forms-area-input" type="text" id="email" v-model="name" placeholder="Aria Doe">
      </div>
      <div class="forms-area">
        <label for="name">Phone Number</label>
        <input class="form-group-input forms-area-input" type="number" id="number" v-model="name" placeholder="Aria Doe">
      </div>


    </div>

    <div class="forms-buttons">
      <button class="forms-buttons-secondary forms-buttons-btn" style="background-color:transparent; visibility:hidden;">
        Back
      </button>
      <button class="forms-buttons-primary forms-buttons-btn">
        Next
      </button>
    </div>
    
  </form>
  
</template>
<script setup>

</script>

<style lang="scss">
@import "../styles/global/deneme.sass";

form{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom:0;
  height:100%;

  .forms{
    display:flex;
    flex-direction: column;
    margin-bottom:20px;
    margin-top:30px;

    &-area{
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      margin:10px 0;
      outline:none;

      label{
        color:$text-color;
        font-weight:500;
        margin-bottom:6px;
      }

      &-input{
        width:80%;
        padding: 8px 16px;
        border-radius:4px;
        border:1px solid $text-color;
        color:$lapis-lazuli;
        font-weight:500;
        font-size:1rem;

        &:focus{
          border:1px solid $text-color;
          outline:none;
        }
      }
    }
  
  }

  .forms-buttons{
    width:100%;
    display:flex;
    justify-content: space-between;
    align-content:flex-end;
    align-items:center;
  }

}

</style>