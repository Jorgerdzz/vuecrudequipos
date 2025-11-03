<template>
    <div>
        <h1>Crear jugador</h1>
        <form v-on:submit.prevent="insertJugador()">
            <label>Nombre</label>
            <input type="text" v-model="jugador.nombre" class="form-control"/>
            <label>Posicion</label>
            <input type="text" v-model="jugador.posicion" class="form-control"/>
            <label>URL imagen</label>
            <input type="text" v-model="jugador.imagen" class="form-control"/>
            <label>Fecha nacimiento</label>
            <input type="text" v-model="jugador.fechaNacimiento" class="form-control"/>
            <label>Pais</label>
            <input type="text" v-model="jugador.pais" class="form-control"/>
            <button>Crear jugador</button>
        </form>
    </div>
</template>

<script>
import ServiceEquipos from '@/services/ServiceEquipos'
const service = new ServiceEquipos();
    export default{
        name: "CrearJugador",
        data(){
            return{
                jugador:{
                    nombre: "",
                    posicion: "",
                    imagen: "",
                    fechaNacimiento: "",
                    pais: "",
                    idEquipo: this.$route.params.idequipo
                }
            }
        },
        methods:{
            insertJugador(){
                service.insertJugador(this.jugador).then(()=>{
                    this.$router.push("/jugadores/" + this.$route.params.idequipo);
                })
            }
        }
    }
</script>