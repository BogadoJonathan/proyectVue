<template>
  <div>
    <h1>MI TABLE</h1>
    <img src="../assets/img/antifaz.jpg" alt="">
      <table class="myTableStyle">
            <thead :style="new_style">
                <tr>
                    <th>Nombre</th>
                    <th>edad</th>
                    <th>Nacionalidad</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item,i) in alumnos" :key="i">
                    <td >{{item.nombre}}</td>
                    <td>{{item.edad}}</td>
                    <td>{{item.nacionalidad}}</td>
                    {{clase}}
                </tr>
            </tbody>
        </table>   
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props:['alumnos','new_style']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myTableStyle{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  }
  .myTableStyle thead{
  text-align: center;
  }

  .myTableStyle td {
  text-align: center ;
  }

  
</style>
