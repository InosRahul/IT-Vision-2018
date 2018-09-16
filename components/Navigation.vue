<<template>
  <div id="app">
<section class="hero is-fullheight is-primary is-bold">
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Logo">
        </a>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <a class="navbar-item" href="/about">
            About
          </a>
          <a class="navbar-item" href="/path">
            Path
          </a>
          <a class="navbar-item" href="/blog">
            Blog
          </a>
        </div>
      </div>
    </nav>
  </div>
  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
    </div>
  </div>
</section>
</div>
</template>>

<script>
export default {
  
  data(){
    return{
      showNav: false
    }
  }
}
</script>
>

<style scoped>
.navbar-item {
  color:#4a4a4a !important;
}
</style>
>