<<template>
    <section>
        <div class="span">
            
            <img src="~assets/6.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
      <p>
        Wisdom begins in Wonder.
        </p>
      </section>
  </div>
  </div>
  <div>
  <input id="toggle1" type="checkbox" unchecked>
  <label for="toggle1">Rules</label>
  <div id="expand">
    <section>
      <ol>
            <li>Participants must be on time.</li>
            <li>Vulgar and unruly behavior will not be tolerated.</li>
            <li>Elimination is based on judging criteria.</li></br>
            <p><b>Round 1 - Car-Tunes</b><i></i></br>
              Listen to the song/tune and guess the cartoon character.</br>
              <b>Round 2 – BBS</b><i></i></br>
              In this round each member will be provided with a list of items. The members can Beg, Borrow or Steal the items from the college campus that are given in the list.</br>
              <b>Round 3- Last Race</b><i></i><br>
               In this round, players will be divided into team of 2. There will be fun games like sack race, obstacles which will make you nostalgic.</br>
            </p>
          </ol>
      </section>
  </div>
  </div>
  <div>
  <input id="toggle2" type="checkbox" unchecked>
  <label for="toggle2">Contact</label>
  <div id="expand">
    <section>
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
ol{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
li{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  height: 50px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 350px;
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
@media only screen and (max-width: 420px){
  #toggle:checked ~ #expand {
  height: 50px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 550px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 375px){
  #toggle:checked ~ #expand {
  height: 50px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 660px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 330px){
  #toggle:checked ~ #expand {
  height: 60px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 720px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}

</style>
>