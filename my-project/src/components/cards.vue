<template>

<div>
  <div v-if="!topics.loading && topics.success" >
    <!--div v-on:click="goToPage(topic.id)" v-for='topic in topics' class="container"-->
    <div @click="goToPage(topic.id)" v-for='topic in topics.data.results' class="container">
      <div class="img_div">
        <img :src="topic.category.icon.svg_url" width="50" height="50"/>
      </div>
      <div class="name_div">
        <p>{{topic.name}}</p>
      </div>
      <div class="created_by_div">
        <p>{{topic.created_by.name}}</p>
      </div>
    </div>
  </div>
  <div v-if="topics.loading">
      <p>Loading...</p>
  </div>
  <div v-if="topics.error && !topics.loading">
      <p>{{topic.error}}</p>
  </div>
</div>


</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Cards',
  methods: {
    ...mapActions([
      'fetchTopics'
    ]),
    goToPage (id) {
      this.$router.push({name: 'Card', params: {id}})
    }
  },
  computed: {
    ...mapGetters([
      'topics'
    ])
  },
  created () {
    this.fetchTopics()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  .container {
    margin-bottom: 10px;
    background-color: white;
    display: flex;
    padding: 20px;
  }
  body {
    background-color: #f6f7fc;
  }
</style>
