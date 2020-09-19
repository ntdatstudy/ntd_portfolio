<template>
  <div id="home">
    <section v-if="isLoading" class="page-loading">
      <b-icon icon="gear-wide-connected" font-scale="3" style="color: #20c997" />
    </section>

    <b-container v-else fluid="lg">
      <!-- <section class="grid-mode">
        <label>Mode:</label>
        <a-menu mode="horizontal" :default-selected-keys="gridModeKeys">
          <a-menu-item v-for="mode in gridModes" :key="mode.key" @click="onGridModesChange($event)">
            <b-icon :icon="mode.icon" font-scale="1.5" />
          </a-menu-item>
        </a-menu>
      </section>-->

      <b-row>
        <b-col
          v-for="topic in topics"
          :key="topic.key"
          class="topic-col"
          sm="12"
          :offset-md="topic.offset"
          :md="mdColumnsTopic"
        >
          <topic :topic="topic" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Topic from "@/components/Topic";

import { topics } from "../constants";

export default {
  name: "Home",

  components: {
    Topic
  },

  data() {
    return {
      topics,
      gridModes: [
        {
          key: 2,
          icon: "layout-split"
        },
        {
          key: 3,
          icon: "layout-three-columns"
        }
      ],
      isLoading: true,
      gridModeKeys: [2],
      gridMode: 2
    };
  },

  computed: {
    mdColumnsTopic() {
      return 12 / this.gridMode;
    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.classList.remove("overflow-hidden");
    }, 1000);
  },

  methods: {
    onGridModesChange(e) {
      this.gridMode = e.key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

#home {
  .topic {
    margin: 10px 0;
  }

  .topic-col {
    @include transition(0.3s);
  }

  .grid-mode {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ffffff80;

    label {
      color: #ffffff80;
      margin-bottom: 0;
    }

    .ant-menu {
      background-color: transparent;
      border-bottom: none;

      .ant-menu-item {
        color: #ffffff80;
        border-bottom: none;

        &.ant-menu-item-selected {
          color: #20c997;
        }
      }
    }
  }
}
</style>
