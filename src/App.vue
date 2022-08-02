<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/admin">admin</router-link>
    <router-view/>

    <!-- <FormularioWeb/> -->
    <!-- <AccessPage :usuarios='usuarios' v-if="!canAccess" @cambiar="changeAccesss" @cambiarYAgregar="agregarYCambiar"/> -->
    <!-- <ListProducts v-if="canAccess" :productos="productos" @cambiar="changeAccesss"/> -->
  </div>
</template>

<script>
// import ListProducts from './components/ListProducts.vue'
// import AccessPage from './pages/AccessPage.vue'
// import FormularioWeb from './components/FormularioWeb.vue'
import axios from 'axios'

export default {
  name: 'App',
  // components: {
  //   // FormularioWeb
  //   ListProducts,
  //   // AccessPage,
  // },
  data(){
    return{
      canAccess: false,
      usuarios:[],
      productos:[]
    }
  },
  methods:{
    
    agregarYCambiar(payload){
      this.usuarios.push(payload)
      this.changeAccesss()
    },
    getProducts(){
      axios.get('https://62e857de93938a545be4aa1a.mockapi.io/productos')
      .then((response) => {this.productos = response.data})
      .catch((err) => {console.error(`${err}`)})
    },
    getUsers(){
      axios.get('https://62e857de93938a545be4aa1a.mockapi.io/users')
      .then((response) => {this.usuarios = response.data})
      .catch((err) => {console.error(`${err}`)})
    }
  },
  mounted(){
     // invocar los métodos
     this.getProducts();
     this.getUsers()
    },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
