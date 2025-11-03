<template>
    <div class="container my-5 d-flex justify-content-center">
        
        <div class="card bg-dark text-light border-warning shadow-lg p-3" style="max-width: 600px;">
            
            <h2 class="card-header bg-warning text-dark text-center fw-bold fs-4 border-0">
                <i class="bi bi-person-circle me-2"></i> Detalle del Jugador
            </h2>
            
            <div class="card-body">
                
                <div class="text-center mb-4">
                    <img :src="jugador.imagen" 
                         class="img-fluid rounded-circle border border-4 border-warning my-3" 
                         :alt="'Imagen de ' + jugador.nombre" 
                         style="width: 200px; height: 200px; object-fit: cover;">
                    
                    <h1 class="text-warning fw-bolder mt-3 mb-0 display-5">{{jugador.nombre}}</h1>
                    
                    <p class="text-white-50 fs-5 mt-1">{{jugador.posicion}}</p>
                </div>
                
                <ul class="list-group list-group-flush border-top border-bottom border-warning">
                    
                    <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center">
                        <span class="fw-semibold text-white-50"><i class="bi bi-key-fill me-2"></i> ID Jugador:</span>
                        <span class="text-info">{{jugador.idJugador}}</span>
                    </li>
                    
                    <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center">
                        <span class="fw-semibold text-warning"><i class="bi bi-calendar-date-fill me-2"></i> Fecha de Nacimiento:</span>
                        <span>{{jugador.fechaNacimiento}}</span>
                    </li>
                    
                    <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center">
                        <span class="fw-semibold text-warning"><i class="bi bi-geo-alt-fill me-2"></i> País:</span>
                        <span>{{jugador.pais}}</span>
                    </li>

                </ul>
                
            </div>
            
            <div class="card-footer bg-dark text-center border-0 pt-4">
                <router-link :to="'/jugadores/' + jugador.idEquipo" class="btn btn-outline-warning fw-bold">
                    <i class="bi bi-arrow-left-circle-fill me-2"></i> Volver al Equipo
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import ServiceEquipos from '@/services/ServiceEquipos';
const service = new ServiceEquipos();
    export default{
        name: "DetalleJugador",
        data(){
            return{
                jugador: []
            }
        },
        mounted(){
            service.getJugadorPorId(this.$route.params.idjugador).then(result=>{
                this.jugador = result
            })
        }
    }
</script>