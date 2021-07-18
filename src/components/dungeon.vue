<script>
import AssignmentDialog from '@components/assignment-dialog.vue'

export default {
  components: { AssignmentDialog },
  props: {
    dungeon: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <v-card>
    <v-card-title v-text="dungeon.name"></v-card-title>
    <v-card-subtitle v-text="`L${dungeon.level}`"></v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <AssignmentDialog :dungeon="dungeon"></AssignmentDialog>
    </v-card-actions>
  </v-card>
</template>
