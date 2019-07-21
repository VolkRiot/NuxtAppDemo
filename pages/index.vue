<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TestComponent 
      id="passed-id"
      myClass="passed-class"
      msg="TESING ONE TIME BIND" 
      rawHtml="<h1>This h1 is intrepreted HTML</h1>" 
      count="0"
      />
  </div>
</template>

<script>

import TestComponent from '../components/TestComponent'

export default {
  name: 'app',
  components: {
    TestComponent
  },
  data() {
    return {
      test: true
    }
  },
  methods: {
    toggleTest() {
      this.test = !this.test;
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
