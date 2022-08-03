<template>
  <div>
    <h2>PRODUCTOS</h2>
      <table class="myTableStyle">
            <thead :style="new_style">
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>precio</th>
                    <th>descripcion</th>
                    <th>imagen</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item,i) in datos" :key="i">
                    <td> {{item.id}} </td> 
                    <td><input type="text" class="form-control"  v-model.lazy="item.nombre"/></td>
                    <td><input type="number" class="form-control"  v-model.lazy="item.precio"/></td>
                    <td><input type="text" class="form-control"  v-model.lazy="item.descripcion"/></td>
                    <td><input type="text" class="form-control"  v-model.lazy="item.imagen"/></td>
                    <button @click="editar(item.id)"><b-icon-file-earmark-post-fill></b-icon-file-earmark-post-fill></button>
                    <button @click="borrar(item.id)"><b-icon-trash></b-icon-trash></button>
                </tr>
                <br>
                <tr>
                    <td> x</td> 
                    <td><input type="text" class="form-control" placeholder="nombre" v-model.lazy="newProduct.nombre"/></td>
                    <td><input type="number" class="form-control" placeholder="precio" v-model.lazy="newProduct.precio"/></td>
                    <td><input type="text" class="form-control" placeholder="descripcion" v-model.lazy="newProduct.descripcion"/></td>
                    <td><input type="text" class="form-control" placeholder="imagen" v-model.lazy="newProduct.imagen"/></td>
                    <button @click="agregar"><b-icon-plus-circle></b-icon-plus-circle></button>
                </tr>

                <tr v-if="errors.length > 0">
                  <td colspan="5">
                      <ul class="text-warning fw-bold">
                        <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
                      </ul>
                  </td>
                      
                </tr> 
                 
            </tbody>
            
        </table> 
        
        <b-modal id="modalproduct" title="BootstrapVue">
          <p class="my-4">se modifico un producto</p>
        </b-modal> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyTable',
  props:['datos'],
  data() {
    return {
      errors:[],
      newProduct:{
        "nombre": "",
        "precio": 0,
        "descripcion": "",
        "imagen": "",
      }
    };
  },
  methods:{
    borrar(id){
      axios.delete('https://62e857de93938a545be4aa1a.mockapi.io/productos/'+id)
        .then(() => {this.$router.go(0)})
        .catch((err) => {console.error(`${err}`)})
    },
    agregar(){
      this.errors = []
      if (this.newProduct.nombre && this.newProduct.precio && this.newProduct.descripcion && this.newProduct.imagen) {

        if(this.newProduct.descripcion.length <10){
          this.errors.push('la descripcion debe tener mas de 10 caracteres')
          return false
        }

        axios.post('https://62e857de93938a545be4aa1a.mockapi.io/productos', this.newProduct)
        .then(() => {
                    this.$router.go(0)
                    })
        // location.reload()
        // this.$router.go(0)
        return true
      }
      if (this.newProduct.nombre === '') {this.errors.push('El nombre es obligatorio.')}
      if (this.newProduct.precio === 0) {this.errors.push('El precio es obligatorio.')}
      if (this.newProduct.descripcion === '') {this.errors.push('la descripcion es obligatorio.')}
      if (this.newProduct.imagen === '') {this.errors.push('la imagen es obligatorio.')}

    },
    editar(id){
      let found = this.datos.find(element => element.id == id)
      let nuevoValor={
        "nombre": found.nombre,
        "precio": found.precio,
        "descripcion": found.descripcion,
        "imagen": found.imagen,
        "id": found.id
      }
      console.log(nuevoValor)

      axios.put('https://62e857de93938a545be4aa1a.mockapi.io/productos/'+id, nuevoValor)
      .then(() => {this.$bvModal.show('modalproduct')})
      .catch((err) => {console.error(`${err}`)})
    }
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
