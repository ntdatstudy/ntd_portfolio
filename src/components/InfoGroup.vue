<template>
  <div class="info-group">
    <p>
      <label>{{ title }}:</label>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoGroup",

  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.info-group {
  margin-bottom: 5px;

  p {
    margin-bottom: 0;

    label {
      margin-bottom: 0;
      margin-right: 5px;
      font-weight: 700;
    }
  }
}
</style>
