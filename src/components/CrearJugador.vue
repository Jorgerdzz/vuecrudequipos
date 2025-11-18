<template>
  <div class="container mt-5">
    <h2
      class="text-center mb-5 text-warning fw-bold border-bottom border-warning pb-2"
    >
      <i class="bi bi-person-plus-fill me-2"></i> Crear Nuevo Jugador
    </h2>

    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8">
        <div class="card bg-dark text-light border-warning shadow-lg">
          <div class="card-body p-4">
            <form v-on:submit.prevent="insertJugador()">
              <div class="mb-3">
                <label class="form-label text-warning fw-bold">
                  <i class="bi bi-person-fill me-2"></i>Nombre
                </label>
                <input
                  type="text"
                  v-model="jugador.nombre"
                  class="form-control bg-secondary text-light border-warning"
                  placeholder="Ingrese el nombre del jugador"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label text-warning fw-bold">
                  <i class="bi bi-person-badge-fill me-2"></i>Posición
                </label>
                <input
                  type="text"
                  v-model="jugador.posicion"
                  class="form-control bg-secondary text-light border-warning"
                  placeholder="Ej: Delantero, Defensa, Portero"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label text-warning fw-bold">
                  <i class="bi bi-image-fill me-2"></i>URL Imagen
                </label>
                <input
                  type="text"
                  v-model="jugador.imagen"
                  class="form-control bg-secondary text-light border-warning"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label text-warning fw-bold">
                  <i class="bi bi-calendar-fill me-2"></i>Fecha de Nacimiento
                </label>
                <input
                  type="text"
                  v-model="jugador.fechaNacimiento"
                  class="form-control bg-secondary text-light border-warning"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>

              <div class="mb-4">
                <label class="form-label text-warning fw-bold">
                  <i class="bi bi-globe me-2"></i>País
                </label>
                <input
                  type="text"
                  v-model="jugador.pais"
                  class="form-control bg-secondary text-light border-warning"
                  placeholder="País de origen"
                  required
                />
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-warning fw-bold text-dark py-2">
                  <i class="bi bi-check-circle-fill me-2"></i>Crear Jugador
                </button>
                <router-link
                  :to="'/jugadores/' + $route.params.idequipo"
                  class="btn btn-outline-warning fw-bold py-2"
                >
                  <i class="bi bi-arrow-left-circle-fill me-2"></i>Cancelar
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceEquipos from "@/services/ServiceEquipos";
const service = new ServiceEquipos();
export default {
  name: "CrearJugador",
  data() {
    return {
      jugador: {
        nombre: "",
        posicion: "",
        imagen: "",
        fechaNacimiento: "",
        pais: "",
        idEquipo: this.$route.params.idequipo,
      },
    };
  },
  methods: {
    insertJugador() {
      service.insertJugador(this.jugador).then(() => {
        this.$router.push("/jugadores/" + this.$route.params.idequipo);
      });
    },
  },
};
</script>
