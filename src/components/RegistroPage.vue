<template>
  <div id="form">
    <h1>REGISTER</h1>
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="usuario.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="usuario.nombre"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
          <b-form-input
            id="input-3"
            type="password"
            v-model="usuario.password"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <div v-if="errors.length > 0">
          <ul class="text-warning fw-bold">
            <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
          </ul>
        </div>

        <b-button type="submit"  variant="primary">Registrar</b-button>
        <b-button type="reset"  variant="danger">Limpiar</b-button>
      </b-form>
      <b-modal id="modalUser" title="BootstrapVue">
      <p class="my-4">{{this.usuario.nombre}} a sido cargado con exito</p>
    </b-modal>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "RegistroPage",
  data() {
    return {
      errors:[],
      usuario: {
          "nombre": '',
          "email": '',
          "isAdmin": false,
          "password": '',
        },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.errors = []
      if (this.usuario.nombre && this.usuario.email && this.usuario.password) {
        if (!isNaN(this.nombre)){
          this.errors.push('no puedes ingresar numeros en el nombre')
          return false
        }
        if(this.usuario.password.length <5){
          this.errors.push('la contraseña debe tener 5 o mas caracteres')
          return false
        }

        axios.post('https://62e857de93938a545be4aa1a.mockapi.io/users', this.usuario)
        .then(() => {
                    this.$bvModal.show('modalUser')
                    this.$emit('guardar', this.usuario)})
        .catch((err) => {console.error(`${err}`)})

        return true
      }
      if (this.usuario.nombre === '') {this.errors.push('El nombre es obligatorio.')}
      if (this.usuario.email === '') {this.errors.push('El correo electrónico es obligatorio.')}
      if (this.usuario.password === '') {this.errors.push('El password es obligatorio.')}
      
      },
    onReset() {
        // Reset our form values
        this.usuario.email = ''
        this.usuario.nombre = ''
        this.usuario.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
        }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  width: 40%;
}
</style>
