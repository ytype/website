<template>
  <div id="app">
    <Navbar />
    <main class="section">
      <div class="content">
        <slot />
      </div>
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
<style lang="scss">
.content {
  max-width: 50rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  p {
    font-family: 'Noto Serif KR';
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
