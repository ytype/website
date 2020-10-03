<template>
  <footer class="footer has-text-centered">
    <span>Copyright © {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}.
      All rights reserved </span>
    <span>Powered by <a href="//gridsome.org"> Gridsome </a></span>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85px;
}


</style>
