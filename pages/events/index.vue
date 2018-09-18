<<template>
<section>
    <section class="cmyk">
  <span><nuxt-link class="link1" to="/Technical">Technical</nuxt-link></span>
</section>

<section class="skewed">
  
  <span><nuxt-link class="link2" to="/Non-Technical">Non-Tech</nuxt-link></span>
  
</section>


<section class="thin-shade">
  
  <span><nuxt-link class="link3" to="/Workshop" active-class="nuxt-link-active" >Workshops</nuxt-link></span>

</section>
</section>
</template>>


>

<style lang="scss" scoped>
a.nuxt-link-active{
  color: white;
}

section {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 80px;
 
}

span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.link1{
  color: black;
}
.link2{
  color: black;
}
.link3{
  color: #F7EB98;
}
// ----------------------------------------------------------------------

.cmyk {
  background: url(//stephy.mccdgm.net/images/patterns/lightpaperfibers.png);

}

.cmyk span {
  color: 000;
  padding-bottom: 30px;
  font-family: 'Fredoka One', sans-serif;
  text-shadow:  0.25rem -0.25rem rgba(magenta, 0.75),
               -0.25rem -0.25rem rgba(cyan, 0.75),
                0        0.5rem  rgba(yellow, 0.75);
  

}

// ----------------------------------------------------------------------

.skewed {
  background: url(//stephy.mccdgm.net/images/patterns/dark_wood.png) #2b2b2b;  
  
}

.skewed span {
  font-family: Oswald, sans-serif;
  font-size: 55px;
  text-transform: uppercase;
  padding: 30 15px; /* to extend the border past the text */
  
  margin: 40px 10px;
  background: #FFDF00;
  box-shadow: 0 0 0px 10px #FFDF00;
  border: 10px solid #fff;
  transform: rotate(-20.5deg) skew(-20.5deg);
}

// ----------------------------------------------------------------------

.thin-shade  {
  background: #89DFB8;
  font: 60px 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
  padding-top: 60x;
  margin-top: 70px;
  color: #F7EB98;
  
  text-shadow: -4px 4px 0 #89DFB8,
				      -6px 6px 0 rgba(255,255,255,0.5);
}
.thin-shade span{
  padding-top: 15px;
  padding-bottom: 15px;
  
  
}
// ----------------------------------------------------------------------

</style>
>
