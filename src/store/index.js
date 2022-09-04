import Vuex from "vuex";
import axios from "axios"

export default Vuex.createStore({
    state:{
        isAdmin:false,
        access: false,
        productos:[],
        carrito:[]
    },
    getters:{
        getIsAdmin:(state)=>{
            return state.isAdmin
        },
        getAccess:(state)=>{
            return state.access
        },
        getProducts:(state)=>{
            return state.productos
        },
        getCarrito:(state)=>{
            return state.carrito
        }

    },
    mutations:{
        cargarDatosProd:(state,payload) =>{
            state.productos = payload
        },
        MutaIsAdmin:(state) =>{
            state.isAdmin = !state.isAdmin
        },
        MutaAccess:(state) =>{
            state.access = !state.access
        },
        MutVaciarCarrito:(state) =>{
            state.carrito = []
        },
        MutAgregarAlCarrito: (state,payload) =>{
            let found = state.carrito.find(element => element.id == payload.id)
            if(found){
                found.cantidad +=1
                }
            else{
                let dato = {
                'id':payload.id,
                'cantidad':1,
                'nombre': payload.nombre
                }
                state.carrito.push(dato)
            }
            
        },
        MutQuitarDelCarrito: (state,payload) =>{
            let found = state.carrito.find(element => element.id == payload.id)
            if(found && found.cantidad>0){
                found.cantidad -=1
                if(found.cantidad == 0){
                    state.carrito = state.carrito.filter((item) => item.id !== found.id)
                }
            }
            
        }

    },
    actions:{
        cargarDatosProductos: (context) => {
            axios.get('https://62e857de93938a545be4aa1a.mockapi.io/productos')
            .then((response) => {
                context.commit("cargarDatosProd", response.data);
                })
                .catch((err) => {console.error(`${err}`)})
            
        },
        ChangeAccess: (context) => {
            context.commit("MutaAccess");
        },
        ChangeAdmin: (context) => {
            context.commit("MutaIsAdmin");
        },
        VaciarCarrito: (context) => {
            context.commit("MutVaciarCarrito")
        },
        AgregarAlCarrito: (context,payload) => {
            context.commit("MutAgregarAlCarrito",payload)
        },
        QuitarDelCarrito: (context,payload) => {
            context.commit("MutQuitarDelCarrito",payload)
        }
    }

});