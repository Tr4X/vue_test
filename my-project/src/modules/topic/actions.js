import Vue from 'vue'

export const actions = {
  fetchTopic (store, id) {
    store.commit('fetchTopicRequest')
    Vue.http.get(`https://acme.api.staging.yeslift.com/api/topics/${id}/`, {headers: {'Authorization': 'Token c0155d5c5e21897b5299170295c107d3ec5f54c8'}})
    .then(response => {
      store.commit('fetchTopicSuccess', response.body)
    })
    .catch(error => {
      store.commit('fetchTopicFailed', error)
    })
  },
  goToPage (id) {
    this.$router.push({name: 'Card', params: {id}})
  }
}
