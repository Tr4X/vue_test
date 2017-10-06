import Vue from 'vue'

export const actions = {
  fetchTopics (store) {
    store.commit('fetchTopicsRequest')
    Vue.http.get(`https://acme.api.staging.yeslift.com/api/topics/`, {headers: {'Authorization': 'Token c0155d5c5e21897b5299170295c107d3ec5f54c8'}})
    .then(response => {
      store.commit('fetchTopicsSuccess', response.body)
    })
    .catch(error => {
      store.commit('fetchTopicsFailed', error)
    })
  }
}
