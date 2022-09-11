<template>
  <div>
    <div class="nav-button">
      <button v-if="!verCarro" class="btn btn-primary green-color" style="margin: 10px; color: black" @click="cambiarACarrito">{{cantidadCarrito}} - carrito</button>
      <button v-if="verCarro" class="btn btn-dark" style="margin: 10px" @click="cambiarACarrito">volver al listado</button>
      <button class="btn btn-danger red-color" style="margin: 10px" @click="salir">Salir</button>
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
        <div class="card-body bot-item">
          <a @click="quitarDelCarrito(item)" class="btn btn-danger boton-item red-color">-</a>
          <a @click="agregarAlCarrito(item)" class="btn btn-success boton-item green-color">+</a>
          <spam class="cantidad">{{cantidadAgregada(item)}}</spam>
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
    quitarDelCarrito(payload){
      if(this.cantidadCarrito>0){
        this.cantidadCarrito -= 1
      }
        
      this.$store.dispatch('QuitarDelCarrito',payload)
    },
    getImage(imagen){
      let retorno = null;

      if(imagen.indexOf('https://') >= 0 || imagen.indexOf('http://') >= 0) {
          return imagen;
      }
      try {
        retorno = require('../assets/img/' + imagen);
      } catch (error) {
        retorno = null
      }
      
      return retorno
    },
    cambiarACarrito(){
      this.verCarro = !this.verCarro
    },
    cantidadAgregada(item){
      let productoFind = this.$store.getters.getCarrito.find(element => element.id == item.id)
      return productoFind ?  productoFind.cantidad : 0
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

.bot-item{
  display: flex;
  justify-content: center;
  align-items: center;
}

.boton-item{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 5rem;
  font-size: 40px;
  width: 50px;
  height: 50px;
  border: none;
}

.cantidad{
  margin-left: 10px;
  font-size: 30px;
}


.boton-item:hover {
transition: all 0.6s ease;
transform-origin: center;

transform:scale(1.20);
transform-origin: center;
}

.card{
  border-radius: 0px 0px 100px 100px;
  margin-bottom: 30px;
}


</style>
