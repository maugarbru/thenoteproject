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
          <b-nav-form class="text-light" @submit="onSubmit" @reset="onReset">
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
              <b-form-input
                min="5000"
                step="5000"
                type="number"
                placeholder="(Máximo)"
                v-model="selectedPrecio"
              ></b-form-input>
            </b-col>
            <b-col sm="auto">
              <b-button type="submit" variant="info">Buscar</b-button>
              <b-button type="reset" variant="secondary">Reiniciar búsqueda</b-button>
            </b-col>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <b-container class="bg-secondary" id="grid">
        <b-row>
          <b-col v-for="grupo in allGrupos" v-bind:key="grupo.id" sm="3" class="mt-2">
            <b-card class="mb-2 text-center bg-dark">
              <b-button @click="getGrupo(grupo.id)" variant="info" v-b-modal.modal-center>
                <h5>
                  <strong>{{ grupo.nombre }}</strong>
                </h5>
                <b-img thumbnail fluid :src="grupo.foto" :alt="grupo.nombre"></b-img>
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="danger"
        @dismissed="onDismiss"
        @dismiss-count-down="countDownChanged"
      >
        No hay grupos con ese criterio de búsqueda, intente con otros parámetros.
        Reiniciando búsqueda en {{ dismissCountDown }}
        <b-spinner variant="danger" small label="Spinning"></b-spinner>
      </b-alert>

      <div id="modals">
        <b-modal
          id="modal-center"
          text-center
          centered
          scrollable
          size="lg"
          title="MiParranda.com"
          header-bg-variant="info"
          header-text-variant="dark"
          body-bg-variant="light"
          body-text-variant="dark"
          footer-bg-variant="dark"
          footer-text-variant="info"
        >
          <b-row>
            <b-col class="text-center">
              <h1>
                <strong>{{ nombreGrupo }}</strong>
              </h1>
              <h4>
                <i>"{{ descripcionGrupo }}"</i>
              </h4>
            </b-col>
          </b-row>
          <hr />
          <b-img thumbnail fluid :src="fotoGrupo" :alt="nombreGrupo" center></b-img>
          <hr />
          <b-row>
            <b-col class="text-center">
              <h4>Información</h4>
            </b-col>
          </b-row>
          <b-row class="mt-2 text-center">
            <b-col>
              <h5>
                Precio:
                <b-badge variant="success">${{ precioGrupo }}</b-badge>
              </h5>
            </b-col>
            <b-col>
              <h5>
                Ciudad:
                <b-badge variant="dark">{{ ciudadGrupo }}</b-badge>
              </h5>
            </b-col>
          </b-row>
          <b-row class="mt-2 text-center">
            <b-col>
              <h5>
                Géneros:
                <b-badge variant="secondary">{{ genero1Grupo }}</b-badge>|
                <b-badge variant="secondary">{{ genero2Grupo }}</b-badge>
              </h5>
            </b-col>
            <b-col>
              <h5>
                Redes Sociales:
                <b-badge target="_blank" :href="paginaGrupo" variant="primary">Link</b-badge>
              </h5>
            </b-col>
          </b-row>
          <hr />
          <b-row class="mt-2">
            <b-embed type="iframe" aspect="16by9" :src="videoGrupo" allowfullscreen></b-embed>
          </b-row>

          <div slot="modal-footer" class="w-100">
            <p class="float-left">Para contactar con éste grupo aquí -></p>
            <b-button variant="info" size="sm" class="float-right">Contactar</b-button>
          </div>
        </b-modal>
      </div>
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
      selectedGrupo: {},
      selectedID: "",
      selectedCiudad: "",
      selectedGenero: "",
      selectedPrecio: "",
      dismissSecs: 5,
      dismissCountDown: 0,
      dismissCountDown2: 0,

      nombreGrupo: "",
      descripcionGrupo: "",
      genero1Grupo: "",
      genero2Grupo: "",
      ciudadGrupo: "",
      precioGrupo: "",
      fotoGrupo: "",
      videoGrupo: "",
      paginaGrupo: "",

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
    onSubmit(evt) {
      evt.preventDefault();
      this.comprobarBusqueda();
    },
    onReset(evt) {
      evt.preventDefault();
      this.selectedCiudad = "";
      this.selectedGenero = "";
      this.selectedPrecio = "";
      this.getAll();
    },
    onDismiss() {
      this.dismissCountDown = 0;
      this.getAll();
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getGrupo(id) {
      var url = `http://localhost:3000/grupos/${id}`;
      axios
        .get(url)
        .then(response => {
          var data = response.data;
          this.selectedGrupo = data[0];
          this.nombreGrupo = data[0].nombre;
          this.descripcionGrupo = data[0].descripcion;
          this.genero1Grupo = data[0].genero1;
          this.genero2Grupo = data[0].genero2;
          this.ciudadGrupo = data[0].ciudad;
          this.precioGrupo = data[0].precio;
          this.fotoGrupo = data[0].foto;
          this.videoGrupo = data[0].video.replace("watch?v=", "embed/");
          this.paginaGrupo = data[0].pagina;
        })
        .catch(error => {
          console.log(error);
        });
    },
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
      if (
        this.selectedGenero != "" &&
        this.selectedCiudad == "" &&
        this.selectedPrecio == ""
      ) {
        this.getPorGenero();
      } else if (
        this.selectedCiudad != "" &&
        this.selectedGenero == "" &&
        this.selectedPrecio == ""
      ) {
        this.getPorCiudad();
      } else if (
        this.selectedPrecio != "" &&
        this.selectedGenero == "" &&
        this.selectedCiudad == ""
      ) {
        this.getPorPrecio();
      } else if (
        this.selectedGenero != "" &&
        this.selectedCiudad != "" &&
        this.selectedPrecio == ""
      ) {
        this.getPorGeneroYCiudad();
      } else if (
        this.selectedGenero != "" &&
        this.selectedPrecio != "" &&
        this.selectedCiudad == ""
      ) {
        this.getPorGeneroYPrecio();
      } else if (
        this.selectedCiudad != "" &&
        this.selectedPrecio != "" &&
        this.selectedGenero == ""
      ) {
        this.getPorCiudadYPrecio();
      } else if (
        this.selectedCiudad != "" &&
        this.selectedPrecio != "" &&
        this.selectedGenero != ""
      ) {
        this.getPorCiudadYPrecioYGenero();
      }
      this.selectedCiudad = "";
      this.selectedGenero = "";
      this.selectedPrecio = "";
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
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
          if (this.allGrupos.length == 0) {
            this.showAlert();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
