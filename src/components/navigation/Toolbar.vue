<template>
  <v-toolbar
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  color="white"
  app
  fixed
  >
  <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
    <v-toolbar-side-icon @click.stop="toggleNavigation"></v-toolbar-side-icon>
    <span class="hidden-sm-and-down">Contract Manager</span>
  </v-toolbar-title>
  <!--<v-text-field
  flat
  solo-inverted
  hide-details
  prepend-inner-icon="search"
  label="Search"
  class="hidden-sm-and-down"
  ></v-text-field>-->
    <v-menu :nudge-width="100">
      <v-toolbar-title slot="activator" >
        <small>All</small>
        <v-icon>arrow_drop_down</v-icon>
      </v-toolbar-title>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.path" :to="item.path">
          <v-list-tile-title v-text="item.text"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  <v-spacer></v-spacer>
  <!--<v-btn icon>
    <v-icon>apps</v-icon>
  </v-btn>
  <v-btn icon>
    <v-icon>notifications</v-icon>
  </v-btn>-->
  <v-menu bottom left>
    <v-btn icon large slot="activator">
      <v-avatar size="32px" tile>
        <img
        src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
        alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
    <v-list dense>
      <v-list-tile v-for="item in items" :key="item.path" :to="item.path">
        <v-list-tile-title v-text="item.text"></v-list-tile-title>
      </v-list-tile>
    </v-list>
</v-menu>
</v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Toolbar',
	data: () => ({
		items: [
			{ icon: 'contact', text: 'Account', path: '/account' },
			{ icon: 'folder', text: 'Settings', path: '/settings' },
			{ icon: 'contacts', text: 'logout', path: '/logout' }
		]
	}),
	methods: {
		...mapActions(['toggleNavigation'])
	}
}
</script>
