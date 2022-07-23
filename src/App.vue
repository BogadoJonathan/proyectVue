<template>
  <div id="app">
    <AccessPage :usuarios='usuarios' v-if="!canAccess" @cambiar="changeAccesss" @cambiarYAgregar="agregarYCambiar"/>
    
    <ListProducts v-if="canAccess" :productos="productos" @cambiar="changeAccesss"/>
  </div>
</template>

<script>
import ListProducts from './components/ListProducts.vue'
import AccessPage from './components/AccessPage.vue'


export default {
  name: 'App',
  components: {
    ListProducts,
    AccessPage,
  },
  data(){
    return{
      canAccess: false,
      usuarios:[],
      productos:[
            {
                'id'            :   1,
                'nombre'        :   'Antifaz',
                'precio'        :   300,
                'descripcion'   :   'Antifaz para dormir',
                'imagen'        :   'antifaz.jpg'
            },
            {
                'id'            :   2, 
                'nombre'        :   'Botella',
                'precio'        :   700,
                'descripcion'   :   'Botella de acero inoxidable de 500ml',
                'imagen'        :   'botella.jpg'
            },
            {
                'id'            :   3,
                'nombre'        :   'Buzo',
                'precio'        :   3000,
                'descripcion'   :   'Buzo estilo canguro, todos los talles',
                'imagen'        :   'buzo.jpg'
            },
            {
                'id'            :   4,
                'nombre'        :   'funda',
                'precio'        :   800,
                'descripcion'   :   'funda de silicona para Iphone, todos los modelos',
                'imagen'        :   'funda.jpg'
            },
            {
                'id'            :   5,
                'nombre'        :   'gorro',
                'precio'        :   800,
                'descripcion'   :   'Gorro ajustable',
                'imagen'        :   'gorro.jpg'
            },
            {
                'id'            :   6,
                'nombre'        :   'Mochila',
                'precio'        :   2500,
                'descripcion'   :   'Mochila apta para transportar notebook',
                'imagen'        :   'mochila.jpg'
            },
            {
                'id'            :   7,
                'nombre'        :   'remera',
                'precio'        :   1000,
                'descripcion'   :   'remera 100% algodon, todos los talles ',
                'imagen'        :   'remera.jpg'
            },
            {
                'id'            :   8,
                'nombre'        :   'taza',
                'precio'        :   500,
                'descripcion'   :   'taza de ceramica ',
                'imagen'        :   'taza.jpg'
            },
        ]
    }
  },
  methods:{
    changeAccesss(){
      this.canAccess = !this.canAccess      
    },
    agregarYCambiar(payload){
      this.usuarios.push(payload)
      this.changeAccesss()
    }    
  }
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
