<script>
import AssignmentDialog from '@components/assignment-dialog.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AssignmentDialog },
  props: {
    dungeon: {
      type: Object,
      required: true,
    },
  },
  data: () => ({ showAssignmentDialog: false }),
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
    <v-card-subtitle v-text="`L${dungeon.level}`"></v-card-subtitle>
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
      <v-btn v-else text color="primary">Loot</v-btn>
    </v-card-actions>
    <AssignmentDialog
      v-model="showAssignmentDialog"
      :dungeon="dungeon"
    ></AssignmentDialog>
  </v-card>
</template>
