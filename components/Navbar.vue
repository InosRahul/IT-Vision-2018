<template>
  <section>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Vision 2k18</a>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item"  to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item"  to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item"  to="/events">Events</nuxt-link>
          <nuxt-link class="navbar-item" target="_blank" to="/team">Team</nuxt-link>
         
        </div>
      </div>
    </nav>
  
  </section>
</template>