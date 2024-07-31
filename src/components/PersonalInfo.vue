<template>
  <div class="steps-description">
    <h1>Personal Info</h1>
    <p>Please, provide your name, email and phone number</p>
  </div>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" placeholder="Aria Doe">
    </div>
    <div class="form-group">
      <label for="name">Email Address</label>
      <input type="text" id="email" v-model="name" placeholder="Aria Doe">
    </div>
    <div class="form-group">
      <label for="name">Phone Number</label>
      <input type="number" id="number" v-model="name" placeholder="Aria Doe">
    </div>
  </form>
</template>
<script setup>

</script>