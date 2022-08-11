<template>
  <div>
    <div class="nav-button">
      <b-button v-if="!verCarro" style="margin: 10px" @click="cambiarACarrito">{{cantidadCarrito}} <b-icon-cart3></b-icon-cart3></b-button>
      <b-button v-if="verCarro" style="margin: 10px" @click="cambiarACarrito">volver al listado</b-button>
      <b-button style="margin: 10px" @click="salir">Salir</b-button>
    </div>
    
    <CarritoDetalle v-if="verCarro" />
    <div v-if="!verCarro" class="listProductos">
      <b-card v-for="(item, i) in $store.getters.getProducts"
        :key="i"
        :title="item.nombre"
        :img-src="require('../assets/img/' + item.imagen)"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ item.descripcion }}
        </b-card-text>
        <b-list-group flush>
          <b-list-group-item>${{ item.precio }}</b-list-group-item>
        </b-list-group>

        <b-button @click="agregarAlCarrito(item)" variant="primary">Agregar +</b-button>
      </b-card>
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
