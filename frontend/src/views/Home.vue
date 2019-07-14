<template>
  <div class="home">
    <div class="mt-2">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        fade
        indicators
        controls
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <b-carousel-slide
          img-width="1024"
          img-height="480"
          img-src="https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
          img-src="https://cdn.pixabay.com/photo/2015/03/26/10/22/band-691224_960_720.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
          img-src="https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
          img-src="https://cdn.pixabay.com/photo/2018/06/30/09/29/music-3507317_960_720.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <div class="mt-2">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <strong>Búsqueda</strong>
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-form>
            <b-row>
              <b-col md="3" class="text-light">
                Ciudad:
                <b-form-select v-model="selectedCiudad" :options="ciudades"></b-form-select>
              </b-col>
              <b-col md="3" class="text-light">
                Género:
                <b-form-select v-model="selectedGenero" :options="generos"></b-form-select>
              </b-col>
              <b-col md="3" class="text-light">
                Precio:
                <b-form-input type="number" v-model="selectedPrecio"></b-form-input>
              </b-col>
            </b-row>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <b-container class="bg-light">
        <b-row>
          <b-col v-for="grupo in allGrupos" v-bind:key="grupo.id" class="col-sm mt-2">
            <b-card
              img-top
              style="max-width: 20rem;"
              class="mb-2 text-center"
              :title="grupo.nombre"
            >
              <b-img thumbnail fluid :src="grupo.foto" :alt="grupo.nombre"></b-img>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      allGrupos: [],
      selectedCiudad: "",
      selectedGenero: "",
      selectedPrecio: "",
      generos: [
        { value: "Vallenato", text: "Vallenato" },
        { value: "Merengue", text: "Merengue" },
        { value: "Salsa", text: "Salsa" },
        { value: "Bachata", text: "Bachata" },
        { value: "Porro", text: "Porro" },
        { value: "Otro", text: "Otro" },
        { value: "Ninguno", text: "Ninguno" }
      ],
      ciudades: [
        { value: "Bogota", text: "Bogota" },
        { value: "Medellin", text: "Medellin" },
        { value: "Barranquilla", text: "Barranquilla" },
        { value: "Cartagena", text: "Cartagena" },
        { value: "Cali", text: "Cali" },
        { value: "Monteria", text: "Monteria" }
      ]
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      var url = "http://localhost:3000/grupos/";
      axios
        .get(url)
        .then(response => {
          var data = response.data;
          this.allGrupos = [];
          data.forEach(element => {
            this.allGrupos.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
