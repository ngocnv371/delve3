<script>
import { mapState } from 'vuex'

export default {
  model: {
    event: 'update',
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapState('barrack', ['unassigned']),
  },
  methods: {
    onClick(item) {
      this.$emit('update', item)
      this.show = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="show">
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on">
        <v-list-item-title
          v-if="value"
          v-text="`${value.name} L${value.level} ${value.class}`"
        ></v-list-item-title>
        <v-list-item-title v-else>None</v-list-item-title>
        <v-list-item-action>
          <v-list-item-action-text>Change</v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>Pick one member</v-card-title>
      <v-list>
        <v-list-item @click.stop="onClick(null)">
          <v-list-item-title>None</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="item of unassigned"
          :key="item.id"
          @click.stop="onClick(item)"
        >
          <v-list-item-title
            v-text="`${item.name} L${item.level} ${item.class}`"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click.stop="show = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
