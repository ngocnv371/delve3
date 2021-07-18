<script>
import Layout from '@layouts/main.vue'
import AssignmentDialog from '@components/assignment-dialog.vue'
import { mapState } from 'vuex'

export default {
  page() {
    return {
      title: 'Dungeons',
      meta: [
        {
          name: 'description',
          content: `The tavern where all the adventurers stay.`,
        },
      ],
    }
  },
  components: { Layout, AssignmentDialog },
  computed: {
    ...mapState('dungeons', ['dungeons']),
  },
}
</script>

<template>
  <Layout>
    <v-row class="align-self-start">
      <v-col v-for="item of dungeons" :key="item.id" cols="12">
        <v-card>
          <v-card-title v-text="item.name"></v-card-title>
          <v-card-subtitle v-text="`L${item.level}`"></v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <AssignmentDialog :dungeon="item"></AssignmentDialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
