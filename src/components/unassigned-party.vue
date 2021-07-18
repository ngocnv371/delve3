<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('barrack', ['unassigned']),
  },
  methods: {
    ...mapMutations('barrack', {
      fire: 'REMOVE_UNASSIGNED',
    }),
  },
}
</script>

<template>
  <v-card v-show="unassigned.length" class="unassigned-list">
    <v-card-title>Unassigned members</v-card-title>
    <v-list>
      <v-list-item v-for="item of unassigned" :key="item.id">
        <v-list-item-title
          v-text="`${item.name} L${item.level} ${item.class}`"
        ></v-list-item-title>
        <v-list-item-icon @click="fire(item)">
          <v-icon>user-slash</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>
