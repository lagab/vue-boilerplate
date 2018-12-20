<template>
  <!--<div class="about">
    <h1>This is an about page</h1>
  </div>-->
  <v-container fluid grid-list-md pa-0>
    <v-layout fluid>
      <v-flex text-xs-center >
        <h3 class="display-1">Contracts</h3>
        <v-layout align-start justify-end row wrap>
          <v-btn dark color="primary" small>Add new</v-btn>
          <v-btn disabled small>export</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <v-list dense class="transparent">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          avatar
          @click=""
        >
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-menu bottom left>
              <v-btn icon ripple
                     slot="activator"
                     dark>
                <v-icon color="grey lighten-1">more_vert</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>visibility</v-icon> view</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>create</v-icon> edit</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="">
                  <v-list-tile-title><v-icon>delete_outline</v-icon> delete</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        viewdialog: false,
        items: [
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014'}
        ],
        items2: [
          {icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014'},
          {icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014'}
        ],
        headers: [
          {text: 'Label', value: 'Jan 20, 2014'},
          {text: 'Value', value: 'Jan 10, 2014'}
        ],
        genders: [
          {text: 'Unknow', value: 'UNKNOW'},
          {text: 'Male', value: 'MALE'},
          {text: 'Female', value: 'FEMALE'}
        ]
      }
    }
  }
</script>
