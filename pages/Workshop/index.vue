<<template>
  <section class="hero">
    
  <span><nuxt-link class="link1" to="/workshop1"><img src="~assets/AADF.jpg"></nuxt-link></span>

 <section class="hero">
  <span><nuxt-link class="link1" to="/workshop2"><img src="~assets/EHSS.jpg"></nuxt-link></span>
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
