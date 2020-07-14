<template>
  <div id="app">
    <Navbar />
    <main class="section">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export default {
  components: {
    Logo, Footer, Navbar,
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
