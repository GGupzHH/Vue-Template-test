<template>
  <div class="button" @click="wavesEffect">
    <p>{{ btn_text }}</p>
    <svg class="wavesbtn" ref="wavesbtn" version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    </svg>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    btn_text: String,
    duration: String,
    wave_bg: String,
    wave_r: String
  },
  methods: {
    wavesEffect(e) {
      if (isNaN(this.duration * 1000)) {
        console.error('duration the number of seconds required to carry no units')
      }
      e = e || window.event;
      let position = e.target.getBoundingClientRect();
      let doc = document.documentElement;
      let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      let top = e.pageY - (position.top + window.pageYOffset) - doc.clientTop;
      let left = e.pageX - (position.left + window.pageXOffset) - doc.clientLeft;
      this.$refs.wavesbtn.appendChild(c)
      c.setAttribute('cx', left)
      c.setAttribute('cy', top)
      c.setAttribute('r', 1)
      c.setAttribute('fill', this.wave_bg)
      setTimeout(() => {
        c.style = `
        transition-duration: ${this.duration}s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity:0;`;
        c.setAttribute('r', this.wave_r)
        setTimeout(() => {
          this.$refs.wavesbtn.removeChild(c);
        }, this.duration * 1000);
      }, 10);
    }
  }
}
</script>
<style scoped>
svg {
  width: 100%;
  height: 100%;
}
.button {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: aquamarine;
  cursor: pointer;
}
p {
  width: 100%;
  height: 100%;
  line-height: 48px;
  position: absolute;
  box-sizing: border-box;
  padding: 0px 20px;
  left: 0;
  top: 0;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
