<template>
  <footer class="footer has-text-centered">
    <span>Copyright © {{ new Date().getFullYear() }} ytype. All rights reserved </span>
    <span>Powered by <a href="//gridsome.org"> Gridsome </a></span>
  </footer>
</template>

<style lang="scss" scoped>
span {
  display: block;
  color: white;
  a {
    color: #4D94FF;
  }
}
.footer {
  background-color: #373D49;
  padding: 20px 0;
}
</style>
