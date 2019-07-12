<template>
  <div class="home">
    <div class="mt-2">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        indicators
        controls
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img
            slot="img"
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
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
