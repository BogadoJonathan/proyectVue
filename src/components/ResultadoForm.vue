<template>
  <div>
    <h2>Datos Cargados</h2>
      <a href="/"><button class="btn btn-danger">volver atras</button></a>
      <table class="myTableStyle">
            <thead :style="new_style">
                <tr>
                    <th>Nombre</th>
                    <th>email</th>
                    <th>edad</th>
                    <th>documento</th>
                    <th>cursos</th>
                    <th>comentarios</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item,i) in $store.getters.getDatos" :key="i">
                    <td >{{item.nombre}}</td>
                    <td >{{item.email}}</td>
                    <td>{{item.edad}}</td>
                    <td>{{item.documento}}</td>
                    <td><ul> <li v-for="(curso,c) in item.cursos" :key="c">{{curso}}</li> </ul> </td>
                    <td>{{item.comentario}}</td>
                </tr>
            </tbody>
            
        </table> 
        
        <b-modal id="modalproduct" title="BootstrapVue">
          <p class="my-4">se modifico un producto</p>
        </b-modal> 
  </div>
</template>

<script>
export default {
  name: 'ResultadoForm',
  methods:{
    cargarDatos(){
      this.$store.dispatch('cargarDatosAsync')
    }
  },
  mounted(){
    this.cargarDatos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myTableStyle{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 200px;
  }
  .myTableStyle thead{
  text-align: center;
  }

  .myTableStyle td {
  text-align: center ;
  }

  
</style>
