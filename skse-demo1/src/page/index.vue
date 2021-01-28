<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/home">index</router-link>
    <div id="index">
      <Aaa :msg="msg" />
      <button v-on:click="counterAdd()">Add 1</button>
      <p>{{ counter }}</p>
    </div>
  </div>
</template>


<script>
import Aaa from "../components/Aaa.vue";

export default {
  name: "Index",
  components: {
    Aaa,
  },
  data() {
    return {
      msg: "index 自定义",
      counter: 1,
    };
  },
  methods: {
    counterAdd: function () {
      this.counter += 1;
    },
  },
};
</script>
