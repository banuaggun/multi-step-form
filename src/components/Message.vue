<template>
  <div class="confirm-message">
    <img src="../assets/images/message-2.svg" style="width:100px; height:100px" :alt="message.header" />
    <h1>{{message.header}}</h1>
    <p>{{message.messageText}}</p>
    <a href="/" target="_top">Return to Home Page</a>
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
    margin:20px auto 20px auto;
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
    color:$text-color-2;
    font-size:16px;
  }

  a{
    margin-top:20px;
    color:$cardinal;
    font-weight:500;
    font-size:1rem;
    padding-bottom:3px;
    text-decoration: none;
    border-bottom:2px solid $cardinal;
  }
}

</style>