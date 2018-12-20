import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// Modules
import credentials from './modules/credentials'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		locale: 'fr',
		drawer: false,
		notification: ''
	},
	modules: {
		credentials
	},
	mutations,
	getters,
	actions
})
