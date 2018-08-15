<template>
  <div>
    <div class="title">
      {{ post.title }}
    </div>
    <div class="content" v-html="post.content">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Post',
  computed: {
    ...mapGetters(['posts']),
    post () {
      return this.posts.find(p => p.id === parseInt(this.$route.params.id)) || {}
    }
  }
}
</script>

<style scoped lang="scss">
</style>
