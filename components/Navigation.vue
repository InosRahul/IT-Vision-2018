<template>
  <div>
    <nuxt-link exact to="/events" class="logo">
    
       
    
    </nuxt-link>
    <nav>
      <div class="title">
        <nuxt-link to="/Technical">Technical</nuxt-link>
        <nuxt-link to="/Non-Technical">Non-Technical</nuxt-link>
        <nuxt-link exact to="/Workshop">Workshops</nuxt-link>
      </div>
    </nav>

    <div class="bottom-side-anchor"><span class="mid"></span></div>
  </div>
</template>

<style scoped>
  nav {
    width: 60px;
    background: #27aae1; /* Old browsers */
    background: -moz-linear-gradient(top, #27aae1 0%, #ec008c 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #27aae1 0%,#ec008c 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #27aae1 0%,#ec008c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27aae1', endColorstr='#ec008c',GradientType=0 );
    height: 120vh;
    position: absolute;
    left: 0;
    z-index: 3000;
  }
  .title {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    font-size: 20px;
    color: white;
    z-index: 6000;
    margin-left: 17px;
    writing-mode: vertical-rl;
  }
  @media screen and (max-width: 800px) {
    nav {
      width: 40px; 
    }
    .title {
      margin-left: 13px;
    }
  }
  .title a, .title a:hover {
    color: rgba(0, 0, 0, 0.8);
    margin: 60px 0px;
  }
  .title a.nuxt-link-active {
    color: black;
    transition: 0.2s color ease;
  }
  .logo {
    position: fixed;
    top: 10px; 
    right: 30px;
    font-size: 30px; 
    color: white;
    text-decoration: none;
    transition: 0.2s opacity ease;
    z-index: 5000;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .logo:hover {
    opacity: 0.8;
    transition: 0.25s opacity ease;
  }
  .logo-type {
    font-size: 12px;
    letter-spacing: 0.2em;
    vertical-align: super;
    padding-right: 5px;
    text-transform: uppercase;
  }
  .dot-nav {
    width: 40px;
    position: absolute;
    left: 10px;
    bottom: 0;
    z-index: 5000;
  }
  .bottom-side-anchor {
    position: absolute;
    right: -50px;
    bottom: 100px;
    width: 200px;
    height: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    z-index: 5000;
    color: color;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
  }
  .nuxt-link-active {
    color: white !important;
    transition: 0.2s color ease;
  }
</style>
