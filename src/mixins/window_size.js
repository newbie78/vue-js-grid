export default {
  data () {
    return {
      windowHeight: 0,
      windowWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.getWindowSize)
    this.getWindowSize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize () {
      this.windowHeight = document.getElementById(this.container).offsetHeight
      this.windowWidth = document.getElementById(this.container).offsetWidth
    }
  }
}
