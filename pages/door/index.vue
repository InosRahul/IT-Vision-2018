<<template>
<section>
    <div class="main">
 <!--
  <div class="__content">
    <div class="card"></div>
  </div>
-->
  
  <input type="checkbox" name="hidden-input" class="hidden-input" id="hidden-input">
  <label for="hidden-input" class="wrap">
    <div class="outer animate-3">
      <div class="inner animate-2">
        <div class="within animate-1">
           <nuxt-link class="navbar-item" target="_blank" to="/" style="font-size: 16px; color:green">Launch Vision</nuxt-link>
          
          
          
           
        </div>
         
      </div>
    </div>
  </label>
 
</div>
<section>
 <div>
   
    <no-ssr>
      <flip-countdown deadline="2018-09-20 11:45:00"></flip-countdown>
      
    </no-ssr>
    
  </div>
  
</section>

</section>
</template>>

<style lang="scss" scoped>
//default font ( sans-serif )
@import url('https://fonts.googleapis.com/css?family=Montserrat');

//fancy thick display font ( cursive )
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');

//fancy thin cursive font ( cursive )
@import url('https://fonts.googleapis.com/css?family=Tangerine');

//monospace font ( monospace )
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

//last `fa fa-icon` version fontawesome
//@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

//latest version of FA. it uses `fa, far, fab, fas` for different styling, also redid ~100 icon names. 
@import url('https://use.fontawesome.com/releases/v5.0.4/css/all.css');

//@import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css");


//basic colors
$white: #fff;
$black: #000;

// flatUI colors
$midnight:    #2c3e50;
$asphalt:     #34495e;
$bulma-black: #4a4a4a;
$asbestos:    #7f8c8d;
$concrete:    #95a5a6;
$silver:      #bdc3c7;
$clouds:      #ecf0f1;
$emerald:     #2ecc71;
$nephritis:   #27ae60;
$turquoise:   #1abc9c;
$greensea:    #16a085;
$amethyst:    #9b59b6;
$wisteria:    #8e44ad;
$sunflower:   #f1c40f;
$orange:      #f39c12;
$carrot:      #e67e22;
$pumpkin:     #d35400;
$alizarin:    #e74c3c;
$pomegranate: #c0392b;
$river:       #3498db;
$belize:      #2980b9;

// aggie colors
$aggieblue:        #036;
$aggiesilver:      #a4aeb5;
$aggieblue-dark:   #0f2439;
$aggieblue-faded:  #2e4676;
$aggieblue-light:  #2472b5;

//bulma overrides
$primary:             $aggieblue-dark;
$primary-faded:       $aggieblue-faded;
$primary-transparent: transparentize($primary, .9);

//MDL box-shadows
$shadow-1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
$shadow-2: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
$shadow-3: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
$shadow-4: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
$shadow-5: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

//testing color
$test-color: transparentize($wisteria, .9);

@mixin sticky {
  position: sticky;
  top: 0;
  z-index: 3;
}



//@include animate; anywhere for animation
@mixin animate {
  transition: all 0.15s ease-in-out;
}

@mixin custom-scroll($hover:false) {
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255,255,255,.05);
    border-radius: 0 0 2px;
  }

  @if $hover == on-hover {
    @include animate;
    &:hover::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: rgba(0,0,0,.25);
      margin-right: 2px;
    }
  } @else {
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: rgba(0,0,0,.25);
      margin-right: 2px;
    }
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(0,0,0,0.4);
  }
}

// bulma overrides
@mixin button-word-wrap {
  height: initial;
  white-space: initial;
}

//resetting body for a cleaner setup
body * {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

//always animate FontAwesome icons
.fa {
  @include animate();
}

////////////////////////////////////////////////////////



body .main {
  opacity: 1;
}

.menu-list a.is-active {
  background-color: $aggieblue-dark;
  color: $white;
}



//////////////////////////////////////////////////////////


/*
███    ███  █████  ██ ███    ██
████  ████ ██   ██ ██ ████   ██
██ ████ ██ ███████ ██ ██ ██  ██
██  ██  ██ ██   ██ ██ ██  ██ ██
██      ██ ██   ██ ██ ██   ████
*/




html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 1rem;
}

.main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
}

// .__content {
//   padding: 3rem 6rem;
//   display:flex;
//   flex-grow: 1;
//   background-color: $clouds;

//   .card {
//     flex-grow: 1;
//     box-shadow: $shadow-2;
//     background-color: $white;

//     .level.card-header {
//       background: $aggiesilver;
//       color: $clouds;
//       padding: 1rem;
//     }
//   }
// }


///////////////////////////////////////

$green: $nephritis;
$red: #f70048;

.main {
  background: #CCC;
  
  color: $red;
  align-items: center;
  justify-content: center;
  
  .within {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 12rem;
    min-width: 12rem;
    
    i {
      position: absolute;
      opacity: 0;
      font-size: 2rem;
    }
  }
  
  .hidden-input {
    display: none;
  }
  
  input[type=checkbox].hidden-input + label.wrap {
    @include animate;
    cursor: pointer;
    opacity: 0.8;
    border-radius: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    
    div {
      @include animate;
      margin: 0.25rem;
      border-radius: 100%;
      padding: 0.75rem;
      border: 1rem dashed $red;
      height: initial;
      
      &.animate-1{
        border-color: darken($red, 20%);
      }
      &.animate-2{
        border-color: darken($red, 30%);
      }
      &.animate-3 {
        border-style: solid;
        border-width: 0.5rem;
      }
    }
     
    &:before {
      @include animate;
      position: absolute;
      content: 'whatshot';
      display: flex;     
      height: 100%;
      width: 200%;
      border-radius: 100%;
      background: $red;
      filter: blur(20px);
      opacity: 0;
    }
    
    &:hover {
      opacity: 1;
      
      &:before {
        opacity: 0.05;
      }
    }
    
    .fa-circle {
      @include animate;
      color: $red;
      opacity: 1;
    }
  }
  input[type=checkbox].hidden-input:not(checked) + label.wrap {
    div {
      .animate-0{
        animation: bounce4 0.3s;
      }
      &.animate-1{
        animation: bounce5 0.3s;
      }
      &.animate-2{
        animation: bounce6 0.3s;
      }
    }
  }
  input[type=checkbox].hidden-input:checked + label.wrap {
    div {
      border-color: $green;
      height: initial;
      transform: rotate(360deg);
      
      .animate-0{
        animation: bounce0 0.3s;
      }
      &.animate-1{
        animation: bounce1 0.3s;
        border-color: darken($green, 20%);
      }
      &.animate-2{
        animation: bounce2 0.3s;
        border-color: darken($green, 30%);
      }
    }
    
    &:before {
      background: $green;
    }
    .fa-ban {
      @include animate;
      color: $green;
      opacity: 1;
    }
    .fa-circle {
      opacity: 0;
    }
  }
  
}

@keyframes bounce0 {
  0%, 100%{
    transform: scale(1);
  }
  33%{
    transform: scale(0.9);
  }
}
@keyframes bounce1 {
  0%, 100%{
    transform: scale(1);
  }
  66%{
    transform: scale(0.9);
  }
}
@keyframes bounce2 {
  0%, 100%{
    transform: scale(1);
  }
  99%{
    transform: scale(0.9);
  }
}

@keyframes bounce4 {
  0%, 100%{
    transform: scale(1);
  }
  33%{
    transform: scale(0.9);
  }
}
@keyframes bounce5 {
  0%, 100%{
    transform: scale(1);
  }
  66%{
    transform: scale(0.9);
  }
}
@keyframes bounce6 {
  0%, 100%{
    transform: scale(1);
  }
  99%{
    transform: scale(0.9);
  }
}

</style>
>
<script>
  import FlipCountdown from 'vue2-flip-countdown'

  export default {
      components: { FlipCountdown }
  }
</script>
<style scoped>
bt1{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  padding-top: 10px;
  

}
</style>
>