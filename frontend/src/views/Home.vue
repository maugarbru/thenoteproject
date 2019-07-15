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
          <b-nav-form class="text-light">
            <b-col sm="auto">
              Ciudad:
              <b-form-select v-model="selectedCiudad" :options="ciudades"></b-form-select>
            </b-col>
            <b-col sm="auto">
              Género:
              <b-form-select v-model="selectedGenero" :options="generos"></b-form-select>
            </b-col>
            <b-col sm="auto">
              Precio:
              <b-form-input min="1000" type="number" placeholder="$" v-model="selectedPrecio"></b-form-input>
            </b-col>
            <b-col sm="auto">
              <b-button @click="comprobarBusqueda" >Buscar</b-button>
            </b-col>
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
    },
    comprobarBusqueda() {
      if ((this.selectedGenero != "")&&(this.selectedCiudad == "")&&(this.selectedPrecio == "")) {
        this.getPorGenero()
      } else if ((this.selectedCiudad != "")&&(this.selectedGenero == "")&&(this.selectedPrecio == "")) {
        this.getPorCiudad()
      } else if ((this.selectedPrecio != "")&&(this.selectedGenero == "")&&(this.selectedCiudad == "")) {
        this.getPorPrecio()
      } else if ((this.selectedGenero != "")&&(this.selectedCiudad != "")&&(this.selectedPrecio == "")) {
        this.getPorGeneroYCiudad()
      } else if ((this.selectedGenero != "")&&(this.selectedPrecio != "")&&(this.selectedCiudad == "")) {
        this.getPorGeneroYPrecio()
      } else if ((this.selectedCiudad != "")&&(this.selectedPrecio != "")&&(this.selectedGenero == "")) {
        this.getPorCiudadYPrecio()
      } else if ((this.selectedCiudad != "")&&(this.selectedPrecio != "")&&(this.selectedGenero != "")) {
        this.getPorCiudadYPrecioYGenero()
      }
      this.selectedCiudad = ""
      this.selectedGenero = ""
      this.selectedPrecio = ""
    },
    getPorGenero() {
      var url = `http://localhost:3000/grupos/busqueda/genero/${this.selectedGenero}`;
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
    },
    getPorCiudad() {
      var url = `http://localhost:3000/grupos/busqueda/ciudad/${this.selectedCiudad}`;
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
    },
    getPorPrecio() {
      var url = `http://localhost:3000/grupos/busqueda/precio/${this.selectedPrecio}`;
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
    },
    getPorGeneroYCiudad() {
      var url = `http://localhost:3000/grupos/busqueda/g-c/${this.selectedGenero}/${this.selectedCiudad}`;
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
    },
    getPorGeneroYPrecio() {
      var url = `http://localhost:3000/grupos/busqueda/g-p/${this.selectedGenero}/${this.selectedPrecio}`;
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
    },
    getPorCiudadYPrecio() {
      var url = `http://localhost:3000/grupos/busqueda/c-p/${this.selectedCiudad}/${this.selectedPrecio}`;
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
    },
    getPorCiudadYPrecioYGenero() {
      var url = `http://localhost:3000/grupos/busqueda/c-p-g/${this.selectedCiudad}/${this.selectedPrecio}/${this.selectedGenero}`;
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
