<template>
  <div class="card-form-details-description">
    <h1>Personal Info</h1>
    <p>Please, provide your name, email and phone number</p>
  </div>

  <form class="personal-info" @submit.prevent="validateForm()">
    <div class="personal-info-area">

      <div class="personal-info-area-edit">

        <div class="personal-info-area-edit-validation">
          <label for="name">Name</label>
          <span v-if="$store.state.newUser.formName.isComplete">This field is required</span>
        </div>
        <input class="personal-info-area-edit-input" type="text" id="name" :class="$store.state.newUser.formName.isComplete ? 'required' : 'personal-info-area-edit-input'" v-model="name" @keydown="isTyping" placeholder="Aria Doe">
      </div>

       <div class="personal-info-area-edit">

        <div class="personal-info-area-edit-validation">
          <label for="email">Email</label>
          <span v-if="$store.state.newUser.formEmail.isComplete">This field is required</span>
        </div>
        <input class="personal-info-area-edit-input" type="text" id="email" :class="$store.state.newUser.formEmail.isComplete ? 'required' : 'personal-info-area-edit-input'" v-model="email" @keydown="isTyping" placeholder="ariadoe@mail.com">
      </div>

       <div class="personal-info-area-edit">

        <div class="personal-info-area-edit-validation">
          <label for="phone">Phone</label>
          <span v-if="$store.state.newUser.formPhone.isComplete">This field is required</span>
        </div>
        <input class="personal-info-area-edit-input" type="number" id="phone" :class="$store.state.newUser.formPhone.isComplete ? 'required' : 'personal-info-area-edit-input'" v-model="phone" @keydown="isTyping">
      </div>
    </div>

    <div class="personal-info-buttons">
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
import { computed } from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const increaseStep = () => {
  store.state.currentStep++
}

const name = computed({
  get(){
    return store.state.newUser.formName.name
  },
  set(newName){
    return store.commit('setName', newName)
  }
})

const email = computed({
  get(){
    return store.state.newUser.formEmail.email
  },
  set(newEmail){
    return store.commit('setEmail', newEmail)
  }
})

const phone = computed({
  get(){
    return store.state.newUser.formPhone.phone
  },
  set(newPhone){
    return store.commit('setPhone', newPhone)
  }
})

const isTyping = () => {
  store.state.newUser.formName.isComplete = false
  store.state.newUser.formEmail.isComplete = false
  store.state.newUser.formPhone.isComplete = false
}

const validateForm = () => {
  if(!name.value){
    store.state.newUser.formName.isComplete = true
    return
  }

  if(!email.value){
    store.state.newUser.formEmail.isComplete = true
    return
  }

  if(!phone.value){
    store.state.newUser.formPhone.isComplete = true
    return
  }

  store.state.currentStep++
}
</script>
<style lang="scss">
@import '../styles/global/global.sass';

.personal-info{
  display:flex;
  flex-direction:column;

  &-area{
    display:flex;
    flex-direction: column;
    margin-top:20px;
    &-edit{
      margin-bottom:30px;
      width:100%;

      &-validation{
        display:flex;
        justify-content:space-between;
        margin-bottom:6px;

        label{
          color:$text-color;
          font-weight:500;
        }

        span{
          font-size:14px;
          color:$cardinal;
          font-weight:500;
          letter-spacing:0.5px;
        }
      }

      &-input{
        width:calc(100% - 32px);
        padding:8px 16px;
        border-radius:4px;
        border:1px solid $text-color;
        color:$lapis-lazuli;

        &:focus{
          border:1px solid $text-color;
          outline:none;
        }
      }
    }
  }

  &-buttons{
    display:flex;
    justify-content: space-between;
    margin-top:20px;
  }
}

@media screen and (max-width:600px){
  .personal-info-area-edit{
    margin-bottom:15px;
  }
}
</style>