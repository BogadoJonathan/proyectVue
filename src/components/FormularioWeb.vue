<template>
  <div>
    <h1>FORMULARIO</h1>
    
    <div class="container" id="myFormulario">
      <form action="" @submit.prevent="validarContenidoCargado">
        <div class="row">
          <div class="col col-6">
            <label for="inputName" class="text-start">NOMBRE</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Nombre Completo"
              v-model.lazy="nombre"
            />
            <br />
            <br />
          </div>

          <div class="col col-6">
            <label for="inputEmail" class="text-start">EMAIL</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="correo electronico"
              v-model.lazy="email"
            />
            <br />
            <br />
          </div>
        </div>

        <div class="row">
          <div class="col col-6">
            <label for="inputEdad" class="form-label text-start">EDAD</label>
            <input
              type="number"
              class="form-control"
              id="inputEdad"
              placeholder="edad"
              v-model.number="edad"
            />
            <br />
            <br />
          </div>

          <div class="col col-6">
            <label for="areaComentarios" class="form-label text-start"
                >Comentarios</label>
              <textarea
                class="form-control"
                id="areaComentarios"
                rows="3" v-model.trim="comentario"></textarea>
                <br />
              <br />
          </div>
        </div>

        <div class="row">
          <div class="col col-6">
            <h4>Selecciona tu curso</h4>
              <div class="col col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="javascript"
                    v-model="chequeados"
                    id="checkJS"
                  />
                  <label class="form-check-label" for="checkJS">
                    JavaScript
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="react"
                    v-model="chequeados"
                    id="checkReact"
                  />
                  <label class="form-check-label" for="checkReact">
                    React
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="angular"
                    v-model="chequeados"
                    id="checkNg"
                  />
                  <label class="form-check-label text-start" for="checkNg">
                    Angular
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="vue"
                    v-model="chequeados"
                    id="checkVue"
                  />
                  <label class="form-check-label" for="checkVue"> Vue </label>
                </div>
              </div>
              <br />
              <br />
          </div>
          <div class="col col-6">
            <h4>Tipo de documento</h4>
            <select class="form-select" v-model="documento">
              <option value="dni"> DNI </option>
              <option value="pasaporte"> Pasaporte </option>
              <option value="visa"> VISA </option>
            </select>
          </div>
        </div>

        <div v-if="errors.length > 0">
          <ul class="text-warning fw-bold">
            <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
          </ul>
        </div>

        <div id='btnEnviar' class="col-2">
          <input type="submit" class="btn btn-primary" value="ENVIAR" />
        </div><br>
        

      </form>
      <a href="/datosForm"><button class="btn btn-success">Ver datos cargados</button></a>
    </div>
    <b-modal id="modalproduct" title="BootstrapVue">
      <p class="my-4">Formulario Enviado</p>
    </b-modal> 

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: '',
      email:'',
      edad: 0,
      chequeados: [],
      documento: '',
      comentario: '',
      errors: [],
      dato:[]
    };
  },
  methods:{
    validarContenidoCargado(e){
      e.preventDefault()
      this.errors = []
      if (this.nombre && this.edad && this.email && this.documento) {
        if (this.edad < 0){this.errors.push('la edad no puede ser menor a 0')
          return false
        }
        if (!isNaN(this.nombre)){this.errors.push('no puedes ingresar numeros en el nombre')
          return false
        }
        
        let nuevoDato = {
          nombre: this.nombre,
          email:this.email,
          edad: this.edad,
          chequeados: this.chequeados,
          documento: this.documento,
          comentario: this.comentario,
        }

        axios.post('https://62e857de93938a545be4aa1a.mockapi.io/formulario', nuevoDato)
        .then(() => {
                    // this.$router.go(0)
                    this.$bvModal.show('modalproduct')
                    this.vaciarDatos()
                    })
        return true
      }
      if (this.nombre === '') {this.errors.push('El nombre es obligatorio.')}
      if (this.email === '') {this.errors.push('El correo electrónico es obligatorio.')}
      if (this.edad === 0) {this.errors.push('La edad debe ser mayor a 0 (cero).')}
      if (this.documento === '') {this.errors.push('Selecciona un documento')}
      e.preventDefault()
    },
    vaciarDatos(){
          this.nombre= ''
          this.email= ''
          this.edad= 0
          this.chequeados= []
          this.documento=null
          this.comentario= ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myFormulario{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

#btnEnviar{
  margin: 0 auto;
}
</style>
