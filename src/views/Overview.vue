<template>
  <div id="overview">
    <section v-if="isLoading" class="page-loading">
      <b-icon icon="gear-wide-connected" font-scale="3" style="color: #20c997" />
    </section>

    <section v-else class="overview-container">
      <topic-overview
        :id="topics.about.key"
        :title="topics.about.title"
        :color="topics.about.backgroundColor"
      >
        <about-details />
      </topic-overview>

      <topic-overview
        :id="topics.skills.key"
        :title="topics.skills.title"
        :color="topics.skills.backgroundColor"
      >
        <skills-details />
      </topic-overview>

      <topic-overview
        :id="topics.experiences.key"
        :title="topics.experiences.title"
        :color="topics.experiences.backgroundColor"
      >
        <experiences-details />
      </topic-overview>

      <topic-overview
        :id="topics.hobbies.key"
        :title="topics.hobbies.title"
        :color="topics.hobbies.backgroundColor"
      >
        <hobbies-details />
      </topic-overview>

      <topic-interaction />
    </section>
  </div>
</template>

<script>
import TopicOverview from "@/components/TopicOverview";
import AboutDetails from "@/components/AboutDetails";
import SkillsDetails from "@/components/SkillsDetails";
import ExperiencesDetails from "@/components/ExperiencesDetails";
import HobbiesDetails from "@/components/HobbiesDetails";
import TopicInteraction from "@/components/TopicInteraction";

import { topics } from "../constants";

export default {
  name: "Overview",

  components: {
    TopicOverview,
    AboutDetails,
    SkillsDetails,
    ExperiencesDetails,
    HobbiesDetails,
    TopicInteraction
  },

  data() {
    return {
      topics,
      isLoading: true
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      document.body.classList.remove("overflow-hidden");
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
#overview {
  .overview-container {
    margin-top: 50px;

    .topic-overview {
      margin: 10px 0;
      padding: 25px 0;
    }
  }
}
</style>
