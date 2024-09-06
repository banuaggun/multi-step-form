<template>
  <div class="card-form-details-description">
    <h1>Personal Info</h1>
    <p>Please, provide your name, email and phone number</p>
  </div>
  <form @submit.prevent="validateForm()">
    <div class="forms">
      <div class="forms-area">
        <div class="forms-area-validation">
          <label for="name">Name</label>
          <span v-if="$store.state.newUser.formName.isComplete">This field is required</span>
        </div>
        <input class="forms-area-input" :class="$store.state.newUser.formName.isComplete ? 'required' : 'forms-area-input'" type="text" id="name" v-model="name" @keydown="isTyping" placeholder="Aria Doe">
      </div>
      <div class="forms-area">
        <div class="forms-area-validation">
          <label for="name">Email</label>
          <span v-if="$store.state.newUser.formEmail.isComplete">This field is required</span>
        </div>
        <input class="form-group-input forms-area-input" :class="$store.state.newUser.formEmail.isComplete ? 'required' : 'forms-area-input'" type="email" id="email" v-model="email" placeholder="Aria Doe">
      </div>
      <div class="forms-area">
        <div class="forms-area-validation">
          <label for="name">Phone</label>
          <span v-if="$store.state.newUser.formPhone.isComplete">This field is required</span>
        </div>
        <input class="form-group-input forms-area-input" :class="$store.state.newUser.formPhone.isComplete ? 'required' : 'forms-area-input'" type="phone" id="number" v-model="phone" placeholder="Aria Doe">
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
@import "../styles/global/global.sass";

form{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom:0;
  height:100%;

  .required{
    border:1px solid $cardinal !important;
  }

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

      &-validation{
        display:flex;
        justify-content:space-between;

        span{
          font-size:14px;
          font-weight:500;
          color:$cardinal;
        }
      }

      label{
        color:$text-color;
        font-weight:500;
        margin-bottom:6px;
      }

      &-input{
        width:calc(100% - 32px);
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

.required{
  border:1px solid $cardinal;
}

</style>