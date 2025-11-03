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

    getJugadorPorId(idjugador){
        return new Promise(function(resolve){
            let url = Global.urlEquipos;
            let request = "api/Jugadores/" + idjugador;
            axios.get(url + request).then(response=>{
                resolve(response.data)
            })
        })
    }

    getJugadorPorNombre(nombre){
        return new Promise(function(resolve){
            let url = Global.urlEquipos;
            let request = "api/Jugadores/FindJugadores/" + nombre;
            axios.get(url + request).then(response=>{
                console.log(response.data)
              resolve(response.data)  
            })
        })
    }

}