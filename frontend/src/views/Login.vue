<template>
  <div class="login">
    <div class="mt-5">
      <div>
        <b-card-group deck>
          <b-card
            class="text-center"
            header="Iniciar sesión"
            style="max-width: 20rem; margin: auto;"
          >
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingresar email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingresar contraseña"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>