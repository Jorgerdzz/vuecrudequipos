<template>
    <div class="container mt-5">
        
        <h2 class="text-center mb-4 text-warning fw-bold border-bottom border-warning pb-2">
            <i class="bi bi-list-task me-2"></i> Nuestros Equipos
        </h2>

        <div class="d-flex flex-wrap justify-content-center">
            
            <div v-for="equipo in equipos" :key="equipo" class="card bg-dark text-light border-warning shadow-lg m-3" style="width: 18rem;">
                
                <img :src="equipo.imagen" class="card-img-top img-fluid rounded-top" :alt="'Imagen de ' + equipo.nombre" style="height: 350px; object-fit: cover;">
                
                <div class="card-body d-flex flex-column">
                    
                    <h5 class="card-title text-warning fw-bold mb-3">{{equipo.nombre}}</h5>
                    
                    <p class="card-text text-white-50 small mb-3">
                        **Web:** <a :href="'http://' + equipo.web" target="_blank" class="text-decoration-none text-info">{{equipo.web}}</a>
                    </p>
                    
                    <div class="d-grid gap-2 mt-auto">

                        <router-link :to="'/createjugador/' + equipo.idEquipo" class="btn btn-outline-warning fw-bold">
                            <i class="bi bi-person-plus-fill me-1"></i> Añadir Jugador
                        </router-link>
                        
                        <router-link :to="'/jugadores/' + equipo.idEquipo" class="btn btn-warning fw-bold text-dark">
                            <i class="bi bi-people-fill me-1"></i> Ver Jugadores
                        </router-link>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import ServiceEquipos from '../services/ServiceEquipos';
const service = new ServiceEquipos();
    export default{
        name: "EquiposComponent",
        data(){
            return{
                equipos: []
            }
        },
        mounted(){
            service.getEquipos().then(result=>{
                this.equipos = result
            });
        }
    }
</script>