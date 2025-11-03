<template>
    <div class="container mt-5">
        
        <h2 class="text-center mb-5 text-warning fw-bold border-bottom border-warning pb-2">
            <i class="bi bi-people-fill me-2"></i> Plantilla del Equipo
        </h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            
            <div class="col" v-for="jugador in jugadores" :key="jugador">
                
                <div class="card h-100 bg-dark text-light border-warning shadow-lg overflow-hidden">
                    
                    <div class="text-center bg-secondary p-2">
                         <img :src="jugador.imagen" class="img-fluid rounded-circle border border-3 border-warning my-3" 
                              :alt="'Imagen de ' + jugador.nombre" 
                              style="width: 150px; height: 150px; object-fit: cover;">
                    </div>
                    
                    <div class="card-body text-center d-flex flex-column">
                        
                        <h3 class="card-title text-warning fw-bolder mb-1">{{jugador.nombre}}</h3>
                        
                        <p class="card-text text-white-50 fs-5 mb-3">
                            <i class="bi bi-person-badge-fill me-1"></i> {{jugador.posicion}}
                        </p>
                        
                    </div>
                    
                    <div class="card-footer bg-dark border-0 p-3 d-grid gap-2">

                        <router-link :to="'/details/' + jugador.idJugador" class="btn btn-warning fw-bold text-dark">
                            <i class="bi bi-info-circle-fill me-1"></i> Ver Detalles
                        </router-link>

                        <button @click="eliminarJugador(jugador.idJugador)" class="btn btn-danger fw-bold">
                            <i class="bi bi-trash-fill me-1"></i> Eliminar Jugador
                        </button>

                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import ServiceEquipos from '@/services/ServiceEquipos';
const service = new ServiceEquipos();
    export default{
        name: "JugadoresEquipo",
        data(){
            return{
                jugadores: [],
            }
        },
        methods:{
            getJugadoresEquipo(){
                service.getJugadoresEquipo(this.$route.params.idequipo).then(result=>{
                    this.jugadores = result
                })
            },
            eliminarJugador(idjugador){
                service.deleteJugador(idjugador).then(()=>{
                    this.getJugadoresEquipo();
                })
            }
        },
        mounted(){
            this.getJugadoresEquipo();
        }
    }
</script>