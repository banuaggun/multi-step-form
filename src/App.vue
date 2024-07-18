<template>
  <div class="main-content">
    <MultiStep />
  </div>
</template>

<script> 
import MultiStep from './components/MultiStep.vue';
export default{
  name:'App',
  components:{MultiStep}
}
</script>

<style lang="scss">
@import './styles/global/global.sass';

</style>
