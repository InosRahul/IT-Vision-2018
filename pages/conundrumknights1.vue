<<template>
    <section>
        <div class="span">
            
            <img src="~assets/3.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
         <p>
             With the flicker of technology and roller coaster of fun unleash the nerd within you into this epic battleground of puzzles & codes.
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
              <li>There will be 3 rounds in the game.</li>
              <li>For the last round mobile phones are required (Android is preferable)</li>
              <li>The decisions made by the event head will be final and binding.</li>
              <li>Any violations in the rules will result in disqualification</li>
              <li>Basic knowledge of C is required for the 3rd round.</li></br>
              <p><b>Round 1 -</b><i>Jumble jet</i></br>
               This round is based on basic formulas that are in jumbled forms that the participants need to arrange in order.</br>
                <b>Round 2 –</b><i>Battle-ship</i></br>
                This round is Bingo-Quiz based. So answer the questions and release your battleships.</br>
                <b>Round 3-</b><i>App-G</i><br>
                This is a skill-based round. Show your programming skills and get your Chicken Dinner.</br>
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
li{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
ol{
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
  height: 330px;
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
  height: 120px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 650px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 375px){
  #toggle:checked ~ #expand {
  height: 150px;
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
  height: 180px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 770px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
</style>
>