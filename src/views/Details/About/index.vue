<template>
  <div></div>
</template>

<script>
import { developer } from "@/constants";

export default {
  name: "About",

  data() {
    return {
      developer
    };
  }
};
</script>

<style lang="scss" scoped>
.topic_details {
  * {
    color: #fff !important;
  }

  .job-title {
    margin: 15px 0;
    font-size: 25px;
  }
}
</style>
