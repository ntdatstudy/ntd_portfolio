<template>
  <div>
    <b-container fluid>
      <header-navbar />
    </b-container>

    <router-view />
  </div>
</template>

<script>
import HeaderNavbar from "@/components/HeaderNavbar";

export default {
  name: "MasterLayout",

  components: {
    HeaderNavbar
  },

  data() {
    return {
      isLoading: true
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
};
</script>
