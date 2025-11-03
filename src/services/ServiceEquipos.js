import Global from "@/Global"
import axios from "axios";

export default class ServiceEquipos{

    getEquipos(){
        return new Promise(function(resolve){
            let url = Global.urlEquipos;
            let request = "api/Equipos";
            let equipos = []
            axios.get(url + request).then(response=>{
                equipos = response.data;
                resolve(equipos)
            })
        })
    }

    getJugadoresEquipo(idequipo){
        return new Promise(function(resolve){
            let jugadores = []
            let url = Global.urlEquipos;
            let request = "api/Jugadores/JugadoresEquipos/" + idequipo;
            axios.get(url + request).then(response=>{
                jugadores = response.data;
                resolve(jugadores)
            })
        })
    }

}