<template>
  <div >
    <section class="access" v-if="!canAccess">
      <LoginPage @cambiar="ingresar"/>
      <RegistroPage  @guardar="ingresar"/>
    </section>

    <section v-if="canAccess"> 
      <h1> bienvenido {{nombre}}</h1>
      <div v-if="!isAdmin" >
          <ListProducts @cambiar="changeAccesss"/>
      </div>
    </section>
    
  </div>
</template>

<script>
import LoginPage from '../components/LoginPage.vue'
import RegistroPage from '../components/RegistroPage.vue'
import ListProducts from '../components/ListProducts.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
    LoginPage,
    RegistroPage,
    ListProducts
  },
  data(){
    return{
      nombre:'',
      isAdmin: false,
      canAccess: false,
    }
  },
  methods:{
    ingresar(user){
      this.nombre = user.nombre
      this.isAdmin = user.isAdmin
      this.changeAccesss()
    },
    changeAccesss(){
      console.log('cambie')
      this.canAccess = !this.canAccess      
    },
    getProducts(){
      axios.get('https://62e857de93938a545be4aa1a.mockapi.io/productos')
      .then((response) => {this.productos = response.data})
      .catch((err) => {console.error(`${err}`)})
    },
    
    mounted(){
      // invocar los métodos
      // this.getProducts();
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .access{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly
}
</style>
