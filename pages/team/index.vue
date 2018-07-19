</<template>
    <div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="header">
            
             
               <div class="avatar">
                 <div class="circle">
                
              <img src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
     xml:space="preserve">  
    <circle cx="50" cy="50" r="40" />
  </svg>
                
             
                 </div>
            </div>
          </div>
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h1 class="username">Helen Miller</h1>
              <h2 class="position">Accountant</h2>
            </div>
           </div>
        
           <div class="column">
               <div class="card">
          <div class="header">
            
             
               <div class="avatar">
                 <div class="circle">
                
              <img src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
     xml:space="preserve">  
    <circle cx="50" cy="50" r="40" />
  </svg>
                
             
                 </div>
            </div>
          </div>
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h1 class="username">Helen Miller</h1>
              <h2 class="position">Accountant</h2>
            </div>
           </div>
           
        </div>
    </div>
    </div>
    </div> 
    </div>
    </div>
    </div>
</div>
</template>
>

<style lang="scss" scoped>
body {
  background: #bdc3c7;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.circle {
  position: relative;
  width: 185px;
  height: 100%;
  
}
.circle svg {
  fill: none;
  stroke: #8a3ab9;
  stroke-linecap: round;
  stroke-width: 3;
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: stroke-draw 6s ease-out infinite alternate;
}
.circle img {
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 145px;
  height:150px;
  border-radius: 50%;
}
@keyframes stroke-draw {
  from {
    stroke: #8a3ab9;
    stroke-dasharray: 1;
  }
  to {
    stroke: #cd486b;
    transform: rotate(180deg);
    stroke-dasharray: 8;
  }
}
$primary: #7F00FF;
$secondary: #00D1B2;
$section: #ededed;
$muted: #999;

body {
  position: relative;
  height: 100%;
  width: 100%;
}

.columns {
  margin-top: 0;
}
 .card-body {
      padding: 30px;
      .user-meta {
        padding-top: 20px;
        .username {
          font-size: 18px;
          font-weight: 600;
        }
        .position {
          font-size: 90%;
          color: $primary;
        }
      }
    }
    .user-bio {
      padding-top: 8px;
      font-size: 92%;
      color: $muted;
    }
    .action {
      padding-top: 20px;
      .button {
        padding: 16px 20px 16px 20px;
        background: $primary;
        border-color: $primary;
        color: white;
        border-radius: 100px;
        transition: opacity .3s;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  .section {
  background-color: $section;
  min-height: 100vh;
  position: relative;
}
.card {
    border-radius: 6px;
    overflow:hidden;
    max-width: 300px;
    max-height: 380px;
    margin: 0 auto;
}
 .header {
      height: 150px;
      background: white;
}
.avatar {
        width: 65%;
        
        position: relative;
        margin: 0 auto;
}


</style>
>