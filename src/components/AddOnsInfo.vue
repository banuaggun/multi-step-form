<template>
  <div class="card-form-details-description">
    <h1>Pick Add-Ons</h1>
    <p>Add-ons help enhance your going experiment.</p>
  </div>
  <form>
    <div class="forms">

    <div class="forms-area-check" v-for="item in addOnsList" :key="item.id">
      <label class="forms-area-check-container">
        <input type="checkbox">
        <span class="checkbox-icon"></span>
        <div class="forms-area-check-container-adds-details">
          <div class="forms-area-check-container-adds-details-text">
            <p>{{item.addName}}</p>
            <span>{{item.description}}</span>
          </div>
          <p class="forms-area-check-container-adds-details-price">${{item.planPrice.monthly}}/mo</p>
        </div>
      </label>
    </div>

    </div>

    <div class="forms-buttons">
      <button class="forms-buttons-secondary forms-buttons-btn">
        Back
      </button>
      <button class="forms-buttons-primary forms-buttons-btn">
        Next
      </button>
    </div>
  </form>
</template>

<script setup>

const addOnsList = [
  {
    id:1,
    addName:'Online Service',
    addValue:'ao1',
    addCode:'onlineService',
    description:'Access to multiplayer games',
    planPrice:{
      monthly:1,
      yearly:1*(12-2)
    }
  },
  {
    id:2,
    addName:'Larger Storage',
    addValue:'ao2',
    addCode:'largerStorage',
    description:'Extra 1TB of cloud save',
    planPrice:{
      monthly:2,
      yearly:2*(12-2)
    }
  },
  {
    id:3,
    addName:'Customizable Profile',
    addValue:'ao3',
    addCode:'customizableProfile',
    description:'Custom theme on your profile',
    planPrice:{
      monthly:2,
      yearly:2*(12-2)
    }
  }
]
</script>

<style lang="scss">
@import '../styles/global/global.sass';
form{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  position:relative;
  margin-bottom:0;
  height:100%;

  .forms{
    display:flex;
    flex-direction: column;
    margin-bottom:20px;
    margin-top:30px;

    &-area-check{
      display:block;
      position:relative;
      cursor:pointer;
      border:1px solid $light-beige;
      padding:15px 20px;
      border-radius:8px;
      background:$ghost-white;
      margin-bottom:10px;
      
      &-container{
        cursor: pointer;

        input{
          position:absolute;
          left:0;
          top:0;
          opacity:0;
        }

        .checkbox-icon{
          width:24px;
          height:24px;
          position:absolute;
          background-color:$white;
          border-radius:5px;
          border:1px solid $cool-gray;
          top:50%;
          transform:translateY(-50%);
          transition:all 0.3s;

          &::after{
            content:"";
            position:absolute;
            opacity:0;
            left:8px;
            top:4px;
            height:8px;
            width:5px;
            border:solid $white;
            border-width:0 3px 3px 0;
            transform:rotate(-45deg);
            transition:all 0.1s;
          }
        }

        &-adds-details{
          padding-left:35px;
          display:flex;
          align-items:center;
          justify-content:space-between;

          &-text{
            p{
              font-weight:bold;
              color:$lapis-lazuli;
              margin-bottom:3px;
            }

            span{
              color:$cool-gray;
              font-size:14px;
            }
          }

          &-price{
            font-size:14px;
            font-weight:400;
            color:$lapis-lazuli;
          }
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


.forms-area-check-container:hover input ~ .checkbox-icon{
  background: $white;
}

.forms-area-check-container input:checked ~ .checkbox-icon{
  background:$lapis-lazuli;
}

.forms-area-check-container input:checked ~ .checkbox-icon::after{
  opacity:1;
  transform: rotate(45deg);
}

.forms-area-check-container input:checked ~ .checkbox-icon{
  border:none;
}

.forms-area-check:has(input:checked){
  background:$alice-blue;
  border:1px solid $beige;
}

/*
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
*/
</style>