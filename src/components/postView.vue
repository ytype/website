<template>
  <div>
    <g-link
      :to="post.path"
      class="is-size-4 has-text-weight-bold"
    >
      {{ post.title }}
    </g-link>
    <p
      class="content"
      v-html="post.description"
    />
  </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default() {
                return {}
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.is-size-4 {
  font-family: 'Noto Serif KR';
  color: black;
}
</style>
