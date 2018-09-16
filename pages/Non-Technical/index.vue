<<template>
  <section class="hero">
    
  <span><nuxt-link class="link1" to="/nontech1"><img src="~assets/4.jpg"></nuxt-link></span>

 <section class="hero">
  <span><nuxt-link class="link1" to="/nontech2"><img src="~assets/5.jpg"></nuxt-link></span>
</section>
 <section class="hero">
  <span><nuxt-link class="link1" to="/nontech3"><img src="~assets/6.jpg"></nuxt-link></span>
</section>
</section>

</template>>
<style lang="scss" scoped>

section {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 80px;

}
.hero{
  background-image: url(~assets/teambg.jpg);
}

span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}



</style>