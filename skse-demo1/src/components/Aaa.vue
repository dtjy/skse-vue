<template>
  <div>
    <h1>{{ aa }}</h1>
  </div>
</template>


<script>
export default {
  name: "Aaa",
  props: {
    msg: String,
  },
  data(){
    return {
        aa:"Aaa子模块"
    }
  },
  mounted() {
    this.strngApplend();
  },
  methods: {
    strngApplend: function () {
      this.aa = this.msg + this.aa;
    },
  },
};
</script>