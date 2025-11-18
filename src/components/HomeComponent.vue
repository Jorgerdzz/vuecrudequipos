<template>
  <div class="container-fluid min-vh-100 d-flex align-items-center bg-dark">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <div class="mb-5 animate-fade-in">
            <i class="bi bi-trophy-fill text-warning display-1 mb-4"></i>
            <h1 class="display-3 fw-bold text-warning mb-3">
              Gestor de Equipos
            </h1>
            <p class="lead text-white-50 mb-5">
              Administra tus equipos favoritos, gestiona jugadores y mantén todo
              organizado en un solo lugar
            </p>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-4">
              <div
                class="card bg-secondary border-warning shadow-lg h-100 hover-lift"
              >
                <div class="card-body p-4 text-center">
                  <i class="bi bi-list-task text-warning fs-1 mb-3"></i>
                  <h5 class="text-warning fw-bold mb-2">Gestión de Equipos</h5>
                  <p class="text-white-50 small">
                    Visualiza y administra todos tus equipos deportivos
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="card bg-secondary border-warning shadow-lg h-100 hover-lift"
              >
                <div class="card-body p-4 text-center">
                  <i class="bi bi-people-fill text-warning fs-1 mb-3"></i>
                  <h5 class="text-warning fw-bold mb-2">
                    Control de Jugadores
                  </h5>
                  <p class="text-white-50 small">
                    Añade, edita y elimina jugadores de tus plantillas
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="card bg-secondary border-warning shadow-lg h-100 hover-lift"
              >
                <div class="card-body p-4 text-center">
                  <i class="bi bi-info-circle-fill text-warning fs-1 mb-3"></i>
                  <h5 class="text-warning fw-bold mb-2">
                    Información Detallada
                  </h5>
                  <p class="text-white-50 small">
                    Accede a todos los detalles de cada jugador
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="d-grid gap-3 d-md-flex justify-content-md-center">
            <router-link
              to="/equipos"
              class="btn btn-warning btn-lg fw-bold text-dark px-5 py-3 shadow-lg"
            >
              <i class="bi bi-arrow-right-circle-fill me-2"></i>Ver Equipos
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(255, 193, 7, 0.3) !important;
}

.min-vh-100 {
  min-height: 100vh;
}
</style>
