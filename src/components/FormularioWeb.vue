<template>
  <div>
    <h1>FORMULARIO</h1>
    <div class="container">
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
                rows="3"></textarea>
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

        <div class="col-2">
          <input type="submit" class="btn btn-primary" value="ENVIAR" />
        </div>



      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioWeb",
  data() {
    return {
      nombre: '',
      email:'',
      edad: 0,
      chequeados: [],
      documento: null,
      errors: []
    };
  },
  methods:{
    validarContenidoCargado(e){
      this.errors = []
      if (this.nombre && this.edad && this.email && this.documento) {
        if (this.edad < 0){this.errors.push('la edad no puede ser menor a 0')
          return false
        }
        if (!isNaN(this.nombre)){this.errors.push('no puedes ingresar numeros en el nombre')
          return false
        }
        alert('todo ok')
        return true
      }
      if (this.nombre === '') {this.errors.push('El nombre es obligatorio.')}
      if (this.email === '') {this.errors.push('El correo electrónico es obligatorio.')}
      if (this.edad === 0) {this.errors.push('La edad debe ser mayor a 0 (cero).')}
      if (this.documento === null) {this.errors.push('Selecciona un documento')}
      e.preventDefault()


    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
