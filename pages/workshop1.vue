<<template>
    <section>
        <div class="span">
            
            <img src="~assets/AADFF.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
        <p>
        <li> Latest trends in Android app development.</li>
        <li>Learn from certified Google Android Developer.</li>
        <li> Make your own Android application live in the workshop.</li>
        <li>Get hands on experience with differnet types of apps.</li>
        <li> Pioneers in Skill Based Training.</li>
        <li> More than 3 years of Industry experience.</li>
        <li>   Wide range of interactive training methodologies.</li>
                  
        </p>
      </section>
  </div>
  </div>
  <div>
  <input id="toggle1" type="checkbox" unchecked>
  <label for="toggle1">Profile</label>
  <div id="expand">
    <section>
         <p>Sachin Dedhia is an independent Cyber Crime Investigator & also a Certified Ethical Hacker
          (EC-Council,USA). Since many years he is working as a Cyber Crime Investigator and also as a
          security expert for IT companies, Govt depts., Corporate’s & even individuals.
          He has also provided trainings to Navi Mumbai cyber cell department & also assists the
          Cyber Cell Departments of Mumbai Police with respect to their queries.
          Since past few years, he has been successfully conducting various seminars & workshops
          across numerous Schools, covered almost all the Colleges in Mumbai, Mumbai University,
          various chartered accountants study circle meeting, Rotary clubs,hostipals & even Govt
          depts.</p>
        <p>Successfully conducted over 500 seminars & workshops across India, & enlightened over
          10,000 participants</p>
     </section>
  </div>
  </div>
  <div>
  <input id="toggle2" type="checkbox" unchecked>
  <label for="toggle2">Contact</label>
  <div id="expand">
    <section>
       <li>Sachin Devdhar: +917574832178</li>
      <li>Rahul Soni: +919638004084</li>
     </section>
  </div>
  </div>
  </div>
  
    </section>
</template>>

<style scoped>
 
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
  background: grey;
  justify-content: center;
}
main {
  background: gray;
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
  font-weight: 600;
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
li{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 20px;
}

section {
  padding: 0 20px;
  background-color: #e3e3e3;
}
#toggle:checked ~ #expand {
  height:180px;
  margin-right: 5px;
  padding-left: 10px;
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
  height: 100px;
}
#toggle2:checked ~ label::before {
  content: "-";
}
@media only screen and (max-width: 420px){
  #toggle:checked ~ #expand {
  height: 450px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 800px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 375px){
  #toggle:checked ~ #expand {
  height: 450px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 820px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
@media only screen and (max-width: 330px){
  #toggle:checked ~ #expand {
  height: 550px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 1110px;
}
#toggle1:checked ~ label::before {
  content: "-";
}

}
</style>
>