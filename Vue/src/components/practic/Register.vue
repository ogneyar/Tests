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

    <div class="input-field">
      <input
        id="password_2"
        type="password"
        v-model.trim="password_2"
        :class="{invalid: ($v.password_2.$dirty && !$v.password_2.required) || ($v.password_2.$dirty && ($v.password_2.$model != $v.password.$model))}"
      >
      <label for="password_2">Повтор пароля</label>
      <small
        class="helper-text invalid"
        v-if="$v.password_2.$dirty && !$v.password_2.required"
      >Необходимо повторить пароль</small>
      <small
        class="helper-text invalid"
        v-else-if="$v.password_2.$dirty && ($v.password_2.$model != $v.password.$model)"
      >Необходимо ввести одинаковые пароли</small>
    </div>


    <div class="input-field">
      <input
        id="name"
        type="text"
        v-model.trim="name"
        :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
      >
      <label for="name">Имя</label>
      <small
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
      >Необходимо ввести имя</small>
      <small
        class="helper-text invalid"
        v-else-if="$v.name.$dirty && !$v.name.minLength"
      >Минимальное количество символов: {{$v.name.$params.minLength.min}}</small>
    </div>

    <p>
      <label>
        <input type="checkbox" v-model="agree" />
        <span>С правилами согласен</span>
      </label>
    </p>

  </div>


  <div class="card-action">

    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт? 
      <router-link to="/practic/login">Войти!</router-link>
    </p>
    
  </div>

</form>
</template>


<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  methods: {
    async submitable() {
      if (this.$v.$invalid) {
        // устанавливает флаг $dirty модели и всех ее дочерних элементов в значение true.
        this.$v.$touch()        
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try{
        await this.$store.dispatch('register', formData)
        this.$router.push('/practic')
      }catch(e) {
        console.log(e);
      }
    }
  },
  data: () => ({
    email: '',
    password: '',
    password_2: '',
    name: '',
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    password_2: { required, minLength: minLength(6) },
    name: { required, minLength: minLength(4) },
    agree: { checked: v => v }
  },
}
</script>