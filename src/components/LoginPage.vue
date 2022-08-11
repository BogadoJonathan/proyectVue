<template>
  <div id="form">
    <h1>LOGIN</h1>
    <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group 
        id="input-group-3" 
        label="Your Password:" 
        label-for="input-3">
          <b-form-input
            id="input-3"
            type="password"
            v-model="password"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-button @click="ingresar" variant="primary">Ingresar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LoginPage",
  data(){
    return{
      usuarios:[],
      email: '',
      password: '',
    }},
  methods: {
    ingresar(){
      console.log('ingresar con el boton')
      let found = this.usuarios.find(element => element.email == this.email && element.password == this.password)

      if(found){
        this.$emit('cambiar', found)
      }
    },
    getUsers(){
        axios.get('https://62e857de93938a545be4aa1a.mockapi.io/users')
        .then((response) => {
          this.usuarios = response.data
          this.usersCargados=true
          })
        .catch((err) => {console.error(`${err}`)})
    },
  },
  mounted(){
    // invocar los métodos
    this.getUsers()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  width: 40%;
}

</style>
