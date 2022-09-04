<template>
  <div id="form">
    <h1>LOGIN</h1>
    <form>
      <div class="form-group">
        <label for="InputEmail">Email</label>
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
      <div class="espacio"></div>
      <button type="submit" @click="ingresar" class="btn btn-light">Ingresar</button>
      <div class="espacio"></div>
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

form{
  background-image:linear-gradient(to right, #d7f911 45%, #1fd200);
  border-radius: 0px 0px 0px 100px;
}

.form-group input{
  display: flex;
  justify-content:center;
  width: 300px;
  margin: auto;
  border: none;
  margin-bottom: 10px;
}

.btn{
  color: black;
  font-weight: bold;
}
</style>
