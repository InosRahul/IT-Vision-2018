<template>
  <section>
    <div class="hero">
    <div class="container">
    <div>
      <logo/>
     <div class="center">
  <h1 class="center__text glitch is-glitching" data-text="Welcome">IT Vision 2018</h1>
</div>
      </div>
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
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 400;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 0px;
}
.links
{
  padding-top: 5px;
  background-color: #e3e3e3;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.container1
{
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  
  
  background-color: #e2e2e2;
}
.container2
{
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  
  background-color: #e3e3e3;
}
</style>

<style lang="scss" scoped>
.center {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: {
    color:black;
 
    repeat: no-repeat;
    position: center;
    size: cover;
  }
}

.center__text {
  margin: auto;
  font-family: 'Montserrat', 'Montserrat';
  font-size: 120px;
  text-transform: uppercase;
}

.glitch {
  position: relative;
  color: white;
  mix-blend-mode: lighten;

  &:before,
  &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      background: black;
      clip: rect(0, 0, 0, 0);
  }
  
  &:before {
      left: -1px;
      text-shadow: 1px 0 rgba(red,0.7);
  }

  &:after {
      left: 1px;
      text-shadow: -1px 0 rgba(blue,0.7);
  }

  &:hover {
    &:before {
      text-shadow: 4px 0 rgba(red,0.7);
      animation: glitch-loop-1 1.8s infinite ease-in-out alternate-reverse;
    }
    &:after {
      text-shadow: -5px 0 rgba(blue,0.7);
      animation: glitch-loop-2 1.8s infinite ease-in-out alternate-reverse;
    }
  }
}

@keyframes glitch-loop-1 {
  0% { clip: rect(36px, 9999px, 9px, 0) }
  25% { clip: rect(25px, 9999px, 99px, 0) }
  50% { clip: rect(50px, 9999px, 102px, 0) }
  75% { clip: rect(30px, 9999px, 92px, 0) }
  100% { clip: rect(91px, 9999px, 98px, 0) }
}

@keyframes glitch-loop-2 {
  0% { top: -1px; left: 1px; clip: rect(65px, 9999px, 119px, 0) }
  25% { top: -6px; left: 4px; clip: rect(79px, 9999px, 19px, 0) }
  50% { top: -3px; left: 2px; clip: rect(68px, 9999px, 11px, 0) }
  75% { top: 0px; left: -4px; clip: rect(95px, 9999px, 53px, 0) }
  100% { top: -1px; left: -1px; clip: rect(31px, 9999px, 149px, 0) }
}


</style>
>