<template>
  <div class="access">>
    <LoginPage :usuarios="usuarios" @cambiar="cambiarAcces"/>
    <RegistroPage  @guardar="guardarUsuario"/>
  </div>
</template>

<script>
import LoginPage from './LoginPage.vue'
import RegistroPage from './RegistroPage.vue'

export default {
  name: 'AccesPage',
  props:['usuarios'],
  components: {
    LoginPage,
    RegistroPage
  },
  methods:{
    guardarUsuario(payload){
      this.$emit('cambiarYAgregar',payload)
    },
    cambiarAcces(){
      this.$emit('cambiar')
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .access{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly
}
</style>
