<template>
  <Layout>
    <div class="main">
      <div class="has-text-centered ">
        <h1 class="">
          {{ $page.post.title }}
        </h1>
        <PostMeta
          class=""
          :post="$page.post"
        />
      </div>
      <!-- post content section container -->
      <div class="post ">
        <figure
          v-if="$page.post.cover_image"
          class="image is-16by9"
        >
          <g-image
            alt="Cover image"
            :src="$page.post.cover_image"
          />
        </figure>

        <p v-html="$page.post.content" />

        <footer>
          <PostTags :post="$page.post" />
        </footer>
      </div>
    </div>

    <div class="post-comments">
    <!-- Add comment widgets here -->
    </div>
    </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta';
import PostTags from '~/components/PostTags';

export default {
  components: {
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post($id: ID!) {
  post: post(id: $id) {
    title
    path
    date(format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image(width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.main {
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
