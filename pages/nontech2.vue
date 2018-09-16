<<template>
    <section>
        <div class="span">
            
            <img src="~assets/5.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
      <p>mew</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta non turpis faucibus lobortis. Curabitur non eros rutrum, gravida felis non, luctus velit. Ut commodo congue velit feugiat lobortis. Etiam nec dolor quis nulla bibendum blandit vitae nec enim. Maecenas id dignissim erat. Aenean ac mi nec ante venenatis interdum quis vel lacus.
    </p>
    <p>Aliquam ligula est, aliquet et semper vitae, elementum eget dolor. In ut dui id leo tristique iaculis eget a dui. Vestibulum cursus, dolor sit amet lacinia feugiat, turpis odio auctor nisi, quis pretium dui elit at est. Pellentesque lacus risus, vulputate sed gravida eleifend, accumsan ac ante. Donec accumsan, augue eu congue condimentum, erat magna luctus diam, adipiscing bibendum sem sem non elit.</p>
    </section>
  </div>
  </div>
  <div>
  <input id="toggle1" type="checkbox" unchecked>
  <label for="toggle1">Rules</label>
  <div id="expand">
    <section>
      <p>mew</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta non turpis faucibus lobortis. Curabitur non eros rutrum, gravida felis non, luctus velit. Ut commodo congue velit feugiat lobortis. Etiam nec dolor quis nulla bibendum blandit vitae nec enim. Maecenas id dignissim erat. Aenean ac mi nec ante venenatis interdum quis vel lacus.
    </p>
    <p>Aliquam ligula est, aliquet et semper vitae, elementum eget dolor. In ut dui id leo tristique iaculis eget a dui. Vestibulum cursus, dolor sit amet lacinia feugiat, turpis odio auctor nisi, quis pretium dui elit at est. Pellentesque lacus risus, vulputate sed gravida eleifend, accumsan ac ante. Donec accumsan, augue eu congue condimentum, erat magna luctus diam, adipiscing bibendum sem sem non elit.</p>
    </section>
  </div>
  </div>
  <div>
  <input id="toggle2" type="checkbox" unchecked>
  <label for="toggle2">Contact</label>
  <div id="expand">
    <section>
      <p>mew</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta non turpis faucibus lobortis. Curabitur non eros rutrum, gravida felis non, luctus velit. Ut commodo congue velit feugiat lobortis. Etiam nec dolor quis nulla bibendum blandit vitae nec enim. Maecenas id dignissim erat. Aenean ac mi nec ante venenatis interdum quis vel lacus.
    </p>
    <p>Aliquam ligula est, aliquet et semper vitae, elementum eget dolor. In ut dui id leo tristique iaculis eget a dui. Vestibulum cursus, dolor sit amet lacinia feugiat, turpis odio auctor nisi, quis pretium dui elit at est. Pellentesque lacus risus, vulputate sed gravida eleifend, accumsan ac ante. Donec accumsan, augue eu congue condimentum, erat magna luctus diam, adipiscing bibendum sem sem non elit.</p>
    </section>
  </div>
  </div>
  </div>
  
    </section>
</template>>

<style scoped>
 
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

body {
  font-family: "Open Sans", Arial;
  background: #CCC;
  justify-content: center;
}
main {
  background: #EEE;
  width: 600px;
  margin: 20px auto;
  padding: 10px 0;
  box-shadow: 0 3px 5px rgba(0,0,0,0.3);
 
}
desc{
    display: flex;
    justify-content: center;
    align-items: center;
}
.span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;


}
h2 {
  text-align: center;
  justify-content: center;
  font-size: 25px;
}
p {
  font-size: 20px;
}
input {
  display: none;
  visibility: hidden;
}
label {
  display: flex;
  padding: 0.5em;
  text-align: center;
  border-bottom: 1px solid #CCC;
  color: #666;
  justify-content: center;
  font-size: 25px;
}
label:hover {
  color: #000;
}
label::before {
  font-family: Consolas, monaco, monospace;
  font-weight: bold;
  font-size: 15px;
  content: "+";
  vertical-align: text-top;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 3px;
  background: radial-gradient(ellipse at center #e3e3e3 50%, transparent 50%);
}
#expand {
  height: 0px;
  overflow: hidden;
  transition: height 0.5s;
  
  
}

section {
  padding: 0 20px;
}
#toggle:checked ~ #expand {
  height: 250px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 250px;
}
#toggle1:checked ~ label::before {
  content: "-";
}
#toggle2:checked ~ #expand {
  height: 250px;
}
#toggle2:checked ~ label::before {
  content: "-";
}

</style>
>