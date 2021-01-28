<template>

<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home">index</router-link>
      <div id="index">
    <Aaa :msg='msg'/>
  </div>
    </div>
  
</template>


<script>
import Aaa from "../components/Aaa.vue"

export default {
  name: 'Index',
  components: {
    Aaa
  },
  data(){
      return {
          msg:"index 自定义"
      }
  }
}
</script>
