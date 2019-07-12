<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}">
          <strong>LaNota.com</strong>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="text-center" :to="{name: 'home'}" exact>Inicio</b-nav-item>
            <b-nav-item class="text-center" :to="{name: 'destacados'}">Destacados</b-nav-item>
            <b-nav-item class="text-center" :to="{name: 'inscripcion'}">[Inscripción de grupos]</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Búsqueda"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
