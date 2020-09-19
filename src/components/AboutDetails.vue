<template>
  <div id="about__details" class="topic_details">
    <b-container>
      <section class="info mb-30">
        <b-row>
          <b-col md="6">
            <a-avatar :src="developer.avatar" :size="200" />
            <!-- <h1 class="job-title">{{ developer.jobTitle }}</h1> -->
            <h1 class="info__job-title">???</h1>
          </b-col>

          <b-col md="6">
            <section class="info__details">
              <info-group title="Name">{{ developer.name }}</info-group>
              <info-group title="Gender">{{ developer.gender }}</info-group>
              <info-group title="DOB">{{ developer.dob }}</info-group>
              <info-group title="Address">{{ developer.address }}</info-group>
              <info-group title="Phone">{{ developer.phone }}</info-group>
              <info-group title="Email">{{ developer.email }}</info-group>
            </section>
          </b-col>
        </b-row>
      </section>

      <section class="summary mb-30">
        <!-- <pre>
          I want to be a front-end or PHP developer and my intention I will be a full-stack developer in the future. I'm passionate about frontend, so I'm quite good at HTML5, CSS3, JS, JQuery, Bootstrap. And I have knowledge about ReactJS which I want to improve about technique and skills.
          I have experience to work on PHP language with Laravel framework. Learning or approaching to new languages, new technologies is what I'm interesting to. Furthermore, I'm looking forward to improving and developing about skills, techniques, knowledge.
        </pre>-->
        <p>The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.</p>
      </section>

      <section class="contacts">
        <div class="d-flex justify-content-center">
          <a-tooltip v-for="contact in contacts" :key="contact.key" placement="top">
            <template #title>{{ contact.title }}</template>

            <button :class="`btn-${contact.key}`" @click="onContactClick(contact.link)">
              <img :src="require(`@/assets/${contact.logo}`)" />
            </button>
          </a-tooltip>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
import { developer, contacts } from "@/constants";

import InfoGroup from "@/components/InfoGroup";

export default {
  name: "AboutDetails",

  components: {
    InfoGroup
  },

  data() {
    return {
      developer,
      contacts
    };
  },

  methods: {
    onContactClick(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
#about__details {
  * {
    color: #fff !important;
  }

  .info {
    .info__job-title {
      margin: 15px 0;
      font-size: 25px;
    }

    .info__details .info-group {
      @media screen and (min-width: 768px) {
        text-align: left;
      }
    }
  }

  .summary {
    max-width: 600px;
    margin: 0 auto;
    text-align: justify;
  }

  .contacts button {
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 4px;

    padding: 5px;
    margin: 0 10px;

    img {
      width: 30px;
    }
  }
}
</style>
