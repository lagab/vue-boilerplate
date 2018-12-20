import { Types } from './mutations'

export default {
	async toggleNavigation ({ commit, state }) {
		commit(Types.DRAWER, !state.drawer)
	}

}
