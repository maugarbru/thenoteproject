<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-brand :to="{name: 'home'}"><strong>LaNota.com</strong> </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="text-center" :to="{name: 'home'}" exact>Inicio</b-nav-item>
            <b-nav-item class="text-center" :to="{name: 'login'}">Login</b-nav-item>
            <b-nav-item class="text-center" :to="{name: 'about'}">Acerca</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
