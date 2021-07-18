<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ForwardModel from '@src/mixins/forward-model'

export default {
  mixins: [ForwardModel],
  props: {
    dungeon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('barrack', ['availableParties']),
  },
  methods: {
    ...mapActions('expeditions', ['start']),
    ...mapMutations('barrack', ['SET_EXPEDITION']),
    onSelect(item) {
      const expeditionId = this.start({ party: item, dungeon: this.dungeon })
      this.SET_EXPEDITION({ partyId: item.id, expeditionId })
      this.localValue = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="localValue">
    <v-card>
      <v-card-title>Select a party</v-card-title>
      <v-list>
        <v-list-item
          v-for="item of availableParties"
          :key="item.id"
          @click="onSelect(item)"
        >
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
