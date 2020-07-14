<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="primary navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <Logo v-if="showLogo" />
        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': showNav }"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': showNav } "
      >
        <div class="navbar-end">
          <g-link
            class="navbar-item"
            to="/about"
          >
            About
          </g-link>
          <a
            class="navbar-item"
            href="//github.com/calebanthony/gridsome-bulma"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
  props: {
    showLogo: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    showNav: false,
  }),
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  background-color: #373D49;
}
</style>
