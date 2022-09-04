<template>
  <div id="form">
    <h1>REGISTRATE</h1>
    <form v-if="show">
      <div class="form-group">
        <label for="InputEmailRegister">Ingresa tu email</label>
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
        <label for="InputNameRegister">Ingresa tu nombre</label>
        <input
          type="text"
          class="form-control"
          id="InputNameRegister"
          v-model="usuario.nombre"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="InputPasswordRegister">Ingresa la password</label>
        <input
          type="password"
          class="form-control"
          id="InputPasswordRegister"
          v-model="usuario.password"
          placeholder="Password"
        />
      </div>
      <div class="espacio"></div>

      <div v-if="errors.length > 0">
        <ul class="text-warning fw-bold">
          <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
        </ul>
      </div>

      <button type="submit" @click="onSubmit" class="btn btn-light">
        Registrar
      </button>
      <button type="reset" @click="onReset" class="btn btn-dark">
        Limpiar
      </button>
      <div class="espacio"></div>
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

.btn{
  margin: 0px 10px ;
  font-weight: bold;
}
.form-group input{
  display: flex;
  justify-content:center;
  width: 300px;
  margin: auto;
  border: none;
  margin-bottom: 10px;
}

form{
  background-image:linear-gradient(to right, #d7f911 45%, #1fd200);
  border-radius: 0px 0px 100px 0px;
}


#form {
  width: 40%;
}
</style>
