import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Topic from './topic'
import Topics from './topics'

const plugins = process.env.NODE_ENV === 'development' ? [createLogger()] : []

export default new Vuex.Store({
  plugins,
  modules: {
    Topic,
    Topics
  }
})
