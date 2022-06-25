<template>
  <div class="grey darken-1 empty-layout">

    <router-view />

  </div>
</template>

<script>
import messages from '@/utils/messages'

// let flagMessage = true
// console.log(flagMessage);

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      // console.log(fbError);
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }

  // data: () => ({
  //   flagMessage: true
  // })
}
</script>