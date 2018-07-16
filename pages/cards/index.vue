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
      </div>
    </div>
    <div class="columns">

      <div class="column">
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
body {
  position: relative;
  height: 100%;
  width: 100%;
}

.columns {
  margin-top: 0;
}

.section {
  background-color: #ededed;
  min-height: 100vh;
  position: relative;
}
.section .card {
  border-radius: 6px;
  overflow: hidden;
  max-width: 300px;
  max-height: 380px;
  margin: 0 auto;
}
.section .card .header {
  height: 120px;
  background: #7F00FF;
}
.section .card .header .avatar {
  width: 80px;
  height: 100%;
  position: relative;
  margin: 0 auto;
}
.section .card .header .avatar img {
  display: block;
  border-radius: 50%;
  position: absolute;
  bottom: -42px;
  border: 4px solid white;
}
.section .card .card-body {
  padding: 30px;
}
.section .card .card-body .user-meta {
  padding-top: 20px;
}
.section .card .card-body .user-meta .username {
  font-size: 18px;
  font-weight: 600;
}
.section .card .card-body .user-meta .position {
  font-size: 90%;
  color: #7F00FF;
}
.section .card .user-bio {
  padding-top: 8px;
  font-size: 92%;
  color: #999;
}
.section .card .action {
  padding-top: 20px;
}
.section .card .action .button {
  padding: 16px 20px 16px 20px;
  background: #7F00FF;
  border-color: #7F00FF;
  color: white;
  border-radius: 100px;
  transition: opacity .3s;
}
.section .card .action .button:hover {
  opacity: 0.7;
}

.link-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #7F00FF;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s;
}
.link-button img {
  width: 32px;
  height: 32px;
  display: block;
}
.link-button:hover {
  transform: scale(1.1) rotate(180deg);
  background: #00D1B2;
}
.bookmark article {
  margin: 1rem 0;
}
.bookmark h2 {
  color: #363636;
}


</style>
>