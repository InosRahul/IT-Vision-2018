<<template>
   <section>
                    <!-- Content wrapper -->
                    <div class="content-wrapper is-large">
                        <div class="columns is-vcentered">
        
                            <div class="column is-hidden-mobile"></div>
        
                            <!-- Team member -->
                            <div class="column is-3">
                                <div class="team-member-container">
                                    <!-- Card -->
                                    <div class="dark-card">
                                        <!-- Avatar wrapper -->
                                        <div class="avatar">
                                            <!-- Svg circle -->
                                            <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Track -->
                                                <circle class="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <!-- Stroke -->
                                                <circle class="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <!-- Sketeched face -->
                                            <!-- Real face -->
                                            <img class="is-real" src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
                                        </div>
                                        <!-- Member meta -->
                                        <div class="member-info">
                                            <h4 class="title is-light is-6 is-tight">John Cambell</h4>
                                            <div class="position">Founder / Ceo</div>
                                            <p class="description">John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="column is-3">
                                <div class="team-member-container">
                                    <!-- Card -->
                                    <div class="dark-card">
                                        <!-- Avatar wrapper -->
                                        <div class="avatar">
                                            <!-- Svg circle -->
                                            <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <!-- Track -->
                                                <circle class="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <!-- Stroke -->
                                                <circle class="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <!-- Sketeched face -->
                                            <!-- Real face -->
                                            <img class="is-real" src="https://image.ibb.co/fa2YRF/dounia.jpg" alt="">
                                        </div>
                                        <!-- Member meta -->
                                        <div class="member-info">
                                            <h4 class="title is-light is-6 is-tight">John Cambell</h4>
                                            <div class="position">Founder / Ceo</div>
                                            <p class="description">John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>    
</template>>

<style scoped>
.team-member-container {
    position: relative;
}

.team-member-container .dark-card {
    width: 100%;
    border-radius: 1px;
    color: white;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
    padding: 20px 0;
    text-shadow: 0 2px 4px rgba(4, 27, 99, 0.25);
    background: rgba(17, 149, 247, 0.08);
    border: 1px solid rgba(0, 83, 251, 0.5);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 0 25px 0 rgba(18, 60, 255, 0.16);
    position: relative;
    z-index: 2;
}

.team-member-container .dark-card .avatar {
    text-align: center;
    position: relative;
    height: 140px;
    padding: 10px 0;
}

.team-member-container .dark-card .avatar .circle-chart {
    -webkit-transform: scale(0.92);
       -moz-transform: scale(0.92);
         -o-transform: scale(0.92);
            transform: scale(0.92);
    position: absolute;
    top: -webkit-calc(50% - 70px);
    top: -moz-calc(50% - 70px);
    top: calc(50% - 70px);
    left: -webkit-calc(50% - 70px);
    left: -moz-calc(50% - 70px);
    left: calc(50% - 70px);
}

.team-member-container .dark-card .avatar .circle-chart .circle-chart-circle {
    stroke: rgba(17, 149, 247, 0);
    stroke-dasharray: 0, 100;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    -moz-transition: all .2s linear;
    transition: all .2s linear;
}

.team-member-container .dark-card .avatar .circle-chart .circle-chart-background {
    stroke: rgba(17, 149, 247, 0.09);
    border: 1px solid rgba(0, 83, 251, 0.5);
}

.team-member-container .dark-card .avatar img {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 0;
    right: 0;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    border-radius: 50%;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
}

.team-member-container .dark-card .avatar img.is-real {
    opacity: 1;
}

.team-member-container .dark-card .avatar img.is-sketch {
    opacity: 1;
}

.team-member-container .dark-card:hover {
    background: rgba(17, 149, 247, 0.06);
    border: 1px solid rgba(0, 83, 251, 0.8);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5), 0 0 25px 0 rgba(18, 60, 255, 0.24);
}

.team-member-container .dark-card:hover .avatar .circle-chart .circle-chart-circle {
    stroke-dasharray: 100, 100;
    stroke: secondary #00ff99;
}

.team-member-container .dark-card:hover img.is-real {
    opacity: 1;
}

.team-member-container .dark-card:hover img.is-sketch {
    opacity: 0;
}

.team-member-container .dark-card .member-info {
    text-align: center;
}

.team-member-container .dark-card .member-info .position {
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: .75rem;
    color: primary #7F00FF;
}

.team-member-container .dark-card .member-info .description {
    font-size: .8rem;
    padding: 10px 20px;
    color: rgba(94, 147, 255, 0.9);
}

</style>
>