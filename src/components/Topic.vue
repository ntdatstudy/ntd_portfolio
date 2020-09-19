/* eslint-disable */
<template>
  <div class="topic" @mouseover="isTopicHovering = true" @mouseleave="isTopicHovering = false">
    <img :src="topic.image" />
    <b-card class="topic__content">
      <div class="title" :style="{ backgroundColor: titleColor }">
        <div class="ping" :style="{ backgroundColor: titleColor }" />
        <span>{{ topic.title }}</span>
      </div>
      <b-button
        variant="outline-primary"
        :style="{
          backgroundColor: isButtonHovering
            ? topic.backgroundColor
            : 'transparent'
        }"
        @mouseover="isButtonHovering = true"
        @mouseleave="isButtonHovering = false"
        @click="$router.push(topic.link)"
      >
        <span>More Details</span>
        <a-icon type="swap-right" />
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Topic",

  props: {
    topic: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isTopicHovering: false,
      isButtonHovering: false
    };
  },

  computed: {
    titleColor() {
      return this.isTopicHovering ? this.topic.backgroundColor : "transparent";
    },

    buttonColor() {
      return this.isButtonHovering ? this.topic.backgroundColor : "transparent";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/constants.scss";

.topic {
  position: relative;
  overflow: hidden;

  &:hover {
    img {
      @include filter(grayscale(0));
      @include transform(scale(1.05));
    }

    .topic__content {
      .title {
        width: 200px;
        height: 200px;
        @include transform(translate(-50%, -50%) rotate(360deg));

        span {
          font-size: 16px;
          line-height: 200px;
        }

        .ping {
          @include animation(title-ping 1s infinite);
        }
      }

      .btn {
        left: 50%;
        @include animation(button-motion 0.5s);
        @include transform(translateX(-50%) rotate(360deg));
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    @include filter(grayscale(1));
    @include transition(0.5s);
  }

  .topic__content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: transparent;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 230px;
      height: 230px;
      border-radius: 50%;
      @include transform(translate(-50%, -50%));
      @include transition(0.5s);

      span {
        color: #fff;
        font-size: 32px;
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
        line-height: 230px;
      }

      .ping {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;

        background-color: transparent;
        border-radius: 50%;
      }
    }

    .btn {
      position: absolute;
      bottom: 10px;
      left: 10px;

      display: flex;
      align-items: center;
      padding-top: 10px;

      color: #fff;
      border: 2px solid #fff;
      border-radius: 0;
      text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.35);
      @include transition(0.5s);

      span {
        margin-right: 5px;
        text-transform: uppercase;
        font-size: 11px;
      }

      .anticon {
        margin-top: -6px;
      }
    }
  }
}

@keyframes button-motion {
  0%,
  100% {
    bottom: 10px;
  }
  50% {
    bottom: 200px;
  }
}

@keyframes title-ping {
  0% {
    opacity: 1;
    @include transform(scale(1));
  }
  100% {
    opacity: 0;
    @include transform(scale(2));
  }
}
</style>
