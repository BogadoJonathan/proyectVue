<template>
  <div class="access">
    <h1>Panel de administracion</h1>
    <br>
    <MyTable :datos='productos'/>
  </div>
</template>

<script>
import axios from 'axios'
import MyTable from '../components/MyTable.vue'

export default {

  name: 'AdminPage',
  components: {
    MyTable
  },
  data(){
    return{
      productos:[],
    }
  },
  methods:{

    getProducts(){
      axios.get('https://62e857de93938a545be4aa1a.mockapi.io/productos')
      .then((response) => {this.productos = response.data})
      .catch((err) => {console.error(`${err}`)})
    },
  },
  mounted(){
     // invocar los métodos
     this.getProducts();
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .access{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column
}
</style>
