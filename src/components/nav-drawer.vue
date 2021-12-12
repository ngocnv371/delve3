<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('nav', ['drawer']),
  },
  methods: {
    ...mapMutations('nav', ['SET']),
    onUpdate(value) {
      this.SET(value)
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark

      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light')
    },
  },
}
</script>

<template>
  <v-navigation-drawer
    :value="drawer"
    absolute
    left
    temporary
    app
    @input="onUpdate"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Delve </v-list-item-title>
        <v-list-item-subtitle> deep </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item to="/tavern">
          <v-list-item-title>Tavern</v-list-item-title>
        </v-list-item>
        <v-list-item to="/barrack">
          <v-list-item-title>Barrack</v-list-item-title>
        </v-list-item>
        <v-list-item to="/dungeons">
          <v-list-item-title>Dungeons</v-list-item-title>
        </v-list-item>
        <v-list-item to="/inventory">
          <v-list-item-title>Inventory</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn v-if="$vuetify.theme.dark" block @click="toggleDarkMode">
          Light Mode
        </v-btn>
        <v-btn v-else block color="secondary" @click="toggleDarkMode">
          Dark Mode
        </v-btn>
      </div>
      <div class="pa-2">
        <v-btn block color="secondary" to="/profile"> Profile </v-btn>
      </div>
      <div class="pa-2">
        <v-btn block color="primary" to="/logout"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" module>
@import '@design';
</style>
