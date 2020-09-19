<template>
  <div
    :class="['title-bar', { active: isActive }]"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="ping" :style="{ backgroundColor: pingColor }" />
    <span
      class="title"
      :style="{
        backgroundColor: color,
        borderColor: titleBorderColor
      }"
    >{{ title }}</span>
    <span class="sub-title">{{ title }}</span>
    <button v-if="toggle" :class="['btn-toggle', { active: isExpanded }]" @click="onToggleClick">
      <b-icon icon="arrow-down-circle-fill" font-scale="2.3" :style="{ color }" />
    </button>
  </div>
</template>

<script>
export default {
  name: "TitleBar",

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
      isHovering: false,
      isExpanded: true,
      detailsHeight: 0,
      detailsHeightChecked: false
    };
  },

  computed: {
    pingColor() {
      return this.isHovering || this.isActive ? this.color : "transparent";
    },

    titleBorderColor() {
      return this.isHovering || this.isActive ? this.color : "#000";
    }
  },

  methods: {
    onToggleClick() {
      const details = document.getElementById(`${this.id}__details`);

      if (!details) {
        this.isExpanded = !this.isExpanded;
        return;
      }

      // Get details height if never checked before
      if (!this.detailsHeightChecked) {
        this.detailsHeight = details.offsetHeight;
        this.detailsHeightChecked = true;
      }

      if (this.isExpanded) {
        this.isExpanded = false;
        details.style.height = "0";
      } else {
        this.isExpanded = true;
        details.style.height = `${this.detailsHeight}px`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.title-bar {
  position: relative;
  height: 100px;
  background-color: #fff;
  box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.55);

  &:hover,
  &.active {
    background-color: #000;

    .title {
      left: 50%;
      @include transform(translate(-50%, -50%) rotate(360deg));
    }

    .ping {
      left: 50%;
      @include animation(title-ping 1s infinite);
      @include animation-delay(1s);
      @include transition-delay(1s);
    }

    .sub-title {
      display: none;
    }
  }

  .title {
    position: absolute;
    width: 110px;
    height: 110px;
    top: 50%;
    left: 10px;
    @include transform(translateY(-50%));
    @include transition(1s);

    display: flex;
    align-items: center;
    justify-content: center;

    border: 10px solid;
    border-radius: 50%;

    color: #fff;
    font-size: 15px;
    text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  }

  .ping {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%, -50%));
    @include transition(1s);
    @include transition-delay(0s);
    border-radius: 50%;
  }

  .sub-title {
    position: absolute;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%, -50%));
    z-index: 0;

    color: rgba(0, 0, 0, 0.2);
    font-size: 6vw;
    letter-spacing: 5px;

    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  .btn-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    @include transform(translateY(-50%));

    background: none;
    border: none;
    outline: none;
    @include transition(0.5s);

    &.active {
      @include transform(translateY(-50%) rotate(180deg));
    }
  }
}

@keyframes title-ping {
  0% {
    opacity: 1;
    @include transform(translate(-50%, -50%) scale(1));
  }
  100% {
    opacity: 0;
    @include transform(translate(-50%, -50%) scale(2));
  }
}
</style>
