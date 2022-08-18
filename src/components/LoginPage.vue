<template>
  <div id="form">
    <h1>LOGIN</h1>
    <form>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          v-model="password"
          placeholder="Password"
        />
      </div>
      
      <button type="submit" @click="ingresar" class="btn btn-primary">Ingresar</button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      usuarios: [],
      email: "",
      password: "",
    };
  },
  methods: {
    ingresar() {
      console.log("ingresar con el boton");
      let found = this.usuarios.find(
        (element) =>
          element.email == this.email && element.password == this.password
      );

      if (found) {
        this.$emit("cambiar", found);
      }
    },
    getUsers() {
      axios
        .get("https://62e857de93938a545be4aa1a.mockapi.io/users")
        .then((response) => {
          this.usuarios = response.data;
          this.usersCargados = true;
        })
        .catch((err) => {
          console.error(`${err}`);
        });
    },
  },
  mounted() {
    // invocar los métodos
    this.getUsers();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  width: 40%;
}
</style>
