import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import EquiposComponent from './components/EquiposComponent.vue';
import JugadoresEquipo from './components/JugadoresEquipo.vue';
import DetalleJugador from './components/DetalleJugador.vue';
import BuscarJugador from './components/BuscarJugador.vue';
import TraspasosComponent from './components/TraspasosComponent.vue';
import CrearJugador from './components/CrearJugador.vue';

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/equipos", component: EquiposComponent},
    {path: "/jugadores/:idequipo", component: JugadoresEquipo},
    {path: "/details/:idjugador", component: DetalleJugador},
    {path: "/buscarjugador/:nombrejugador", component: BuscarJugador},
    {path: "/traspasos/", component: TraspasosComponent},
    {path: "/createjugador/:idequipo", component: CrearJugador}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;