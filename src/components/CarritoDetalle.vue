<template>
  <div>
    <h2>CARRITO</h2>
    <ul>
      <li v-for="(item, i) in $store.getters.getCarrito" :key="i">
        <b>Nombre:</b> {{$store.getters.getProducts.find(element => element.id == item.id).nombre}}
        <b>Cantidad:</b> {{item.cantidad}} 
        <b>Precio unitario:</b> {{sacarPrecioUnitario(item.id)}}
        <b>SubTotal:</b> {{obtenerSubtotal(item.cantidad)}}
      </li>
    </ul>
    <h3>Total: {{sumarAlTotal}}</h3>
    <button @click="completar" class="btn btn-dark">guardar carrito</button>
    <br><br>
    <div v-if="carritosGuardados.length > 0" >

      <h2>carritos guardados</h2>
        <div class="carritos">
          <div class="card" v-for="(carro) in carritosGuardados" :key="carro.id" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">TOTAL: {{carro.total}}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(art) in carro.articulos" :key="art.id">
                  {{art.nombre}} x{{art.cantidad}}</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>

        </div>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CarritoDetalle',
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
        'articulos':this.$store.getters.getCarrito
      }

      if (saveCarrito.total >0){
        axios.post('https://62e857de93938a545be4aa1a.mockapi.io/carrito', saveCarrito)
        .then(() => {
          this.getCarritoGuardados()
          this.$store.dispatch('VaciarCarrito')
          })
      }
      
    },
    getCarritoGuardados(){
       axios.get('https://62e857de93938a545be4aa1a.mockapi.io/carrito')
       .then((response) => {
          this.carritosGuardados = response.data
          })
        .catch((err) => {console.error(`${err}`)})
    },
    sacarPrecioUnitario(id){
      this.getProducto.forEach(element=> {
        if (element.id == id){
          let precio = element.precio
          this.precioUnitario = precio
          return precio
          }
        })

    },
    obtenerSubtotal(cantidad){
      let subTotal = this.precioUnitario*cantidad
      return subTotal
    }
  },
  computed:{
    getProducto(){
      return this.$store.getters.getProducts
    },
    sumarAlTotal(){
      let total = 0
       this.$store.getters.getCarrito.forEach(item => {
        this.getProducto.forEach(element=> {
          if (element.id == item.id){
            total +=element.precio
          }
        })
      })

      return total
    }
    
  }
  ,
  mounted(){
    // invocar los métodos
    this.getCarritoGuardados()
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
