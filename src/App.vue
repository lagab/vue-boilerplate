<template>
<v-app light v-if="!authenticated">
	<Navigation />
  <Toolbar />
	<v-content>
		<v-container fluid>
			<router-view></router-view>
		</v-container>
	</v-content>
	<v-footer class="pa-3">
		<v-spacer></v-spacer>
		<div>Made by <strong>lagab</strong></div>
	</v-footer>
</v-app>
<v-app  class="primary2" v-else>
	<v-container class="authentication-layout">

    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm8 md4 lg3>
        <v-card class="elevation-2 pa-5">
          <v-card-text>
            <div class="text-xs-center ma-4">
              <v-avatar>
                <v-icon  x-large>person_pin</v-icon>
              </v-avatar>
            </div>
            <v-form>
              <v-text-field name="login" label="Login" type="text"></v-text-field>
              <v-text-field id="password" name="password" label="Password" type="password"></v-text-field>
              <v-checkbox label="Remember Me"></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions class="text-xs-center">
            <v-btn color="primary" block>Login</v-btn>
            <br/>
          </v-card-actions>
        </v-card>
        <p class="text-xs-center ma-4">
          Already have an account? <a href="#/signin" class="primary--text">Sign in</a>
        </p>
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-flex>
    </v-layout>
	</v-container>
</v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Navigation from '@/components/navigation/Navigation.vue'
import Toolbar from '@/components/navigation/Toolbar.vue'

export default {
	name: 'App',
	computed: {
		...mapState({
			username: state => state.credentials.username
		}),
		...mapGetters({
			authenticated: 'credentials/isAuthenticated'
		})
	},
	components: {
		Navigation,
		Toolbar
	},
	data () {
		return {
			//
		}
	}
}
</script>
