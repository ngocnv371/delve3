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
    async onClose(item) {
      const expeditionId = await this.start({
        party: item,
        dungeon: this.dungeon,
      })
      this.SET_EXPEDITION({ partyId: item.id, expeditionId })
      this.localValue = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="localValue">
    <v-card>
      <v-card-title>Mission Assignment</v-card-title>
      <v-select
        class="pa-2 partyselect"
        :items="availableParties"
        item-text="name"
        item-value="id"
        label="Party"
        no-data-text="No party available"
        return-object
      ></v-select>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="onClose">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" module>
@import '@design';

.partyselect {
  max-width: 150px;
}
</style>
