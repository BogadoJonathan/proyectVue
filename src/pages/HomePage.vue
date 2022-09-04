<template>
  <div>
    <section class="access" v-if="!$store.getters.getAccess">
      <LoginPage @cambiar="ingresar"/>
      <RegistroPage  @guardar="ingresar"/>
    </section>

    <section v-if="$store.getters.getAccess"> 
      <h1> bienvenido {{nombre}}</h1>
      <div v-if="!$store.getters.getIsAdmin" >
          <ListProducts />
      </div>
      <div v-else >
          <a href="/admin" ><button class="btn btn-light green-color">Acceder al panel</button></a>
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
    }
  },
  methods:{
    ingresar(user){
      this.nombre = user.nombre
      if(user.isAdmin){
        this.$store.dispatch('ChangeAdmin')
      }    
      this.changeAccesss()
    },
    changeAccesss(){
      this.$store.dispatch('ChangeAccess')   
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
    justify-content:space-evenly;
    align-items: center;
    padding: 10% 0%;
    background: linear-gradient(56deg, #979797 20%, #474747 60%, #1aac72 100%);
    width:100vw;
    height:100vh; 
  }

</style>
