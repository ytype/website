<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <div
      v-for="edge in $page.projects.edges"
      :key="edge.node.id"
      :post="edge.node"
    >
      <p>{{ edge.node }}</p>
    </div>
    <!-- List posts -->
    <div class="posts">
      <View
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>


<page-query>
query {
  projects: allProject(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        path
        date(format: "D. MMMM YYYY")
        timeToRead
        description
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import View from '~/components/blog/blogView.vue'

export default {
    components: {
        Author,
        View,
    },
    metaInfo: {
        title: 'Hello, world!',
    },
}
</script>

<style lang="scss" scoped>
.posts {
  div {
    margin-bottom: 1rem;
  }
}
</style>
