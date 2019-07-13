<template>
  <div class="inscripcion">
    <div class="mt-2 bg-light">
      <b-card header="Solicitud de inscripción"
      title="Ingrese sus datos">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Correo electrónico:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              required
              placeholder="Ingrese correo"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre del grupo:" label-for="input-2">
            <b-form-input id="input-2" v-model="name" required placeholder="Ingrese nombre"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Pagina en redes sociales:" label-for="input-3">
            <b-form-input id="input-3" v-model="url" required placeholder="Ingrese URL"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Enviar solicitud</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Inscripcion",
  data() {
    return {
      email: "",
      name: "",
      url: ""
    };
  },
  methods: {
    onSubmit() {
      this.sendEmail();
    },
    limpiarCampos() {
      this.email = "";
      this.name = "";
      this.url = "";
    },
    sendEmail() {
      var url = "http://localhost:3000/sendemail/";
      var data = {
        subject: "Notificación de inscripción",
        text: `Un grupo ha solicitado ser inscrito en nuestra página.
            Nombre: ${this.name}. 
            Email: ${this.email}.
            Página: ${this.url}.`
      };
      axios
        .post(url, data)
        .then(response => {})
        .catch(error => {
          console.log(error);
        })
        .then(() => {});
    }
  }
};
</script>