<<template>

  <section class="hero">
    
  <span><nuxt-link class="link1" to="/tech1"><img src="~assets/1.jpg"></nuxt-link></span>

 <section class="hero">
  <span><nuxt-link class="link1" to="/tech2"><img src="~assets/2.jpg"></nuxt-link></span>
</section>
 <section class="hero">
  <span><nuxt-link class="link1" to="/tech3"><img src="~assets/3.jpg"></nuxt-link></span>
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

