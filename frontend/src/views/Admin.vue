<template>
  <div class="mt-5">
    <h1 class="text-center">Administrar Grupos</h1>
    <hr />
    <b-button
      v-b-toggle.collapse-1
      variant="light"
      class="btn-outline-success btn-block"
    >Nuevo grupo</b-button>

    <b-collapse id="collapse-1" class="mt-1">
      <b-card header="Llenar TODOS los campos">
        <b-row>
          <b-col md="12">
            <p>Nombre:</p>
            <b-form-input type="text" v-model="nombre" required></b-form-input>
            <br />
          </b-col>
          <b-col md="12">
            <p>Descripción:</p>
            <b-form-input type="text" v-model="descripcion" required></b-form-input>
            <br />
          </b-col>
          <b-col md="12">
            <p>Correo Electronico:</p>
            <b-form-input type="email" v-model="email" required></b-form-input>
            <br />
          </b-col>
          <b-col md="6">
            <p>Género Principal:</p>
            <b-form-select v-model="genero1" :options="generos"></b-form-select>
          </b-col>
          <b-col md="6">
            <p>Género secundario:</p>
            <b-form-select v-model="genero2" :options="generos"></b-form-select>
          </b-col>
          <b-col md="6">
            <p>Ciudad:</p>
            <b-form-select v-model="ciudad" :options="ciudades"></b-form-select>
          </b-col>
          <b-col md="6">
            <p>Precio:</p>
            <b-form-input type="number" v-model="precio" required></b-form-input>
            <small>(En pesos)</small>
            <br />
          </b-col>
          <b-col md="12">
            <p>URL foto:</p>
            <b-form-input type="text" v-model="foto" required></b-form-input>
            <br />
          </b-col>
          <b-col md="12">
            <p>URL video:</p>
            <b-form-input type="text" v-model="video" required></b-form-input>
            <br />
          </b-col>
          <b-col md="12">
            <p>Link redes sociales:</p>
            <b-form-input type="text" v-model="pagina" required></b-form-input>
            <br />
          </b-col>
        </b-row>
        <br />
        <b-button variant="success" class="btn-block" v-if="comprobarCampos" @click="addGrupo">Crear</b-button>
      </b-card>
    </b-collapse>
    <hr />

    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >Grupo eliminado!</b-alert>
    <b-alert
      :show="dismissCountDown2"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown2=0"
      @dismiss-count-down="countDownChanged2"
    >Grupo creado!</b-alert>
    <br />

    <small>Ordenado por nombre. Haga click en un grupo para eliminarlo</small>
    <b-table
      small
      class="bg-light"
      outlined
      hover
      sort-by="nombre"
      selectable
      selectedVariant="danger"
      @row-selected="rowSelected"
      select-mode="single"
      :items="grupos"
    ></b-table>
    <b-modal hide-footer id="modal-1" title="LaNota.com">
      <p class="my-4">Deseas eliminar el grupo?</p>
      <p class="my-4">"{{ selectedNombre }}"</p>
      <b-button
        variant="light"
        class="btn-outline-danger btn-block"
        @click="deleteGrupo"
      >Eliminar grupo</b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "admin",
  data() {
    return {
      descripcion: "",
      nombre: "",
      email: "",
      genero1: "",
      genero2: "",
      ciudad: "",
      precio: "",
      foto: "",
      video: "",
      pagina: "",
      grupos: [],
      selected: [],
      selectedID: "",
      selectedNombre: "",
      dismissSecs: 2,
      dismissCountDown: 0,
      dismissCountDown2: 0,
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
  computed: {
    comprobarCampos() {
      if (
        this.nombre == "" ||
        this.descripcion == "" ||
        this.email == "" ||
        this.genero1 == "" ||
        this.genero2 == "" ||
        this.ciudad == "" ||
        this.precio == "" ||
        this.foto == "" ||
        this.video == "" ||
        this.pagina == ""
      ) {
        return false;
      } else if (this.comprobarFecha == false) {
        return false;
      }
      return true;
    }
  },
  methods: {
    limpiarCampos() {
      this.descripcion = "";
      this.fecha = "";
      this.prioridad = "";
      this.$root.$emit("bv::toggle::collapse", "collapse-1");
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    countDownChanged2(dismissCountDown2) {
      this.dismissCountDown2 = dismissCountDown2;
    },

    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    showAlert2() {
      this.dismissCountDown2 = this.dismissSecs;
    },

    getAll() {
      this.grupos = [];
      var url = "http://localhost:3000/grupos/admin";
      axios
        .get(url)
        .then(response => {
          var data = response.data;
          data.forEach(element => {
            this.grupos.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    addGrupo() {
      var url = "http://localhost:3000/grupos/";
      var data = {
        id:
          "g" +
          Math.round(Math.random() * 100) +
          Math.round(Math.random() * 100) +
          Math.round(Math.random() * 100),
        nombre: this.nombre,
        descripcion: this.descripcion,
        email: this.email,
        genero1: this.genero1,
        genero2: this.genero2,
        ciudad: this.ciudad,
        precio: this.precio,
        foto: this.foto,
        video: this.video,
        pagina: this.pagina
      };
      axios
        .post(url, data)
        .then(response => {})
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          this.getAll();
          this.limpiarCampos();
        });
      this.showAlert2();
    },

    rowSelected(grupos) {
      this.selected = grupos;
      if (this.selected.length != 0) {
        this.selectedID = this.selected[0].id;
        this.selectedNombre = this.selected[0].nombre;
        this.$bvModal.show("modal-1");
      }
    },

    deleteGrupo() {
      var data = {
        id: this.selectedID
      };
      var url = `http://localhost:3000/grupos/${data.id}`;
      axios
        .delete(url, data)
        .then(response => {})
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          this.getAll();
        });
      this.selectedID = "";
      this.selectedDesc = "";
      this.$bvModal.hide("modal-1");
      this.showAlert();
    }
  }
};
</script>