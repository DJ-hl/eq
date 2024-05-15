<template>
  <div>
    <home @goTest="goTest" v-if="showType === 'home'" />
    <choose v-else-if="showType === 'question'" @over="onOver"/>
    <intro v-else-if="showType === 'intro'" :number="number" @goHome="goHome"/>
  </div>
</template>

<script>
import home from "./components/home.vue";
import choose from "./components/choose.vue";
import intro from "./components/intro.vue";
export default {
  components: {
    home,
    choose,
    intro,
  },
  data() {
    return {
      showType: "home",
      number: 0,
    };
  },
  methods: {
    goTest() {
      this.showType = "question";
    },
    onOver(num) {
      this.showType = "intro";
      this.number = num;
    },
    goHome() {
      this.showType = "home";
    }
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  background: #f5f5f5;
}
.ivu-progress-inner {
  background: #dddee1 !important;
}
</style>