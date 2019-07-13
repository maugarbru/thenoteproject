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

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Género">
            <b-dropdown-item href="#">Vallenato</b-dropdown-item>
            <b-dropdown-item href="#">Salsa</b-dropdown-item>
            <b-dropdown-item href="#">Merengue</b-dropdown-item>
            <b-dropdown-item href="#">Mixto</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Ciudad">
            <b-dropdown-item href="#">Medellin</b-dropdown-item>
            <b-dropdown-item href="#">Bogota</b-dropdown-item>
            <b-dropdown-item href="#">Cali</b-dropdown-item>
            <b-dropdown-item href="#">Barranquilla</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Búsqueda"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <b-container class="bg-light">
        <b-row>
          <div class="col-sm mt-2">
            <b-card
              img-alt="Image"
              img-top
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
              <b-card-text>Grupo 1</b-card-text>
            </b-card>
          </div>
          <div class="col-sm mt-2">
            <b-card
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Card Title</b-card-text>
            </b-card>
          </div>
          <div class="col-sm mt-2">
            <b-card
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>Card Title</b-card-text>
            </b-card>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {}
};
</script>
