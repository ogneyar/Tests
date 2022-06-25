<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import PracticLayout from '@/layouts/PracticLayout.vue'
import PracticAuthLayout from '@/layouts/PracticAuthLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout, PracticLayout, PracticAuthLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'base') + '-layout'
    }
  }
}
</script>

<style>
* {
	/* margin: 0;
	padding: 0; */
	outline: none;
	text-decoration: none;
}
/* ul {
	list-style: none; 
} */
#base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#logo {
  width: 150px;
}
.router_link {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  background: white;
  opacity: 0.8;
  border-radius: 5px;
}
</style>
