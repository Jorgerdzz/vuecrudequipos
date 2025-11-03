<template>
    <div class="container my-5 d-flex justify-content-center">
        
        <div class="card bg-dark text-light border-warning shadow-lg p-4" style="max-width: 500px; width: 100%;">
            
            <h2 class="card-header bg-warning text-dark text-center fw-bold fs-4 border-0 mb-4 rounded-top">
                <i class="bi bi-arrow-left-right me-2"></i> Gestión de Traspasos
            </h2>
            
            <div class="card-body">
                
                <form v-on:submit.prevent="traspasarJugador()">
                    
                    <div class="mb-4">
                        <label for="selectJugador" class="form-label fw-semibold text-warning">
                            <i class="bi bi-person-fill me-1"></i> Seleccionar Jugador a Traspasar
                        </label>
                        <select v-model="idjugador" id="selectJugador" class="form-select bg-dark text-light border-warning shadow-sm">
                            <option value="" disabled>-- Seleccione un jugador --</option>
                            <option v-for="jugador in jugadores" :key="jugador" :value="jugador.idJugador">{{jugador.nombre}}</option>
                        </select>
                    </div>
                    
                    <div class="mb-5">
                        <label for="selectEquipo" class="form-label fw-semibold text-warning">
                            <i class="bi bi-house-fill me-1"></i> Seleccionar Equipo de Destino
                        </label>
                         <select v-model="idequipo" id="selectEquipo" class="form-select bg-dark text-light border-warning shadow-sm">
                            <option value="" disabled>-- Seleccione un equipo --</option>
                            <option v-for="equipo in equipos" :key="equipo" :value="equipo.idEquipo">{{equipo.nombre}}</option>
                        </select>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button class="btn btn-warning fw-bold fs-5 text-dark" type="submit">
                            <i class="bi bi-send-fill me-2"></i> Realizar Traspaso
                        </button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    </div>
</template>

<script>
import ServiceEquipos from '@/services/ServiceEquipos'
const service = new ServiceEquipos();
    export default{
        name: "TraspasosComponent",
        data(){
            return{
                jugadores: [],
                equipos: [],
                idjugador: 0,
                idequipo: 0
            }
        },
        methods:{
            traspasarJugador(){
                service.traspasarJugador(this.idjugador, this.idequipo).then(()=>{
                    this.$router.push("/jugadores/" + this.idequipo);
                })
            },
            getJugadores(){
                service.getJugadores().then(result=>{
                    this.jugadores = result;
                })
            },
            getEquipos(){
                service.getEquipos().then(result=>{
                    this.equipos = result;
                })
            }
        },
        mounted(){
            this.getJugadores();
            this.getEquipos();
        }
    }
</script>