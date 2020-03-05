<template>
  <div class="tissue-player">
    <div class="window-start" >
      <h1 >{{ msg }}</h1>
      <p>思う存分ティッシュを引き抜こう！！</p>
      <button @click="onStart" :class="{disable: isDisplayPlayer}">START</button>
    </div>

    <div class="window-player" :class="{enable:isDisplayPlayer}">
      <video src="4621190_Trim.mp4" @mousedown.prevent="onClick" @touchstart.prevent="onClick"></video>
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

      isDisplayPlayer: false,

      clickCounter: 0,

    }
  },
  created() {
    this.initAudio();
  },
  methods: {
    initAudio() {
      this.audio = new Audio();
      this.audio.preload = "auto";
      this.audio.src = "tissue.mp3";
    },
    onStart() {
      console.log("onStart");
      this.isDisplayPlayer = true;
      this.audio.load();
      
    },
    onClick(ev) {
      console.log("onClick")
      ev.target.currentTime = 0;
      ev.target.play();

      this.audio.currentTime = 0;
      this.audio.play();

      this.clickCounter ++;
      this.$ga.event('TissuePlayer', 'click', 'テッシュクリック', this.clickCounter);
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
button.disable {
  transition: 1s;
  opacity: 0;
}

.window-player {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  opacity: 0;
}

.enable {
  z-index: 100;
  transition: 1s;
  opacity: 1;
}

video {
  width: 100vw;
  height: 100vh;
  object-fit: scale-down;
}
</style>
