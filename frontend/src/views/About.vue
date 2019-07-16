<template>
  <div class="about">
    <div class="mt-5">
      <div>
        <b-card-group deck class="text-center">
          <b-card
            header="Desarrollado por"
            img-src="https://bit.ly/2Mk2OJU"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; margin: auto;"
            title="Mauricio Garzón Brunal"
          >
            <b-card-text>Desarrollado usando Vue.js <b-link variant="dark" :to="{name: 'admin'}">y</b-link> Node.js</b-card-text>
            <b-button target="blank" href="https://github.com/maugarbru/thenoteproject" variant="dark">Repositorio en GitHub</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>