<template>
  <div class="home">
    <div class="demo-clock">
      <digital-clock></digital-clock>
    </div>
    <div class="demo-clock">
      <div>
        <digital></digital>
      </div>
    </div>
  </div>
</template>

<script>
import { DigitalClock, Digital } from "../../packages/index";
export default {
  name: "Home",
  components: {
    // [DigitalClock.name]: DigitalClock
    DigitalClock,
    Digital,
  },
};
</script>
<style lang="less" scoped>
h1 {
  margin: 0;
}

.home {
}
.demo-clock {
  // border: 1px solid red;
}
</style>