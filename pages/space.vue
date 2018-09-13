<<template>
<section>
     <div class="hero">
   

    <div class="vieww">
        <div class="plane maine">
     <div class="circlee"></div>
    <div class="circlee"></div>
    <div class="circlee"></div>
    <div class="circlee"></div>
    <div class="circlee"></div>
    <div class="circlee"></div>
  </div>

</div>


<section>
<div class="wrapper">
  <div class="bottom"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
  <div class="circl"></div>
</div>
</section>
<section>
     <div class="center">
  <h1 class="center__text glitch is-glitching" data-text="Welcome">IT Vision 2018</h1>
</div>
</section>
</div>
</section>
</template>>

<style scoped>
html, body {
  background: #222;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.vieww {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-perspective: 400;
          perspective: 400;
}

.plane {
  width: 120px;
  height: 120px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}
.plane.maine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -webkit-transform: rotateX(60deg) rotateZ(-30deg);
          transform: rotateX(60deg) rotateZ(-30deg);
  -webkit-animation: rotate 20s infinite linear;
          animation: rotate 20s infinite linear;
}
.plane.maine .circlee {
  width: 120px;
  height: 120px;
  position: absolute;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 60px crimson, inset 0 0 60px crimson;
}
.plane.maine .circlee::before, .plane.maine .circlee::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 10%;
  height: 10%;
  border-radius: 100%;
  background: crimson;
  box-sizing: border-box;
  box-shadow: 0 0 60px 2px crimson;
}
.plane.maine .circlee::before {
  -webkit-transform: translateZ(-90px);
          transform: translateZ(-90px);
}
.plane.maine .circlee::after {
  -webkit-transform: translateZ(90px);
          transform: translateZ(90px);
}
.plane.maine .circlee:nth-child(1) {
  -webkit-transform: rotateZ(72deg) rotateX(63.435deg);
          transform: rotateZ(72deg) rotateX(63.435deg);
}
.plane.maine .circlee:nth-child(2) {
  -webkit-transform: rotateZ(144deg) rotateX(63.435deg);
          transform: rotateZ(144deg) rotateX(63.435deg);
}
.plane.maine .circlee:nth-child(3) {
  -webkit-transform: rotateZ(216deg) rotateX(63.435deg);
          transform: rotateZ(216deg) rotateX(63.435deg);
}
.plane.maine .circlee:nth-child(4) {
  -webkit-transform: rotateZ(288deg) rotateX(63.435deg);
          transform: rotateZ(288deg) rotateX(63.435deg);
}
.plane.maine .circlee:nth-child(5) {
  -webkit-transform: rotateZ(360deg) rotateX(63.435deg);
          transform: rotateZ(360deg) rotateX(63.435deg);
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
            transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
            transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}


</style>
>




>

<style scoped>
html, body {
  background: #111;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.wrapper {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 20;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.bottom, .circl {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  border-radius: 100%;
  border: 2px dashed LIGHTSLATEBLUE;
  -webkit-transform: rotateX(60deg) translateZ(0) scale(5);
          transform: rotateX(60deg) translateZ(0) scale(5);
  padding: 25px;
}

.circl {
  background-color: rgba(72, 61, 139, 0.2);
  background-clip: content-box;
  
  -webkit-animation: move 10s infinite;
          animation: move 10s infinite;
}
.circl:nth-child(1) {
  -webkit-animation-delay: -0.3333333333s;
          animation-delay: -0.3333333333s;
}
.circl:nth-child(2) {
  -webkit-animation-delay: -0.6666666667s;
          animation-delay: -0.6666666667s;
}
.circl:nth-child(3) {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.circl:nth-child(4) {
  -webkit-animation-delay: -1.3333333333s;
          animation-delay: -1.3333333333s;
}
.circl:nth-child(5) {
  -webkit-animation-delay: -1.6666666667s;
          animation-delay: -1.6666666667s;
}
.circl:nth-child(6) {
  -webkit-animation-delay: -2s;
          animation-delay: -2s;
}
.circl:nth-child(7) {
  -webkit-animation-delay: -2.3333333333s;
          animation-delay: -2.3333333333s;
}
.circl:nth-child(8) {
  -webkit-animation-delay: -2.6666666667s;
          animation-delay: -2.6666666667s;
}
.circl:nth-child(9) {
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
}
.circl:nth-child(10) {
  -webkit-animation-delay: -3.3333333333s;
          animation-delay: -3.3333333333s;
}
.circl:nth-child(11) {
  -webkit-animation-delay: -3.6666666667s;
          animation-delay: -3.6666666667s;
}
.circl:nth-child(12) {
  -webkit-animation-delay: -4s;
          animation-delay: -4s;
}
.circl:nth-child(13) {
  -webkit-animation-delay: -4.3333333333s;
          animation-delay: -4.3333333333s;
}
.circl:nth-child(14) {
  -webkit-animation-delay: -4.6666666667s;
          animation-delay: -4.6666666667s;
}
.circl:nth-child(15) {
  -webkit-animation-delay: -5s;
          animation-delay: -5s;
}
.circl:nth-child(16) {
  -webkit-animation-delay: -5.3333333333s;
          animation-delay: -5.3333333333s;
}
.circl:nth-child(17) {
  -webkit-animation-delay: -5.6666666667s;
          animation-delay: -5.6666666667s;
}
.circl:nth-child(18) {
  -webkit-animation-delay: -6s;
          animation-delay: -6s;
}
.circl:nth-child(19) {
  -webkit-animation-delay: -6.3333333333s;
          animation-delay: -6.3333333333s;
}
.circl:nth-child(20) {
  -webkit-animation-delay: -6.6666666667s;
          animation-delay: -6.6666666667s;
}
.circl:nth-child(21) {
  -webkit-animation-delay: -7s;
          animation-delay: -7s;
}
.circl:nth-child(22) {
  -webkit-animation-delay: -7.3333333333s;
          animation-delay: -7.3333333333s;
}
.circl:nth-child(23) {
  -webkit-animation-delay: -7.6666666667s;
          animation-delay: -7.6666666667s;
}
.circl:nth-child(24) {
  -webkit-animation-delay: -8s;
          animation-delay: -8s;
}
.circl:nth-child(25) {
  -webkit-animation-delay: -8.3333333333s;
          animation-delay: -8.3333333333s;
}
.circl:nth-child(26) {
  -webkit-animation-delay: -8.6666666667s;
          animation-delay: -8.6666666667s;
}
.circl:nth-child(27) {
  -webkit-animation-delay: -9s;
          animation-delay: -9s;
}
.circl:nth-child(28) {
  -webkit-animation-delay: -9.3333333333s;
          animation-delay: -9.3333333333s;
}
.circl:nth-child(29) {
  -webkit-animation-delay: -9.6666666667s;
          animation-delay: -9.6666666667s;
}
.circl:nth-child(30) {
  -webkit-animation-delay: -10s;
          animation-delay: -10s;
}
.circl:nth-child(31) {
  -webkit-animation-delay: -10.3333333333s;
          animation-delay: -10.3333333333s;
}

@-webkit-keyframes move {
  from {
    -webkit-transform: rotateX(60deg) translateZ(200px) scale(0.01) rotateZ(0deg);
            transform: rotateX(60deg) translateZ(200px) scale(0.01) rotateZ(0deg);
  }
  75% {
    -webkit-transform: rotateX(60deg) translateZ(-20px) scale(0.5) rotateZ(-180deg);
            transform: rotateX(60deg) translateZ(-20px) scale(0.5) rotateZ(-180deg);
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: rotateX(60deg) translateZ(0) scale(1) rotateZ(360deg);
            transform: rotateX(60deg) translateZ(0) scale(1) rotateZ(360deg);
  }
}

@keyframes move {
  from {
    -webkit-transform: rotateX(60deg) translateZ(200px) scale(0.01) rotateZ(0deg);
            transform: rotateX(60deg) translateZ(200px) scale(0.01) rotateZ(0deg);
  }
  75% {
    -webkit-transform: rotateX(60deg) translateZ(-20px) scale(0.5) rotateZ(-180deg);
            transform: rotateX(60deg) translateZ(-20px) scale(0.5) rotateZ(-180deg);
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: rotateX(60deg) translateZ(0) scale(1) rotateZ(360deg);
            transform: rotateX(60deg) translateZ(0) scale(1) rotateZ(360deg);
  }
}

</style>
>
>
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