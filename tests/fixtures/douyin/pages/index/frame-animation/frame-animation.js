Component({
  properties: {
    url: {
      type: String,
      value: "",
    },
    count: {
      type: String,
      value: 3,
    },
    width: {
      type: String,
      value: 360,
    },
    height: {
      type: String,
      value: 300,
    },
    duration: {
      type: String,
      value: 0.3,
    },
    playNumber: {
      type: String,
      value: "infinite",
    },
    direction:{
      type: String,
      value: ''
    }
  },
  data: {},
  attached() {
    if (this.data.playNumber > 0) {
      setTimeout(() => {
        this.triggerEvent("end");
      }, this.data.playNumber * this.data.duration * 1000);
    }
  },
  methods: {},
});
