<<template>
  <section class="hero is-fullheight">
    <div class="container">
  <div class="neon">IT Vision</div>
  <div class="flux">2018 </div>
  
</div>
<section>
  <span><img src="~static/icon.png"></span>
  </section>
<section>
  <div class="bt1">
<nuxt-link class="button--green" to="/events">Explore Events</nuxt-link>
</div>
</section>
    </section>
</template>>

<style scoped>
html,
body {
  margin: 5px;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: black;
}
.hero{
  background-color: black;
}
.bt1{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  margin-bottom: 50px;

}
span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-top: 20px;

}


@font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

.container {
  display: table;
  text-align: center;
  vertical-align: middle;
  padding-top: 15px;
  
  margin-top: 10px;
  
}

.neon {
  font-family: neon;
  color: #FB4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #F40A35;
}

.flux {
  font-family: neon;
  color: #426DFB;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356FF;
}

.neon {
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

.flux {
  animation: flux 2s linear infinite;
  -moz-animation: flux 2s linear infinite;
  -webkit-animation: flux 2s linear infinite;
  -o-animation: flux 2s linear infinite;
}

@keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}

@keyframes yourAnimation{
    0%{
        transform: rotate(xx) scale(0.2);
        opacity: 0;
        }
    100%{
        transform: scale(1) translateX(0) skewX(0);
        opacity: 1;
        }
}

.span{
    animation: yourAnimation 3s forwards 0s linear;
}
</style>
>