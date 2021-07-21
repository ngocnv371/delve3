<script>
import AssignmentDialog from '@components/assignment-dialog.vue'
import LootDialog from '@components/loot-dialog.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AssignmentDialog, LootDialog },
  props: {
    dungeon: {
      type: Object,
      required: true,
    },
  },
  data: () => ({ showAssignmentDialog: false, showLootDialog: false }),
  computed: {
    expedition() {
      return this.getByDungeonId()(this.dungeon.id)
    },
  },
  methods: {
    ...mapGetters('expeditions', ['getByDungeonId']),
  },
}
</script>

<template>
  <v-card>
    <v-card-title v-text="dungeon.name"></v-card-title>
    <v-card-subtitle v-text="`Level ${dungeon.level}`"></v-card-subtitle>
    <v-card-text v-text="dungeon.description"></v-card-text>
    <v-list v-if="dungeon.loot.length">
      <v-subheader>Loot</v-subheader>
      <v-list-item v-for="item of dungeon.loot" :key="item.id">
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!expedition"
        color="primary"
        text
        @click="showAssignmentDialog = true"
      >
        Assign
      </v-btn>
      <v-btn v-else-if="!expedition.over" text color="primary" disabled>
        <v-icon class="fa-spin">spinner</v-icon>
      </v-btn>
      <v-btn v-else text color="success" @click="showLootDialog = true">
        Loot
      </v-btn>
    </v-card-actions>
    <AssignmentDialog
      v-model="showAssignmentDialog"
      :dungeon="dungeon"
    ></AssignmentDialog>
    <LootDialog
      v-if="expedition"
      v-model="showLootDialog"
      :expedition="expedition"
    />
  </v-card>
</template>
