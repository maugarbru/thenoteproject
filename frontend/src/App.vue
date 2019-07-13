<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}">
          <img src="./assets/logo.png" width height="30" class="d-inline-block align-top" alt />
        </b-navbar-brand>
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
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
