<template>
  <div>
    <div class="nav-button">
      <button v-if="!verCarro" class="btn btn-primary" style="margin: 10px" @click="cambiarACarrito">{{cantidadCarrito}} - carrito</button>
      <button v-if="verCarro" class="btn btn-primary" style="margin: 10px" @click="cambiarACarrito">volver al listado</button>
      <button class="btn btn-danger" style="margin: 10px" @click="salir">Salir</button>
    </div>
    
    
    <CarritoDetalle v-if="verCarro" />
    <div v-if="!verCarro" class="listProductos">
      <div class="card" style="width: 18rem;" v-for="(item, i) in $store.getters.getProducts" :key="i">
        <img class="card-img-top" :src="getImage(item.imagen)" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.nombre}}</h5>
          <p class="card-text">{{item.descripcion }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${{ item.precio }}</li>

        </ul>
        <div class="card-body">
          <a @click="agregarAlCarrito(item)" class="btn btn-primary">Agregar +</a>
        </div>
     </div>

     
    </div>
  </div>
</template>

<script>
import CarritoDetalle from './CarritoDetalle.vue'

export default {
  name: "ListProducts",
  components: {
    CarritoDetalle,
  },
  data(){
    return{
      verCarro:false,
      cantidadCarrito: 0
    }
  },
  methods: {
    vaciarCarrito(){
      this.$store.dispatch('VaciarCarrito')
    },
    agregarAlCarrito(payload){
      this.cantidadCarrito += 1
      this.$store.dispatch('AgregarAlCarrito',payload)
    },
    getImage(imagen){
      return require('../assets/img/' + imagen)
    },
    cambiarACarrito(){
      this.verCarro = !this.verCarro
    },
    salir() {
      this.$store.dispatch('ChangeAccess')
    }
  },
  mounted(){
     // invocar los métodos
     this.$store.dispatch('cargarDatosProductos')
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-button{
  display: flex;
  justify-content:flex-end;
}

.listProductos {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
