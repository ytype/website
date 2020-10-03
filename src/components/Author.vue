<template>
  <div class="author content has-text-centered">
    <g-image
      alt="Author image"
      class="image not-drag"
      src="~/assets/images/ytype.png"
    />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  border-radius: 50%;
  -webkit-transition: -webkit-transform 1s ease-in-out;
  transition:         transform 1s ease-in-out;
  margin-bottom: 10px;
  &:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  }
}
.not-drag {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
