<template>
  <div :id="id">
    <p
      v-once
      :class="myClass"
    >
      Testing this new component rendering
    </p>
    <p>My one time bind message is {{ msg }}</p>
    <!-- Raw HTML directive for interpreting HTML -->
    <div v-html="rawHtml" />
    <button @click="toggleReversed">
      Test Button
    </button>
    <div v-if="makeReverse">
      {{ getReversedMessage }}
    </div>
    <template v-else>
      <p>This is an example of a conditional else render with template grouping</p>
      <p>This second element is grouped in the same conditional</p>
      <div>{{ reverseMessage }}</div>
    </template>

    <div :style="styleObject">
      <p>THIS IS A TEST OF STYLE BINDING</p>
    </div>
    <p
      v-if="ifDirectiveActive"
    >
      This text is shown because directive is set to {{ ifDirectiveActive }}
    </p>
    <a
      target="_blank"
      :href="urlBindingExample"
    >This is an example of a link with a bound property</a>
    <p>The following is an example of he v-on initiative</p>
    <button @[onAttribute]="increment">
      Click to increment count!
    </button>
    <p>{{ `Counter: ${count}` }}</p>
    <form @submit.prevent="onSubmit">
      <input type="text">
    </form>
    <div
      id="watch-example"
      :class="{ active: isActive, 'text-danger': hasError }"
    >
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
    <ul>
      <li
        v-for="(name, index) of arrayDemo"
        :key="name"
      >
        {{ `${name} at index ${index}` }}
      </li>
    </ul>
    <ul
      id="v-for-object"
      class="demo"
    >
      <li
        v-for="(value, name) in testObjectPerson"
        :key="value"
      >
        {{ name }}: {{ value }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "TestComponent",
  props: {
    myClass: String,
    id: String,
    msg: String,
    rawHtml: String
  },
  data: function() {
    return {
      isDisabled: false,
      onAttribute: "click",
      ifDirectiveActive: true,
      urlBindingExample: "http://www.google.com",
      isActive: true,
      reverseMessage:
        "This message can be reversed using JS in mustache syntax",
      makeReverse: true,
      hasError: true,
      count: 0,
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      arrayDemo: ["Misha", "Lilly", "Ella", "Andrew"],
      styleObject: {
        margin: "auto",
        backgroundColor: "green",
        fontSize: "24px",
        width: "100px"
      },
      testObjectPerson: {
        name: "Misha",
        age: 34,
        specialSkills: "JavaScript"
      }
    };
  },
  computed: {
    // Computed have the advantage of being cached and recalculated only when the properties change
    getReversedMessage: function() {
      return this.reverseMessage
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    // Watcher on the question property.
    question(newQuestion, oldQuestion) {
      console.log("Old State is ", oldQuestion);
      console.log("New state is ", newQuestion);
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    onSubmit() {
      console.log("Submit called");
    },
    toggleReversed() {
      this.makeReverse = !this.makeReverse;
    }
  }
};
</script>

<style scoped>
#passed-id {
  background-color: red;
}

.passed-class {
  font-style: italic;
  font-weight: bold;
}

.text-danger {
  background-color: cornflowerblue;
}
</style>

