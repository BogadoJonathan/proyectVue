Vue.component('mi-table',{
    props:['alumnos'],
    template:`
    <table>
        <thead>
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
    `
})

var app = new Vue({
    el: '#app',
    data: {
        alumnos:[
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
})