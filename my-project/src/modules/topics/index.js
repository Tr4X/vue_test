import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

export default {
  state: {
    data: {},
    loading: false,
    success: false,
    error: ''
  },
  getters,
  mutations,
  actions
}
