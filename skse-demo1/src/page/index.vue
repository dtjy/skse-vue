<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/home">index</router-link>
    <div id="index">
      <Aaa :msg="msg" />
      <button v-on:click="counterAdd()">Add 1</button>
      <p>{{ counter }}</p>
      <p>{{ msg }}</p>
   <a-button type="primary">Button></a-button>
    </div>
  </div>
</template>


<script>
import Aaa from "../components/Aaa.vue";
import axios from "axios";

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
    
      axios
        .post("http://localhost:6990/test/t1", {
          sex: "男的",
          age: 123,
        })
        .then((response) => {
          this.msg = response.data.sex;
          console.log(this);
        })
        .then(function () {
          console.log(this);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
