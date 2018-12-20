export const Types = {
	LOCALE: 'LOCALE',
	DRAWER: 'DRAWER'
}

export default {
	[Types.DRAWER] (state, enable) {
		state.drawer = enable
	}
}
