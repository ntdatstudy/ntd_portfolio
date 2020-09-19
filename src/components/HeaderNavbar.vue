<template>
  <div id="header-navbar">
    <h1 class="logo">N.T.D</h1>

    <nav :class="['primary-nav', { 'prevent-transition': !navHided }, { active: navExpanded }]">
      <a-menu mode="horizontal" :default-selected-keys="activeMenu">
        <a-menu-item v-for="item in mainMenu" :key="item.key" @click="onMenuItemClick($event)">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </a-menu-item>
      </a-menu>

      <!-- <b-nav>
        <b-nav-item
          v-for="social in socialsMenu"
          :key="social.key"
          :href="social.link"
          target="_blank"
        >
          <a-tooltip overlayClassName="social-tooltip" placement="left">
            <template slot="title">{{ social.title }}</template>

            <a-icon :type="social.icon" theme="filled" />
          </a-tooltip>
        </b-nav-item>
      </b-nav>-->
    </nav>

    <a-tooltip v-if="navHided" overlayClassName="social-tooltip" placement="left">
      <template slot="title">Open menu</template>

      <button :class="['header-navbar__toggle', { active: navExpanded }]" @click="onToggleClick">
        <b-icon icon="chevron-double-down" style="color: #20c997" />
      </button>
    </a-tooltip>
  </div>
</template>

<script>
export default {
  name: "HeaderNavbar",

  data() {
    return {
      mainMenu: [
        {
          key: "home",
          title: "home",
          to: "/"
        },
        {
          key: "overview",
          title: "overview",
          to: "/overview"
        }
      ],
      socialsMenu: [
        {
          key: "facebook",
          title: "Facebook",
          icon: "facebook",
          link: "https://www.facebook.com/nguyendat163"
        },
        {
          key: "instagram",
          title: "Instagram",
          icon: "instagram",
          link: "https://www.instagram.com/datielnguyen"
        },
        {
          key: "github",
          title: "Github",
          icon: "github",
          link: "https://www.github.com"
        }
      ],
      navHided: false,
      navExpanded: false
    };
  },

  computed: {
    activeMenu() {
      const key = this.$route.matched[0].meta;
      return key ? [key] : [];
    }
  },

  mounted() {
    this.addEventWindowOnResize();
    this.checkIsMobile();
  },

  methods: {
    addEventWindowOnResize() {
      window.addEventListener("resize", e => {
        if (e.target.innerWidth <= 576) {
          this.navHided = true;
        } else {
          this.navHided = false;
          this.navExpanded = false;
        }
      });
    },

    checkIsMobile() {
      this.navExpanded = false;
      const windowWidth = window.innerWidth;
      this.navHided = windowWidth <= 576;
    },

    onMenuItemClick(e) {
      console.log(e.key);
      this.navExpanded = false;
    },

    onToggleClick() {
      this.navExpanded = !this.navExpanded;

      if (this.navExpanded) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

#header-navbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    z-index: 9999;
    background-color: #000;
    box-shadow: 0px 1px 10px 0px rgba(255, 255, 255, 0.2);
    @include animation(header-fixed 0.5s);
  }

  @media screen and (max-width: 576px) {
    justify-content: center;
  }

  .logo {
    margin: 0;
    color: #fff;
    font-size: 25px;
    letter-spacing: 3px;
    border-bottom: 5px solid #20c997;
  }

  .primary-nav {
    display: flex;
    align-items: center;

    @media screen and (min-width: 576px) {
      justify-content: space-between;
      width: calc(50% + 115px);
    }

    @media screen and (max-width: 576px) {
      position: absolute;
      flex-direction: column;
      justify-content: space-around;
      width: 100vw;
      height: calc(100vh - 55px);
      top: 55px;
      z-index: 999;

      background-color: #20c997;
      @include transform(translateX(-100%));
      @include transition(0.3s);

      &.active {
        @include transform(translateX(0));
      }

      .ant-menu {
        .ant-menu-item {
          &.ant-menu-item-selected {
            a {
              color: #fff;
            }
          }
        }
      }

      .nav {
        .nav-link {
          color: #fff !important;
        }
      }
    }
  }

  .ant-menu {
    background-color: transparent;
    border-bottom: none;

    .ant-menu-item {
      border-bottom: none;

      &:hover {
        a {
          color: #fff !important;
          background-color: #20c997;
        }
      }

      &.ant-menu-item-selected {
        a {
          color: #20c997;
        }
      }

      a {
        display: inline;
        padding: 10px;

        font-size: 12px;
        color: #ffffff80;
        text-transform: uppercase;
        text-decoration: none;
        border-bottom: none;
        border-radius: 4px;

        @include transition(0.5s);
      }
    }
  }

  .nav {
    .nav-item {
      &:first-child {
        .nav-link {
          padding-left: 0;
        }
      }

      &:last-child {
        .nav-link {
          padding-right: 0;
        }
      }

      .nav-link {
        color: #ffffff80;
        padding-top: 0;

        &:hover {
          @include transform(scale(1.3));
          @include transition(0.5s);
        }
      }
    }
  }

  .header-navbar__toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    @include transform(translateY(-50%));

    background: none;
    border: none;
    outline: none;
    @include transition(0.3s);

    &.active {
      top: calc(50% - 4px);
      @include transform(translateY(-50%) rotate(180deg));
    }
  }
}

@keyframes header-fixed {
  0% {
    @include transform(translateY(-200%));
  }
  100% {
    @include transform(translateY(0));
  }
}
</style>
