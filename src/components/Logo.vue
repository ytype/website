<template>
  <g-link
    class="navbar-item is-size-4 has-text-weight-bold"
    to="/"
  >
    {{ $static.metadata.siteName }}
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
a {
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  &:hover{
    color: #5184EC;
  }
}
</style>
