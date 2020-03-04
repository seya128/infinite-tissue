<template>
  <div class="tissue-player">
    <div class="window-start" v-show="isDisplayStart" >
      <h1 >{{ msg }}</h1>
      <p>思う存分ティッシュを引き抜こう！！</p>
      <button @click="onStart">START</button>
    </div>

    <div class="window-player" :style="playerStyle">
      <video src="/4621190_Trim.mp4" @mousedown.prevent="onClick" @touchstart.prevent="onClick"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TissuePlayer',
  props: {
    msg: String,
  },
  data() {
    return {
      audio: null,

      isDisplayStart: true,
      isDisplayPlayer: false,

      playerStyle: {
        opacity: 0.0,
        zIndex: 0,
      },
    }
  },
  created() {
    this.initAudio();
  },
  methods: {
    initAudio() {
      this.audio = new Audio();
      this.audio.preload = "auto";
      this.audio.src = "/tissue.mp3";
    },
    onStart() {
      console.log("onStart");
      this.isDisplayPlayer = true;
      this.audio.load();
      this.playerStyle.opacity = 1.0;
      this.playerStyle.zIndex = 100;
      
    },
    onClick(ev) {
      console.log("onClick")
      ev.target.currentTime = 0;
      ev.target.play();

      this.audio.currentTime = 0;
      this.audio.play();
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1 {
  margin: 40px 0 0;
}



.window-start {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

button {
  padding: 10px 50px;
}

.window-player {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: 1s;
}

video {
  width: 100vw;
  height: 100vh;
  object-fit: scale-down;
}
</style>
