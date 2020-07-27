<template>
  <div class="v-digital-clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>
<script>
function zeroPadding(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
export default {
  name: "v-digital-clock",
  data() {
    return {
      time: "--:--:--",
      date: "--"
    };
  },
  beforeCreate() {
    this.yearSplit = ["年", "月", "日"];
    this.week = [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期日"
    ];
    this.timer = -1;
  },
  methods: {
    updateTime() {
      let date = new Date();
      this.time =
        zeroPadding(date.getHours(), 2) +
        ":" +
        zeroPadding(date.getMinutes(), 2) +
        ":" +
        zeroPadding(date.getSeconds(), 2);
      this.date =
        zeroPadding(date.getFullYear(), 4) +
        this.yearSplit[0] +
        zeroPadding(date.getMonth() + 1, 2) +
        this.yearSplit[1] +
        zeroPadding(date.getDate(), 2) +
        this.yearSplit[2] +
        " " +
        this.week[date.getDay()];

        date = null;
    }
  },
  created () {
      setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    this.yearSplit = null;
    this.week = null;
    if (this.timer != -1) {
      clearInterval(this.timer);
    }
  }
};
</script>
<style lang="less" scoped>
.v-digital-clock {
  /* font-family: 'Share Tech Mono', monospace; */
  width: 100%;
  height: 100%;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  p {
    margin: 0;
    padding: 0;
  }
  .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }

  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
}
</style>