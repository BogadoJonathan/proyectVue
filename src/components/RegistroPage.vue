<template>
  <div id="form">
    <h1>REGISTER</h1>
    <form v-if="show">
      <div class="form-group">
        <label for="InputEmailRegister">Email address</label>
        <input
          type="email"
          class="form-control"
          id="InputEmailRegister"
          v-model="usuario.email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="InputNameRegister">Your name</label>
        <input
          type="text"
          class="form-control"
          id="InputNameRegister"
          v-model="usuario.nombre"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="InputPasswordRegister">Password</label>
        <input
          type="password"
          class="form-control"
          id="InputPasswordRegister"
          v-model="usuario.password"
          placeholder="Password"
        />
      </div>

      <div v-if="errors.length > 0">
        <ul class="text-warning fw-bold">
          <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
        </ul>
      </div>

      <button type="submit" @click="onSubmit" class="btn btn-primary">
        Registrar
      </button>
      <button type="reset" @click="onReset" class="btn btn-danger">
        Limpiar
      </button>
    </form>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistroPage",
  data() {
    return {
      errors: [],
      usuario: {
        nombre: "",
        email: "",
        isAdmin: false,
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (this.usuario.nombre && this.usuario.email && this.usuario.password) {
        if (!isNaN(this.nombre)) {
          this.errors.push("no puedes ingresar numeros en el nombre");
          return false;
        }
        if (this.usuario.password.length < 5) {
          this.errors.push("la contraseña debe tener 5 o mas caracteres");
          return false;
        }

        axios
          .post(
            "https://62e857de93938a545be4aa1a.mockapi.io/users",
            this.usuario
          )
          .then(() => {
            this.$emit("guardar", this.usuario);
          })
          .catch((err) => {
            console.error(`${err}`);
          });

        return true;
      }
      if (this.usuario.nombre === "") {
        this.errors.push("El nombre es obligatorio.");
      }
      if (this.usuario.email === "") {
        this.errors.push("El correo electrónico es obligatorio.");
      }
      if (this.usuario.password === "") {
        this.errors.push("El password es obligatorio.");
      }
    },
    onReset() {
      // Reset our form values
      this.usuario.email = "";
      this.usuario.nombre = "";
      this.usuario.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  width: 40%;
}
</style>
