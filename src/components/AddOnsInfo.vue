<template>
  <div class="steps-description">
    <h1>Pick Add Ons</h1>
    <p>Add-ons help enhance your going experiment.</p>
  </div>
  <form>
    <div class="form-group-check">
      <div class="form-group-check-container">
        <input type="checkbox">
        <span class="checkbox-icon"></span>
        <div class="form-group-check-container-details add-details">
          <div>
            <p>Online Service</p>
            <span>Access to multiplayer games</span>
          </div>
          <p class="adds-price">$1/mo</p>
        </div>
      </div>
    </div>
    <div class="form-buttons">
      <button class="form-buttons-btn form-buttons-btn-secondary">
        Go Back
      </button>
      <button class="form-buttons-btn form-buttons-btn-primary">
        Next step
      </button>
    </div>
  </form>
</template>
<script setup>

</script>
<style lang="scss">
@import '../styles/global/global.sass';

.form-group-check{
  display:block;
  position:relative;
  cursor:pointer;
  border:1px solid $cardinal;
  padding:15px 20px;
  border-radius:8px;
  background:$ghost-white;
  margin-bottom:20px;

  &:has(input:checked){
    background:$beige;
    border:1px solid $turquoise;
  }

  &-container{
    input{
      position:absolute;
      left:0;
      top:0;
      opacity:0;
    }
    .checkbox-icon{
      width:19px;
      height:19px;
      position:absolute;
      background:$white;
      border-radius:5px;
      border:1px solid $light-beige;
      top:50%;
      transform:translateY(-50%);
      transition:all 0.3s;

      &::after{
        left:6px;
        top:2px;
        height:5px;
        width:5px;
        border:solid $white;
        border-width:0 3px 3px 0;
        -webkit-transform:rotate(45deg);
        -ms-transform:rotate(45deg);
        transform:rotate(45deg);
        transition:all 0.1s;
      }
    }
    &-details{
      padding-left:35px;
      display:flex;
      align-items:center;
      justify-content: space-between;

      p{
        font-weight:bold;
        color:$lapis-lazuli;
        margin-bottom:3px;
      }

      span{
        color:$cool-gray;
        font-size:14px;
      }

      .adds-price{
        font-weight:400;
        font-size:14px;
        color:$lapis-lazuli;
      }
    }
  }
}

.form-group-check-container:hover + input ~ .checkbox-icon{
  background:$cool-gray;
}

.form-group-check-container + input:checked ~ .checkbox-icon{
  background:$beige;
}

.checkbox-icon::after{
  content:"";
  position: absolute;
  opacity:0;
}
.form-group-check-container input:checked ~ .checkbox-icon::after{
  opacity:1;
  transform:rotate(45deg);
}

.form-group-check-container input:checked ~.checkbox-icon{
  border:0;
}
</style>