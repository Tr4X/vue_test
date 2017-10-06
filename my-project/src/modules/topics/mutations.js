export const mutations = {
  fetchTopicsRequest (store) {
    store.loading = true
    store.success = false
  },
  fetchTopicsSuccess (store, data) {
    store.data = data
    store.loading = false
    store.success = true
  },
  fetchTopicsFailed (store, error) {
    store.loading = false
    store.success = false
    store.error = error
  }
}
