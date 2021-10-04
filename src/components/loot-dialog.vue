<script>
import { mapActions } from 'vuex'
import ForwardModel from '@src/mixins/forward-model'

export default {
  mixins: [ForwardModel],
  props: {
    expedition: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('expeditions', ['collectExpedition']),
    onCollect() {
      this.collectExpedition(this.expedition)
      this.localValue = false
    },
  },
}
</script>

<template>
  <v-dialog v-model="localValue">
    <v-card>
      <v-card-title>Expedition Log</v-card-title>
      <v-list v-if="expedition">
        <v-list-item v-for="item of expedition.loot" :key="item.id">
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-action>
            <v-list-item-action-text
              v-text="item.quantity"
            ></v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="onCollect">Collect</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
