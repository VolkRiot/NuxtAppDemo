<template>
  <div id="app">
    <NLink to="/about">
      About Page
    </NLink>
    <test-component 
      id="passed-id"
      my-class="passed-class"
      msg="TESING ONE TIME BIND" 
      raw-html="<h1>This h1 is intrepreted HTML</h1>" 
      count="0"
    />
  </div>
</template>

<script>

import TestComponent from '../components/TestComponent'

export default {
  name: 'App',
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
