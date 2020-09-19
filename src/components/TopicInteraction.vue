<template>
  <div id="topic-interaction" @mouseleave="indexHover = null">
    <ul>
      <li v-for="(topic, index) in topics" :key="topic.key">
        <a
          :href="`#${topic.key}`"
          :style="{
            backgroundColor: index === indexHover || index === indexActive ? topic.backgroundColor : '#fff',
            color: index === indexHover || index === indexActive ? '#fff' : '#000'
          }"
          @mouseover="indexHover = index"
        >{{ topic.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { topics } from "../constants";

export default {
  name: "TopicInteraction",

  data() {
    return {
      topics,
      indexHover: null,
      indexActive: null,
      offsetTop: {}
    };
  },

  mounted() {
    this.offsetTop = {
      about: document.getElementById("about").offsetTop,
      skills: document.getElementById("skills").offsetTop,
      experiences: document.getElementById("experiences").offsetTop,
      hobbies: document.getElementById("hobbies").offsetTop
    };

    this.activateCurrentTopic();
  },

  methods: {
    activateCurrentTopic() {
      window.addEventListener("scroll", () => {
        const offsetTop = window.pageYOffset + window.innerHeight;
        if (offsetTop >= this.offsetTop.hobbies) {
          this.indexActive = "hobbies";
        } else if (offsetTop >= this.offsetTop.experiences) {
          this.indexActive = "experiences";
        } else if (offsetTop >= this.offsetTop.skills) {
          this.indexActive = "skills";
        } else if (offsetTop >= this.offsetTop.about) {
          this.indexActive = "about";
        } else {
          this.indexActive = null;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#topic-interaction {
  position: fixed;
  width: 100px;
  bottom: 20px;
  right: 20px;
  padding: 5px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

  ul {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;

    li {
      margin: 2px 0;

      a {
        display: block;
        padding: 5px;
        border-radius: 20px;

        text-decoration: none;
        color: #000;
        font-size: 12px;
      }
    }
  }
}
</style>
