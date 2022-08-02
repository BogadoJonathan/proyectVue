<template>
  <div class="access">>
  </div>
</template>

<script>


export default {
  name: 'AdminPage',
  props:['usuarios'],

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
