<template>
  <div class="column is-6-tablet is-3-desktop">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            class="thumbnail"
            alt="Placeholder image"
          >
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          {{ data.name }}
        </div>

        <div class="content">
          {{ data.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scope>
.card {
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
}
.card:hover {
  box-shadow: 4px 8px 8px 0 rgba(0, 0, 0, 0.3);
}
.thumbnail {
  border-radius: 10px 10px 0px 0px;
}
</style>
