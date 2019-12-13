var app = new Vue({
    el:"#app",
    data(){
        return {
            mensaje:"holas",
            articulos:[
                {
                    id:10,
                    nombre:'tabla',
                    piezas: 3,
                    fechaCompra: '2019-11-01',
                    monto: 1200
                },
                {
                    id:11,
                    nombre:'truck',
                    piezas: 4,
                    fechaCompra: '2019-11-01',
                    monto: 2800
                },
                {
                    id:13,
                    nombre:'lijas',
                    piezas: 2,
                    fechaCompra: '2019-11-01',
                    monto: 200
                },
                {
                    id:14,
                    nombre:'llantas',
                    piezas: 8,
                    fechaCompra: '2019-11-12',
                    monto: 400
                },
                {
                    id:16,
                    nombre:'bongs',
                    piezas: 6,
                    fechaCompra: '2019-11-09',
                    monto: 1800
                },
                {
                    id:19,
                    nombre:'medias',
                    piezas: 4,
                    fechaCompra: '2019-11-22',
                    monto: 120
                },
                {
                    id:20,
                    nombre:'tenis',
                    piezas: 3,
                    fechaCompra: '2019-11-18',
                    monto: 2100
                },
                {
                    id:21,
                    nombre:'playera',
                    piezas: 7,
                    fechaCompra: '2019-11-13',
                    monto: 700
                },
                {
                    id:24,
                    nombre:'sudaderas',
                    piezas: 5,
                    fechaCompra: '2019-11-22',
                    monto: 3000
                },
                {
                    id:31,
                    nombre:'patines',
                    piezas: 3,
                    fechaCompra: '2019-11-23',
                    monto: 2100
                },
            ],
            articulosFiltrados:{

            }
        }
    },//data
    methods:{
        filtradoDatos(){
            this.articulosFiltrados = this.articulos.reduce((accum,articulo)=>{
                if(articulo.piezas == 3){
                    accum.comprasDe3.push(articulo)
                }
                return accum
            },{comprasDe3:[],})

        }
    },
    beforeMount (){

    },
    mounted(){
        this.filtradoDatos()
    },
    beforeDestroy(){

    },
    destroyed(){

    }
})