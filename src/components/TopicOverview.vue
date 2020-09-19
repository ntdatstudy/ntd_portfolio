<template>
  <section
    :id="id"
    class="topic-overview"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <title-bar
      :id="id"
      :title="title"
      :color="color"
      :is-active="isActive || isHovering"
      :toggle="toggle"
    />

    <slot></slot>
  </section>
</template>

<script>
import TitleBar from "@/components/TitleBar";

export default {
  name: "TopicOverview",

  components: {
    TitleBar
  },

  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: [String, Number],
      default: ""
    },
    color: {
      type: String,
      default: "#000"
    },
    isActive: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isHovering: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.topic-overview {
  * {
    color: #fff !important;
  }

  .title-bar {
    margin-bottom: 50px;
  }

  .topic_details {
    overflow: hidden;
    @include transition(all 0.5s);
  }
}
</style>