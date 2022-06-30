var app = new Vue({
    el: '#app',
    // data contiene variables
    data: {
        totalContador: 0,

    },
    // contiene metodos/funciones
    methods: {

        restar(){
            if (this.totalContador>0){
                this.totalContador--
            }
        },
        sumar(){
            this.totalContador++
        }
    },

})