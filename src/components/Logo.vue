<template>
  <g-link
    class="navbar-item is-size-4 has-text-weight-bold"
    to="/"
  >
    <p class="title">
      {{ $static.metadata.siteName }}
    </p>
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
p {
  font-family: 'Roboto Mono', monospace;
  color: white;
  font-size: 22px;
  font-weight: 500;
}
</style>
