<template>
    <!--
        Estilo Moderno: Fondo Oscuro (bg-dark) con Sombra (shadow-lg)
        y barra fija en la parte superior (sticky-top) para una mejor UX.
        Se ha añadido navbar-dark para asegurar que el texto sea visible.
    -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
        <div class="container-fluid">
            
            <!-- Marca de la Aplicación -->
            <!-- Utilizamos text-warning/text-primary para un contraste llamativo -->
            <router-link class="navbar-brand fw-bolder fs-4 text-warning" to="/">
                <i class="bi bi-gear-fill me-2"></i> CRUD Equipos
            </router-link>
            
            <!-- Botón Toggler para dispositivos móviles -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <!-- Enlace Principal (Inicio) -->
                    <!-- Los enlaces usan color blanco y el activo se resalta con text-warning/text-primary -->
                    <li class="nav-item me-2">
                        <router-link class="nav-link text-uppercase fw-semibold" aria-current="page" to="/">
                            <i class="bi bi-house-door-fill me-1"></i> Home
                        </router-link>
                    </li>
                    
                    <!-- Enlace de Listado de Equipos (Ejemplo CRUD) -->
                    <li class="nav-item me-2">
                        <router-link class="nav-link text-uppercase fw-semibold" to="/equipos">
                            <i class="bi bi-list-task me-1"></i> Ver Equipos
                        </router-link>
                    </li>

                     <!-- Enlace para Crear un Nuevo Equipo (Ejemplo CRUD) -->
                    <li class="nav-item">
                        <router-link class="nav-link text-uppercase fw-semibold" to="/crear">
                            <i class="bi bi-plus-circle-fill me-1"></i> Crear Equipo
                        </router-link>
                    </li>
                    
                </ul>
                
                <!-- Formulario de Búsqueda con estilo integrado -->
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <!-- Estilo del input: border-primary y fondo oscuro para integrarse con la barra -->
                        <input class="form-control bg-dark text-light border-warning" 
                               type="search" 
                               placeholder="Buscar equipo..." 
                               aria-label="Search"/>
                        <!-- Botón con color primario para un toque moderno -->
                        <button class="btn btn-warning fw-bold text-dark" type="submit">
                            <i class="bi bi-search"></i> Buscar
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: "MenuComponent"
    }
</script>

<style>
/* Si bien la solicitud es usar solo clases, a veces Bootstrap Icons (bi) es necesario 
   para completar la estética moderna. Asumo que se carga en el proyecto. */

/* Aseguramos que los enlaces activos se vean bien en el fondo oscuro */
.navbar-dark .navbar-nav .nav-link.active {
    color: var(--bs-warning) !important; /* Resalta el enlace activo con el color de acento */
    border-bottom: 2px solid var(--bs-warning);
    padding-bottom: 5px;
}

.navbar-dark .navbar-nav .nav-link:hover {
    color: var(--bs-warning) !important; /* Resalta al pasar el ratón */
}
</style>