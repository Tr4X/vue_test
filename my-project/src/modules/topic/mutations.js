export const mutations = {
  fetchTopicRequest (store) {
    store.loading = true
  },
  fetchTopicSuccess (store, data) {
    store.data = data
    store.loading = false
    store.success = true
  },
  fetchTopicFailed (store, error) {
    store.loading = false
    store.success = false
    store.error = error
  }
}
