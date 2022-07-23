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

        <b-button type="submit"  variant="primary">Registrar</b-button>
        <b-button type="reset"  variant="danger">Limpiar</b-button>
      </b-form>
  </div>
</template>

<script>
export default {
  name: "RegistroPage",
  data() {
    return {
      usuario: {
          email: '',
          nombre: '',
          password: '',
        },

      show: true
    };
  },
  methods: {
    onSubmit() {
        this.$emit('guardar',this.usuario)
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
