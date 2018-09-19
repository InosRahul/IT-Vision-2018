<<template>
    <section>
        <div class="span">
            
            <img src="~assets/EHSS.jpg" style="width=100%; height=100%;">
        </div>
        <div>
         
  <input id="toggle" type="checkbox" checked>
  <label for="toggle">About</label>
  <div id="expand">
    <section>
         <p>
        Session 1 (10:00 am - 12:30 pm)
        <ol>
          <li>How to secure your Email accounts ( Gmail , company email )</li>
          	<li>How to secure your Social networking accounts</li>
	<li>How to know/investigate if someone has hacked your Computer.</li>
	<li>How to secure your Company data.</li>
	<li>Mobile Hacking & security ( Live mobile hacking demos )</li>
	<li>How to detect key loggers , malwares or Trojan in PC</li>
	<li>Net banking security tips</li>
	<li>How to detect Phishing attacks</li>
	<li>Data recovery</li>

          </ol>
        Session 2 (1:00 pm - 3:00 pm)
        <ol>
          
          <li>	Cyber Warfare</li>
	<li>Office network security</li>
<li>	Backups: Mobile, Email accounts</li>
<li>	How to secure your WI-FI</li>
	<li>Creating Virtual Machines (for safer netbanking)</li>
	<li>How to securely use Drop box & Google drive</li>
	<li>Basic guidance on cyber crime incident handling</li>
	<li>How to file cyber complains & preserve evidence.</li>
	<li>Any other topics if time permits.</li>
 <li> Conclusion</li>
  

          </ol>
        </p>
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
  font-weight: 600
}
li{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  font-weight: 400;
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
  height: 630px;
  margin-right: 5px;
  padding-left: 10px;
}
#toggle:checked ~ label::before {
  content: "-";
}
#toggle1:checked ~ #expand {
  height: 180px;
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
  height: 950px;
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
  height: 1150px;
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
  height: 1250px;
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
#toggle2:checked ~ #expand {
  height: 150px;
}
#toggle2:checked ~ label::before {
  content: "-";
}

}
</style>
>