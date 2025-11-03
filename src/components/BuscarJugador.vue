<template>
    <div class="container my-5">
        
        <h2 class="text-center mb-5 text-warning fw-bold border-bottom border-warning pb-2">
            <i class="bi bi-search me-2"></i> Resultados de Búsqueda
        </h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            
            <div class="col" v-for="player in jugadores" :key="player">
                
                <div class="card h-100 bg-dark text-light border-warning shadow-lg">
                    
                    <div class="card-body">
                        
                        <div class="text-center mb-4">
                            <img :src="player.imagen" 
                                 class="img-fluid rounded-circle border border-3 border-warning my-3" 
                                 :alt="'Imagen de ' + player.nombre" 
                                 style="width: 150px; height: 150px; object-fit: cover;">
                            
                            <h3 class="text-warning fw-bolder mt-3 mb-0 fs-4">{{player.nombre}}</h3>
                            
                            <p class="text-white-50 fs-6 mt-1">{{player.posicion}}</p>
                        </div>
                        
                        <ul class="list-group list-group-flush border-top border-bottom border-warning">
                            
                            <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center small">
                                <span class="fw-semibold text-warning"><i class="bi bi-calendar-date-fill me-2"></i> Nacimiento:</span>
                                <span>{{player.fechaNacimiento}}</span>
                            </li>
                            
                            <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center small">
                                <span class="fw-semibold text-warning"><i class="bi bi-geo-alt-fill me-2"></i> País:</span>
                                <span>{{player.pais}}</span>
                            </li>
                        </ul>
                        
                    </div>
                    
                    <div class="card-footer bg-dark text-center border-0 pt-3">
                        <router-link :to="'/jugadores/' + player.idEquipo" class="btn btn-outline-warning btn-sm fw-bold">
                            <i class="bi bi-eye-fill me-1"></i> Ver Equipo
                        </router-link>
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
        name: "BuscarJugador",
        data(){
            return{
                jugadores: []
            }
        },
        methods: {
            loadJugador(){
                service.getJugadorPorNombre(this.$route.params.nombrejugador).then(result=>{
                    this.jugadores = result;
                })
            }
        },
        mounted(){
            this.loadJugador();
        },
        watch:{
            '$route.params.nombrejugador'(nextVal, oldVal){
                if(nextVal != oldVal){
                    this.loadJugador();
                }
            }
        }
    }
</script>