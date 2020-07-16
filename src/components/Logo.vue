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
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  font-size: 25px;
  &:hover{
    color: #5184EC;
  }

}
</style>
