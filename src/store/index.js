import Vuex from "vuex";
import Vue from "vue";
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        datosFormulario:[]
    },
    getters:{
        getDatos:(state)=>{
            return state.datosFormulario
        }

    },
    mutations:{
        cargarDatos:(state, payload) => {
            state.datosFormulario = payload
        }
    },
    actions:{
        cargarDatosAsync: (context) => {
            axios.get('https://62e857de93938a545be4aa1a.mockapi.io/formulario')
            .then((response) => {
                context.commit("cargarDatos", response.data);
                })
                .catch((err) => {console.error(`${err}`)})
            
        }
    }

})