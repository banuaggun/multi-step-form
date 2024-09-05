<template>
  <div class="confirm-message">
    <img src="../assets/vue.svg" :alt="message.header" />
    <h1>{{message.header}}</h1>
    <p>{{message.messageText}}</p>
  </div>
</template>
<script setup>
const message = {
  header: 'Thank You!',
  messageText: 'Thanks for confirming your subscription! We hope you have fun using our platform, please feel from to email us at support@loremmail.com'
}
</script>
<style lang="scss">
@import "../styles/global/global.sass";

.confirm-message{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  img{
    margin:0 auto 30px auto;
    display:block;
  }

  h1{
    text-align:center;
    margin-bottom:15px;
    color:$text-color;
  }

  p{
    text-align:center;
    line-height: 25px;
    color:$cool-gray;
    font-size:16px;
  }
}

</style>