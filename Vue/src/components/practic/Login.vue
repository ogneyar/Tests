<template>
  <form class="card auth-card" @submit.prevent="submitable">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Необходимо ввести Email</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Не корректный Email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Необходимо ввести пароль</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Минимальное количество символов: {{$v.password.$params.minLength.min}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?      
        <router-link to="/practic/register">Зарегистрироваться</router-link>
      </p>
      
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

// флаг для того чтобы сообщение (M.Toast) всплывало только один раз при выходе
// без этого флага сообщения дублируются и показываются даже при входе
let flagMessage = true

export default {
  name: 'login',
  mounted() {
    if (messages[this.$route.query.message]&&(flagMessage)) {
      this.$message(messages[this.$route.query.message])
      flagMessage = false
    }
  },
  methods: {
    async submitable() {
      if (this.$v.$invalid) {
        // устанавливает флаг $dirty модели и всех ее дочерних элементов в значение true.
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        flagMessage = true // флаг для того чтобы сообщение (M.Toast) всплывало только один
        this.$router.push('/practic')
      }catch(e) {
        console.log("throw: ", e);
      }
    }
  },
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
}
</script>