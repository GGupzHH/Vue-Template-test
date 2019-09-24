<template>
  <div class="button" @click="wavesEffect">
    <p class="btn_text">{{ btn_text }}</p>
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
      e.target.style.lineHeight = e.target.offsetHeight + 'px'
      e = e || window.event;
      let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      this.$refs.wavesbtn.appendChild(c)
      c.setAttribute('cx', e.offsetX)
      c.setAttribute('cy', e.offsetY)
      c.setAttribute('r', 0)
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
      }, 100);
    }
  },
  mounted() {
    let btn_line = document.querySelector('.btn_text')
    btn_line.style.lineHeight = btn_line.offsetHeight + 'px'
  },
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
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: aquamarine;
  cursor: pointer;
}
p {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: 0px 20px;
  left: 0;
  top: 0;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: table-cell;
  vertical-align:middle;
}
</style>
