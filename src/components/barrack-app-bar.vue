<script>
import { mapMutations } from 'vuex'
import AppBar from './app-bar.vue'

export default {
  components: { AppBar },
  methods: {
    ...mapMutations('barrack', ['ADD_PARTY']),
    addParty() {
      this.ADD_PARTY({
        name: 'new party',
        members: [null, null, null, null, null],
      })
    },
  },
}
</script>

<template>
  <AppBar>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="addParty">
      <v-icon>user-plus</v-icon>
    </v-btn>
  </AppBar>
</template>
