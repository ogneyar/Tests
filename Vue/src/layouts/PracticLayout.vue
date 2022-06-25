<template>        
    <div class="app-main-layout">
          
      <Navbar @click="isOpen = !isOpen"/>

      <Sidebar v-model="isOpen"/>    

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">

          <router-view />

        </div>      
      </main>

      <div class="fixed-action-btn">
        <router-link to="/practic/record" class="btn-floating btn-large blue">
          <i class="large material-icons">add</i>
        </router-link>
      </div>

    </div>
</template>

<script>
import Navbar from '@/components/includes/Navbar'
import Sidebar from '@/components/includes/Sidebar'

export default {
  name: 'practic-layout',
  components: {
    Navbar, Sidebar
  },
  data: () => ({
    isOpen: true,
    loading: true
  }),
}
</script>

