<template>
  <div id="app">
    <MyTable 
      :alumnos="mis_datos"
      :new_style="estilo_verde_azul"/>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'

export default {
  name: 'App',
  components: {
    MyTable
  },
  data(){
    return{
      estilo_verde_azul:'background: linear-gradient(56deg, #c4ff02 20%,  #00eaff 100%);',
      estilo_naranja_lima:'background: linear-gradient(56deg, #e86c07 20%,  #bbff00 100%);',
      mis_datos:[
            {
                'nombre'        :   'Jonathan',
                'edad'          :   26,
                'nacionalidad'  :   'Argentina'
            },
            {
                'nombre'        :   'Andrea',
                'edad'          :   43,
                'nacionalidad'  :   'Argentina'
            },
            {
                'nombre'        :   'Leonardo',
                'edad'          :   32,
                'nacionalidad'  :   'Venezuela'
            },
            {
                'nombre'        :   'Gisele',
                'edad'          :   26,
                'nacionalidad'  :   'España'
            },
        ]
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
  margin-top: 60px;
}
</style>
