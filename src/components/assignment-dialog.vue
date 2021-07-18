<script>
import { mapState } from 'vuex'
export default {
  props: {
    dungeon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('barrack', ['parties']),
  },
}
</script>

<template>
  <v-dialog>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" text v-on="on">Assign</v-btn>
    </template>
    <v-card>
      <v-card-title>Select a party</v-card-title>
      <v-list>
        <v-list-item v-for="item of parties" :key="item.id">
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
