</<template>
<section>
 <div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <div class="header">
            <div class="avatar">
              <img src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
            </div>
          </div>
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h3 class="username">Helen Miller</h3>
              <h5 class="position">Accountant</h5>
            </div>
            <div class="user-bio has-text-centered">
              <p>Helen Miller is an accountant at the Acme Inc comany. She works very hard.</p>
            </div>
            <div class="action has-text-centered">
              <a href="#" class="button is-small">View profile</a>
            </div>
          </div>
        </div>
        <div class="column">
        <div class="card">
          <div class="header">
            <div class="avatar">
              <div class="story">
              <img src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
                  <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"/>
                   </svg>
                      </div>
              
            </div>
          </div>
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h3 class="username">Helen Miller</h3>
              <h5 class="position">Accountant</h5>
            </div>
            <div class="user-bio has-text-centered">
              <p>Helen Miller is an accountant at the Acme Inc comany. She works very hard.</p>
            </div>
            <div class="action has-text-centered">
              <a href="#" class="button is-small">View profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">

      <div class="column">
        <div class="card">
          <div class="header">
            
              <div class="story">
               <img src="https://goo.gl/zYrXX3" alt="">
                  <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"/>
                   </svg>
                      </div>
              
                
              </div>  
            
          
          <div class="card-body">
            <div class="user-meta has-text-centered">
              <h3 class="username">Helen Miller</h3>
              <h5 class="position">Accountant</h5>
            </div>
            
          </div>
        </div>
        <div class="column">
         
            
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <a href="https://cssninja.io" class="link-button">
    <img src="https://image.ibb.co/dR3ZRm/cssninja_icon_white.png">
  </a>
</div>
</section>
</template>
>

<style lang="scss" scoped>
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

.section {
  background-color: $section;
  min-height: 100vh;
  position: relative;
  .card {
    border-radius: 6px;
    overflow:hidden;
    max-width: 300px;
    max-height: 380px;
    margin: 0 auto;
    .header {
      height: 120px;
      background: #e3e3e3;
      .avatar {
        width: 80px;
        height: 100%;
        position: relative;
        margin: 0 auto;
        img {
          display: block;
          border-radius: 50%;
          position: absolute;
          bottom: -42px;
          border: 4px;
        }
      }
    }
    .card-body {
      padding: 30px;
      .user-meta {
        padding-top: 20px;
        .username {
          font-size: 26px;
          font-weight: 600;
        }
        .position {
          font-size: 24;
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
  }
}

//Css Ninja link
.link-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $primary;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s;
  img {
    width: 32px;
    height: 32px;
    display: block;
  }
  &:hover {
    transform: scale(1.1) rotate(180deg);
    background: $secondary;
  }
}
.story {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100px;
  height:100px;
  overflow:hidden;
}
.story img {
  width:70px;
  border-radius:50%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.story svg {
  fill:none;
  stroke:#8a3ab8;
  stroke-width:3px;
  stroke-dasharray:1;
  stroke-dashoffset:0;
  stroke-linecap:round;
  animation:loading 3000ms infinite alternate;
}
@keyframes loading {
  100% {
    stroke:#cd476b;
    stroke-dasharray:10;
    transform:rotate(180 deg);
  }
}


</style>
>