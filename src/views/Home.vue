<template>
  <div class="home">
    <div class="title">Peeps</div>
    <div class="posts">
      <div class="post" v-for="(post, id) in posts" :key="id">
        <div class="thumbnail-container">
          <img class="thumbnail" :src="post.thumbnailUrl">
          <router-link class="overlay" :to="{ name: 'post', params: { id: post.id } }"></router-link>
        </div>
        <div class="date">{{ post.date }}</div>
        <router-link tag="div" class="title" :to="{ name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>
        <div class="tags">{{ post.tags.join(', ') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import moment from 'moment'
import Post from './Post'

export default {
  name: "home",
  components: {
    Post
  },
  computed: mapGetters(['posts'])
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .title {
    font-family: 'Libre Baskerville', serif;
    border-bottom: 1px solid black;
    font-size: 18pt;
    padding-bottom: 3px;
    margin: 30px 0;
  }
  .posts {
    .post {
      display: flex;
      flex-direction: column;
      align-items: center;
      .thumbnail-container {
        height: 406px;
        position: relative;
        .thumbnail {
          height: 100%;
        }
        .overlay {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          transition: background .3s ease;
          &:hover {
            background: rgba(255, 255, 255, .2);
          }
        }
      }
      .date {
        color: #bbb;
        margin-top: 20px;
        font-size: 10pt;
      }
      .title {
        cursor: pointer;
        margin: 20px 0;
        font-size: 14pt;
      }
      .tags {
        border-top: 1px solid black;
        padding-top: 20px;
        color: #bbb;
        font-size: 10pt;
      }
    }
  }
}
</style>

