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
export default {
  name: "LoginPage",
  props:['usuarios'],
  data(){
    return{
      email: '',
      password: '',
    }},
  methods: {
    ingresar(){
      let found = this.usuarios.find(element => element.email == this.email && element.password == this.password)

      if(found){
        this.$emit('cambiar')
      }
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
