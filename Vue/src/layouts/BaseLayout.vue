<template>
  <div id="base"> 
    <img alt="Vue logo" src="@/assets/logo.png" id="logo" v-on:click="clickable">

    <hr>
    <router-link to="/" class="router_link">Home Page</router-link>
    <router-link to="/practic" class="router_link">Practic</router-link>
    <router-link to="/foo" class="router_link">Go to Foo</router-link>
    <router-link to="/bar" class="router_link">Go to Bar</router-link>
    
    <router-view></router-view>
    <hr>

    <Footer v-if="this.$route.path=='/foo'||this.$route.path=='/bar'"/>
  </div>
</template>

<script>
import Footer from '@/components/includes/Footer'

export default {  
  methods: {
    clickable() {
      console.log('click on image');
    }
  },
  data: () => ({
    foo: false
  }),
  components: {
    Footer
  },
  created() {
    // console.log('created')
  }
}
</script>