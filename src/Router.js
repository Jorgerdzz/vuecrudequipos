import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import EquiposComponent from './components/EquiposComponent.vue';
import JugadoresEquipo from './components/JugadoresEquipo.vue';
import DetalleJugador from './components/DetalleJugador.vue';

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/equipos", component: EquiposComponent},
    {path: "/jugadores/:idequipo", component: JugadoresEquipo},
    {path: "/details/:idjugador", component: DetalleJugador},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;