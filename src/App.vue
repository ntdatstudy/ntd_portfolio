<template>
  <div id="app">
    <master-layout />
  </div>
</template>

<script>
import MasterLayout from "@/layouts/MasterLayout";

export default {
  components: {
    MasterLayout
  },

  mounted() {
    document.title = "N.T.D Portfolio";
    this.fixHeaderWhenScrollDown();
  },

  methods: {
    fixHeaderWhenScrollDown() {
      const headerEle = document.getElementById("header-navbar");

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          headerEle.classList.add("sticky");
        } else {
          headerEle.classList.remove("sticky");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
