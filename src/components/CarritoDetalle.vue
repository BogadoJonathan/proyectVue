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
  </div>
</template>

<script>
export default {
  name: 'CarritoDetalle',
  props:['carrito','productos'],
  data(){
    return{
      precioUnitario: 0
    }
  },
  methods:{
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
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
</style>
