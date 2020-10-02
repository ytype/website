<template>
  <div class="content">
    {{ date }}
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
    data() {
        return {
            date: this.post.date,
        }
    },
    mounted() {
        if (this.date.indexOf('.') === 1) {
            this.date = (`0${this.date[0]}${this.date.substr(2)}`)
        } else {
            this.date = (`${this.date[0]}${this.date[1]}${this.date.substr(3)}`)
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 1rem;
  font-family: 'Noto Serif KR';
}
</style>
