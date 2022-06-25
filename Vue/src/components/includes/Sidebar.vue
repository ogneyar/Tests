<template>

  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <hr v-if="link.url=='/'" />
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>

</template>


<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Счет', url: '/practic', exact: true  },
      { title: 'История', url: '/practic/history' },
      { title: 'Планирование', url: '/practic/planning' },
      { title: 'Новая запись', url: '/practic/record' },
      { title: 'Категории', url: '/practic/categories' },
      { title: 'ВЫХОД из Practic', url: '/', exact: true }
    ]
  })
}
</script>
