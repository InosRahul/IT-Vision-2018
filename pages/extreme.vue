<<template>
    <section>
        <div class="span">
            
            <img src="~assets/xter.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
      <p>
      Face the ultimate extremities using your mind, phyiscal strength and luck.
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
            <p><b>Round 1 - Climb your mind</b><i></i></br>
              This round would be a pen paper based test. You would be given ruiddles, mysteries, IQ questions that are to be solved in given amount of time.</br>
              <b>Round 2 – Conquer your kingdom</b><i></i></br>
              This round would be based on physical task. The participants would be divided into a group's of 3-4 and would have to complete a series of tasks, judging criteria would be time based.</br>
              <b>Round 3- Survive the Ultimate</b><i></i><br>
               Surprise Round (Based on Luck, Mental ability and Physical Strength.)</br>
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
      <li>Priten Padhiyar: +917405915465
         </li>
         <li>Sanket: +918980566348
         </li>

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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;
}
ol{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
li{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
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
  height: 100px;
}
#toggle2:checked ~ label::before {
  content: "-";
}
@media only screen and (max-width: 420px){
  #toggle:checked ~ #expand {
  height: 100px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 630px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 375px){
  #toggle:checked ~ #expand {
  height: 100px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 700px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 330px){
  #toggle:checked ~ #expand {
  height: 150px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 870px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}

</style>
>
