<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
import moment from 'moment'

export default {
  computed: mapGetters(['cms']),
  methods: mapActions(['savePosts']),
  async mounted () {
    let posts = _.map(await this.cms.content.get('post'), post => ({
      ...post,
      date: moment(post.date).format('MMM DD YYYY'),
      tags: ['cycling'],
      thumbnailUrl: ''
    }))
    _.each(posts, async post => {
      post.thumbnailUrl = await this.cms.storage.getURL(post.thumbnail)
    })
    this.savePosts(posts)
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
