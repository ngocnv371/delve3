<script>
import Layout from '@layouts/main.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  page() {
    return {
      title: 'Tavern',
      meta: [
        {
          name: 'description',
          content: `The tavern where all the adventurers stay.`,
        },
      ],
    }
  },
  components: { Layout },
  computed: {
    ...mapState('tavern', ['adventurers']),
  },
  methods: {
    ...mapMutations('tavern', ['REMOVE']),
    ...mapMutations('barrack', ['ADD_UNASSIGNED']),
    hire(item) {
      this.REMOVE(item)
      this.ADD_UNASSIGNED(item)
    },
  },
}
</script>

<template>
  <Layout>
    <v-row class="pa-0 align-self-start">
      <v-col>
        <v-card>
          <v-card-title>Wandering Adventurers</v-card-title>
          <v-list>
            <v-list-item v-for="item of adventurers" :key="item.id">
              <v-list-item-title
                v-text="`${item.name} L${item.level} ${item.class}`"
              ></v-list-item-title>
              <v-list-item-icon @click.stop="hire(item)">
                <v-icon>user-plus</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item v-if="!adventurers.length">
              <v-list-item-title> The tavern is empty </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
