<template>
  <section class="container">
    <div>
      <logo/>
      <h2 class="title">
        Vision 2K18
      </h2>
      <h4 class="subtitle">
        IT Vision 2K18
      </h4>
      
      <div class="links">
          <nuxt-link class="button--green" target="_blank" to="/events">Events</nuxt-link>
      
      
          <nuxt-link class="button--grey" target="_blank" to="/team">Team</nuxt-link>
        </div>
        <div class="links">
          <nuxt-link class="button--green" target="_blank" to="/sponsers">Sponsers</nuxt-link>
        
        
          <nuxt-link class="button--grey" target="_blank" to="/contact">Contact</nuxt-link>
        </div>
        
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
    
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
  
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
