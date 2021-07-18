<script>
import Layout from '@layouts/main.vue'
import Dungeon from '@components/dungeon.vue'
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
  components: { Layout, Dungeon },
  computed: {
    ...mapState('dungeons', ['items']),
  },
}
</script>

<template>
  <Layout>
    <v-row class="align-self-start">
      <v-col v-for="item of items" :key="item.id" cols="12">
        <Dungeon :dungeon="item" />
      </v-col>
    </v-row>
  </Layout>
</template>
