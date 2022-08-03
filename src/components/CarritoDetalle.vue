<template>
  <div>
    <h1>CARRITO</h1>
    <ul>
      <li v-for="(item, i) in carrito" :key="i">
        <b>Nombre:</b> {{productos.find(element => element.id == item.id).nombre}}
        <b>Cantidad:</b> {{item.cantidad}} 
        <b>Precio unitario:</b> {{sacarPrecioUnitario(item.id)}}
        <b>SubTotal:</b> {{obtenerSubtotal(item.cantidad)}}
      </li>
    </ul>
    <h2>Total: {{sumarAlTotal}}</h2>
    <button @click="completar">guardar carrito</button>
    <br><br>
    <div v-if="carritosGuardados.length > 0" >

      <h2>carritos guardados</h2>
        <div class="carritos">
          <b-card v-for="(carro) in carritosGuardados" :key="carro.id"
            no-body
            style="max-width: 20rem;"
          >
            <template #header>
              <h4 class="mb-0">TOTAL: {{carro.total}}</h4>
            </template>

            <b-list-group flush v-for="(art) in carro.articulos" :key="art.id">
              <b-list-group-item>{{art.nombre}} x{{art.cantidad}}</b-list-group-item>
            </b-list-group>

          </b-card>
        </div>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CarritoDetalle',
  props:['carrito','productos'],
  data(){
    return{
      precioUnitario: 0,
      carritosGuardados:[],
    }
  },
  methods:{
    completar(){
      let saveCarrito = {
        'total': this.sumarAlTotal,
        'articulos':this.carrito
      }

      if (saveCarrito.total >0){
        axios.post('https://62e857de93938a545be4aa1a.mockapi.io/carrito', saveCarrito)
        .then(() => {
          this.getCarrito()
          this.$emit('vaciar')})
      }
      
    },
    getCarrito(){
       axios.get('https://62e857de93938a545be4aa1a.mockapi.io/carrito')
       .then((response) => {
          this.carritosGuardados = response.data
          })
        .catch((err) => {console.error(`${err}`)})
    },
    sacarPrecioUnitario(id){
      let precio = this.productos.find(element => element.id == id).precio
      this.precioUnitario = precio
      return precio
    },
    obtenerSubtotal(cantidad){
      let subTotal = this.precioUnitario*cantidad
      return subTotal
    }
  },
  computed:{
    sumarAlTotal(){
      let total = 0
      this.carrito.forEach(item => {
        let precioUnitario = this.productos.find(element => element.id == item.id).precio
        total += precioUnitario*item.cantidad           
      })
      return total
    }
    
  }
  ,
  mounted(){
    // invocar los métodos
    this.getCarrito()
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carritos{
  display: flex;
  justify-content: space-evenly;
}
  
</style>
