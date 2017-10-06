<template>

<div>
  <div v-if="!topic.loading && topic.success" class="container">
    <div class="img_div">
      <img :src="topic.data.category.icon.svg_url" width="50" height="50"/>
    </div>
    <div class="name_div">
      <p>{{topic.data.name}}</p>
    </div>
    <div class="created_by_div">
      <p>{{topic.data.created_by.first_name}}</p>
    </div>
  </div>
  <div v-if="topic.loading">
      <p>Loading...</p>
  </div>
  <div v-if="topic.error && !topic.loading">
      <p>{{topic.error}}</p>
  </div>

</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Card',
  methods: {
    ...mapActions([
      'fetchTopic'
    ])
  },
  computed: {
    ...mapGetters([
      'topic'
    ])
  },
  created () {
    this.fetchTopic(this.$route.params.id)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    padding: 20px;
  }
</style>
